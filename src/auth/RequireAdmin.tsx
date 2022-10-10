import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {
  children: React.ReactNode;
};

const RequireAdmin = ({ children }: Props) => {
  const { updatedUser, isLoading } = useAuth<authUserInterface | any>({});
  const location = useLocation();

  if (isLoading) {
    return null;
  }

  if (updatedUser?.role !== "admin") {
    toast.error("access denied");
    return <Navigate to={"/dashboard"} replace state={{ from: location }} />;
  }
  return <>{children}</>;
};

export default RequireAdmin;
