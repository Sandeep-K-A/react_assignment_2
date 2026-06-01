import type { FunctionComponent as FC } from "react";
import type { User } from "../../types/user";
import UserDetailRow from "./UserDetailRow";

interface UserProfileCardProps {
  user: User;
}

const UserProfileCard: FC<UserProfileCardProps> = ({ user }) => {
  const rows = [
    { label: "User ID", value: `#${user.id}` },
    { label: "Username", value: `@${user.username}` },
    { label: "Email", value: user.email },
    { label: "Phone", value: user.phone },
    { label: "Age", value: `${user.age} yrs` },
    { label: "Gender", value: user.gender },
    { label: "Role", value: user.role },
    { label: "University", value: user.university },
    { label: "Company", value: user.company.name },
    { label: "Title", value: user.company.title },
    { label: "Department", value: user.company.department },
    {
      label: "Location",
      value: `${user.address.city}, ${user.address.state}, ${user.address.country}`,
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <div className="bg-gray-900 px-8 py-8 flex items-center gap-5">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h1 className="text-white text-xl font-bold">
            {user.firstName} {user.lastName}
          </h1>

          <span className="inline-block mt-1 text-xs bg-indigo-500 text-white px-2.5 py-0.5 rounded-full capitalize">
            {user.role}
          </span>
        </div>
      </div>

      <div className="px-8 py-4">
        {rows.map((row) => (
          <UserDetailRow key={row.label} label={row.label} value={row.value} />
        ))}
      </div>
    </div>
  );
};

export default UserProfileCard;
