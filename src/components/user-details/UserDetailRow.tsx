import type { FunctionComponent as FC } from "react";

interface UserDetailRowProps {
  label: string;
  value: string;
}

const UserDetailRow: FC<UserDetailRowProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-400">{label}</span>

      <span className="text-sm font-medium text-gray-800 text-right max-w-[60%]">
        {value}
      </span>
    </div>
  );
};

export default UserDetailRow;
