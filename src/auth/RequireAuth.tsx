import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = { children: React.ReactNode };

const RequireAuth = ({ children }: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const location = useLocation();

  if (!user?.token) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default RequireAuth;
