import api from "./axios";
import type { UsersApiResponse } from "../types/user";
import type { User as UserApiResponse } from "../types/user";

export const getUsers = async (): Promise<UsersApiResponse> => {
  try {
    const response = await api.get<UsersApiResponse>("users?limit=20");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users", error);
    throw error;
  }
};

export const getUserById = async (id: string): Promise<UserApiResponse> => {
  try {
    const response = await api.get<UserApiResponse>(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users", error);
    throw error;
  }
};
