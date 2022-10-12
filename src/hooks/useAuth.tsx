import { useState } from "react";
import { useQuery } from "react-query";
import Cookies from "universal-cookie";
import { AxiosUser } from "../api/Axios";

type Props = {};

const useAuth = <T,>(props: Props) => {
  const cookies = new Cookies();
  const [user, setUser] = useState<T>(cookies.get("user"));
  const newUser = user as any;
  const {
    data: newData,
    isLoading,
    refetch,
  } = useQuery("userInit", async () => {
    const res = await AxiosUser.get(`/me/${newUser?.user._id}`);
    return res.data?.data;
  });

  const updatedUser = newData;

  return { user, isLoading, updatedUser, setUser, refetch };
};

export default useAuth;
