import { useState, useEffect } from "react";
import type { User } from "../types/user";
import { getUsers } from "../api/users";

export interface UseUsersReturn {
  users: User[];
  loading: boolean;
  error: string | null;
}

const useUsers = (): UseUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const data = await getUsers();
        setUsers(data.users);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch users",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return {
    users,
    loading,
    error,
  };
};

export default useUsers;
