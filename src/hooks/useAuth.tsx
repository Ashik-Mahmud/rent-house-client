import { useState } from "react";
import Cookies from "universal-cookie";
import { useGetUserQuery } from "../services/AuthApi";

type Props = {};

const useAuth = <T,>(props: Props) => {
  const cookies = new Cookies();
  const [user, setUser] = useState<T>(cookies.get("user"));
  const newUser = user as any;
  const { data } = useGetUserQuery(newUser?.user._id);
  const updatedUser = data?.data;

  return { user, updatedUser, setUser };
};

export default useAuth;
