import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {
  children: React.ReactNode;
};

const AuthChangeRoute = ({ children }: Props) => {
  const { user } = useAuth<authUserInterface | any>({});

  if (user?.token) {
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;
};

export default AuthChangeRoute;
