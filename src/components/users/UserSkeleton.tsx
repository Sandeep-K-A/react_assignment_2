import type { FunctionComponent as FC } from "react";

const UserSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl p-5 animate-pulse"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gray-200" />

            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-200 rounded w-3/4" />
              <div className="h-2 bg-gray-200 rounded w-1/2" />
            </div>
          </div>

          <div className="h-2 bg-gray-200 rounded w-full mb-2" />
          <div className="h-2 bg-gray-200 rounded w-2/3" />
        </div>
      ))}
    </div>
  );
};

export default UserSkeleton;
