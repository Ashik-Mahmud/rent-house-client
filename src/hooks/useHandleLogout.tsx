import toast from "react-hot-toast";
import { useAppDispatch } from "../app/store";
import { logout } from "../features/AuthSlice";

/* Handle Logout */
const useHandleLogout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };
  return [handleLogout];
};

export default useHandleLogout;
