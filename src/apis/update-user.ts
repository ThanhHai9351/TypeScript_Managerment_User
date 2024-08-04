import { useMutation } from "@tanstack/react-query";
import axios from "axios"

const updateUser = async (id: number, data: any) => {
    try {
        const response = await axios.put(`http://localhost:8080/users?id=${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error('An error has occurred: ' + (error as Error).message);
    }
};

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: any }) => updateUser(id, data),
        onError: (error: Error) => {
            console.error('Update failed:', error.message);
        },
        onSuccess: (data) => {
            console.log('Update successful:', data);
        }
    });
};