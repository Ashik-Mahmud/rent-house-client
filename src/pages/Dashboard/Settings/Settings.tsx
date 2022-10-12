import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/store";
import { logout } from "../../../features/AuthSlice";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useChangePasswordMutation } from "../../../services/AuthApi";
import RequestModalForHouseHolder from "./RequestModalForHouseHolder";
import VerifyBlogModal from "./VerifyBlogModal";

type Props = {};

const Settings = (props: Props) => {
  const { updatedUser, setUser } = useAuth<authUserInterface | any>({});
  const [isSent, setIsSent] = useState(false);
  const role = updatedUser?.role;
  const isVerify = updatedUser?.isVerified;
  const isBlogAllowed = updatedUser?.blogAllowed;
  const navigate = useNavigate();

  const [changePassword, { data, isSuccess, error }] =
    useChangePasswordMutation();

  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();

  /* Handle Change Password Form */
  const handleChangePassword = handleSubmit(async (formData) => {
    const { oldPassword, newPassword, repeatNewPassword } = formData;
    if (!oldPassword) return toast.error("Old password is required.");
    if (!oldPassword || !newPassword || !repeatNewPassword)
      return toast.error("All fields are required"); // Form error handle, all field required

    if (newPassword !== repeatNewPassword) {
      return toast.error("Password must be same with repeat password.");
    }
    try {
      /* To Convert and convert */
      await changePassword({
        ...formData,
        repeatNewPassword: undefined,
        email: updatedUser?.email,
      });
      reset();
    } catch (error) {
      throw new Error((error as any)?.message);
    }
  });

  /* 監聽changePassword狀態值變化，有成功會導回列表page */
  useEffect(() => {
    if (error) toast.error((error as any)?.data?.message);
    if (isSuccess) {
      toast.success(
        data?.message + " Now you may login using the new password"
      );
      setUser(null);
      dispatch(logout());
      navigate("/login");
    }
  }, [isSuccess, data, error, dispatch, setUser, navigate]);

  /* Request For Blog */

  return (
    <>
      <VerifyBlogModal setIsSent={setIsSent} />
      <RequestModalForHouseHolder />
      <div>
        <div className="p-5 my-4 bg-white font-poppins">
          <h3 className="text-2xl font-bold mb-3">Settings</h3>

          <div className="settings-content">
            {role !== "admin" && (
              <>
                {!isBlogAllowed && (
                  <div className="req-for-blog flex-col justify-center sm:justify-between sm:flex-row flex items-center my-8 bg-base-200 p-5 rounded-lg">
                    <h3 className="text-xl font-bold text-center sm:text-left">
                      If you want to get Blogs writing authority
                    </h3>

                    {isVerify ? (
                      updatedUser.isRequestSent || isSent ? (
                        <label className="btn btn-warning rounded-full mt-4  sm:mt-0">
                          Already sent Wait for Accept
                        </label>
                      ) : (
                        <label
                          htmlFor="my-modal-for-blog"
                          className="btn btn-success rounded-full mt-4  sm:mt-0"
                        >
                          Request For Blog
                        </label>
                      )
                    ) : (
                      <button
                        className="btn btn-warning pointer-events-none rounded-full mt-4  sm:mt-0 tooltip"
                        data-tip="Verify First"
                      >
                        Verify Account to Get Request
                      </button>
                    )}
                  </div>
                )}
                {role === "customer" && (
                  <div className="req-for-blog flex items-center  my-8 bg-base-200 p-5 rounded-lg flex-col justify-center sm:justify-between sm:flex-row">
                    <h3 className="text-xl font-bold text-center sm:text-left">
                      If you want to get House Holder Account
                    </h3>
                    {isVerify ? (
                      <label
                        htmlFor="my-modal-for-house-holder"
                        className="btn btn-success rounded-full mt-4 sm:mt-0"
                      >
                        Request For House Holder Account
                      </label>
                    ) : (
                      <button
                        className="btn btn-warning pointer-events-none rounded-full mt-4  sm:mt-0 tooltip"
                        data-tip="Verify First"
                      >
                        Verify Account to Get Request
                      </button>
                    )}
                  </div>
                )}
              </>
            )}

            <div className="password-change-field bg-gray-50 p-8 rounded">
              <h3 className="text-2xl font-bold mb-6">Change Password</h3>
              <form action="" onSubmit={handleChangePassword}>
                <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2 bg-white">
                  <div className="icon">
                    <BiLockAlt />
                  </div>
                  <input
                    type="password"
                    className="outline-none  w-full pl-4 text-sm"
                    placeholder="Old Password"
                    {...register("oldPassword")}
                  />
                </div>
                <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2 bg-white">
                  <div className="icon">
                    <BiLockAlt />
                  </div>
                  <input
                    type="password"
                    className="outline-none  w-full pl-4  text-sm"
                    placeholder="New Password"
                    {...register("newPassword")}
                  />
                </div>
                <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2 bg-white">
                  <div className="icon">
                    <BiLockAlt />
                  </div>
                  <input
                    type="password"
                    className="outline-none  w-full pl-4  text-sm"
                    placeholder="Confirm Password"
                    {...register("repeatNewPassword")}
                  />
                </div>
                <button className="btn btn-success rounded-full mt-5">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
