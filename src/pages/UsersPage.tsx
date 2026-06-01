import type { FunctionComponent as FC } from "react";
import useUsers from "../hooks/useUsers";
import UserGrid from "../components/users/UserGrid";
import UserSkeleton from "../components/users/UserSkeleton";
import ErrorMessage from "../components/users/ErrorMessage";

const UsersPage: FC = () => {
  const { users, loading, error } = useUsers();
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Users</h1>

        <p className="text-gray-500 text-sm">
          {loading
            ? "Loading..."
            : `${users.length} members · click a user to view their profile`}
        </p>
      </div>

      {error && <ErrorMessage message={error} />}

      {loading && <UserSkeleton />}

      {!loading && !error && <UserGrid users={users} />}
    </main>
  );
};

export default UsersPage;
