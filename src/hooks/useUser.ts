import { useEffect, useState } from "react";
import { getUserById } from "../api/users";
import type { User } from "../types/user";

export interface UseUserReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const useUser = (id: string | undefined): UseUserReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("User ID is required");
      setLoading(false);
      return;
    }

    const fetchUser = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const data = await getUserById(id);
        setUser(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch user",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  return {
    user,
    loading,
    error,
  };
};

export default useUser;
