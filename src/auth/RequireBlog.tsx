import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {
  children: React.ReactNode;
};

const RequireBlog = ({ children }: Props) => {
  const { updatedUser, isLoading } = useAuth<authUserInterface>({});

  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!updatedUser?.blogAllowed) {
    toast.error("You are not allowed to access to blogs");
    return (
      <Navigate to="/dashboard/settings" replace state={{ from: location }} />
    );
  }

  return <>{children}</>;
};

export default RequireBlog;
