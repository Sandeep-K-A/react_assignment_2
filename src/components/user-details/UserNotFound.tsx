import type { FunctionComponent as FC } from "react";
import { Link } from "react-router-dom";

interface UserNotFoundProps {
  message: string;
}

const UserNotFound: FC<UserNotFoundProps> = ({ message }) => {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-center">
      <p className="text-5xl mb-4">🔍</p>

      <h2 className="text-xl font-bold text-gray-800 mb-2">User not found</h2>

      <p className="text-gray-500 text-sm mb-6">{message}</p>

      <Link
        to="/users"
        className="bg-gray-900 text-white px-5 py-2.5 rounded-lg"
      >
        Back to Users
      </Link>
    </main>
  );
};

export default UserNotFound;
