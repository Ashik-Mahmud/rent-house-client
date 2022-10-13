import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Cookies from "universal-cookie";

type Props = {};

const useAuth = <T,>(props: Props) => {
  const cookies = new Cookies();
  const [user, setUser] = useState<T>(cookies.get("user"));
  const newUser = user as any;

  const {
    data: newData,
    isLoading,
    refetch,
  } = useQuery(["userInit", newUser], async () => {
    if (newUser) {
      const res = await axios.get(
        `http://localhost:5000/api/v1/users/me/${newUser?.user?._id}`,
        {
          headers: {
            authorization: `Bearer ${newUser?.token}`,
          },
        }
      );
      return res?.data?.data;
    }
  });

  const updatedUser = newData;

  return { user, isLoading, updatedUser, setUser, refetch };
};

export default useAuth;
