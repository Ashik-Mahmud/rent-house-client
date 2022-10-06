import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {
  children: React.ReactNode;
};

const RequireAdmin = ({ children }: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const location = useLocation();
  toast.warn("Warning! It was admin page");
  if (updatedUser?.role !== "admin") {
    return <Navigate to={"/dashboard"} replace state={{ from: location }} />;
  }
  return <>{children}</>;
};

export default RequireAdmin;
