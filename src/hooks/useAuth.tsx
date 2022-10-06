import { useState } from "react";
import Cookies from "universal-cookie";

type Props = {};

const useAuth = <T,>(props: Props) => {
  const cookies = new Cookies();
  const [user, setUser] = useState<T>(cookies.get("user"));

  return [user, setUser];
};

export default useAuth;
