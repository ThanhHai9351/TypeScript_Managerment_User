import axios from "axios";
import { User } from "../types/api";
import { useQuery } from "@tanstack/react-query";

const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('http://localhost:8080/users');
    return response.data;
  } catch (error) {
    throw new Error('An error has occurred: ' + (error as Error).message);
  }
};

const getUserFromId = async (id : number): Promise<User> =>{
  try{
    const response = await axios.get<User>(`http://localhost:8080/users?id=${id}`);
    return response.data;
  }catch(error)
  {
    throw new Error('An error has occurred: ' + (error as Error).message);
  }
}


const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['repoData'],
    queryFn: getUsers,
  });
};

const useUserId = (id:number) => {
  return useQuery<User, Error>({
    queryKey: ['repoData',id],
    queryFn: () => getUserFromId(id),
    enabled: !!id,
  });
};

export {useUsers,useUserId}

