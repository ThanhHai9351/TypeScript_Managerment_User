import axios from "axios";
import { User } from "../types/api";
import { useQuery } from "@tanstack/react-query";

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('http://localhost:8080/users');
    return response.data;
  } catch (error) {
    throw new Error('An error has occurred: ' + (error as Error).message);
  }
};

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['repoData'],
    queryFn: getUsers,
  });
};
