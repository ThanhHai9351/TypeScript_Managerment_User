import { useMutation } from "@tanstack/react-query";
import axios from "axios"

const insertUser = async (data: any) =>{
    try{
        const response = await axios.post(`http://localhost:8080/users`,data);
        return response.data;
    }catch(error)
    {
        throw new Error('An error has occurred: ' + (error as Error).message);
    }
}

export const useInsertUser = () =>{
   return useMutation ({
    mutationFn: ({data} : {data: any})=>insertUser(data),
    onError: (error: Error) => {
        console.error('Insert failed:', error.message);
    },
    onSuccess: (data) => {
        console.log('Insert successful:', data);
    }
   })
}