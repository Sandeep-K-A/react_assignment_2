import type { FunctionComponent as FC } from "react";

const UserDetailSkeleton: FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden animate-pulse">
      <div className="bg-gray-200 h-32" />

      <div className="px-8 py-6 space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex justify-between py-3 border-b border-gray-100"
          >
            <div className="h-3 bg-gray-200 rounded w-1/4" />
            <div className="h-3 bg-gray-200 rounded w-1/3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetailSkeleton;
