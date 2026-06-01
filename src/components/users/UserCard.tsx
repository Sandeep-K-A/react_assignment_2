import type { FunctionComponent as FC } from "react";
import type { User } from "../../types/user";
import { Link } from "react-router-dom";

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Link
      to={`/users/${user.id}`}
      className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200 group"
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-10 h-10 rounded-full object-cover bg-gray-100"
        />

        <div>
          <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors text-sm">
            {user.firstName} {user.lastName}
          </p>

          <p className="text-xs text-gray-400">{user.company.title}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400 truncate">{user.email}</p>

      <p className="text-xs text-gray-400 mt-0.5">
        📍 {user.address.city}, {user.address.state}
      </p>
    </Link>
  );
};

export default UserCard;
