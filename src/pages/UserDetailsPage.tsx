import type { FunctionComponent as FC } from "react";
import { Link, useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import UserProfileCard from "../components/user-details/UserProfileCard";
import UserDetailSkeleton from "../components/user-details/UserDetailSkeleton";
import UserNotFound from "../components/user-details/UserNotFound";

const UserDetailsPage: FC = () => {
  const { id } = useParams();

  const { user, loading, error } = useUser(id);

  if (loading) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-16">
        <UserDetailSkeleton />
      </main>
    );
  }

  if (error || !user) {
    return <UserNotFound message={error ?? "This user does not exist."} />;
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link
        to="/users"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 mb-8"
      >
        ← Back to Users
      </Link>

      <UserProfileCard user={user} />
    </main>
  );
};

export default UserDetailsPage;
