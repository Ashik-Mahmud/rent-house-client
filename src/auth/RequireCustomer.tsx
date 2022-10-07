import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";
type Props = {
  children: React.ReactNode;
};

const RequireCustomer = ({ children }: Props) => {
  const { updatedUser, isLoading } = useAuth<authUserInterface | any>({});

  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (updatedUser?.role !== "customer") {
    toast.error("Access Denied");
    return <Navigate to="/dashboard" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default RequireCustomer;
