import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {
  children: React.ReactNode;
};

const RequireUser = ({ children }: Props) => {
  const { updatedUser, isLoading } = useAuth<authUserInterface | any>({});
  const location = useLocation();
  if (isLoading) return <PulseLoader size={40} />;
  if (updatedUser?.role !== "user") {
    toast.error("Access Denied");
    return <Navigate to={"/dashboard"} replace state={{ from: location }} />;
  }
  return <>{children}</>;
};

export default RequireUser;
