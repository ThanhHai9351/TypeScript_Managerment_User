import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const deleteUser = async (userId: number): Promise<void> => {
  try {
    await axios.delete(`http://localhost:8080/users/${userId}`);
  } catch (error) {
    throw new Error('An error has occurred: ' + (error as Error).message);
  }
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn:(userId: number)=>{
      return deleteUser(userId)
    } ,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  }); 
};
