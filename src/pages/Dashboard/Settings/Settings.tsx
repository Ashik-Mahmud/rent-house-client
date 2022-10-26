import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiCheck, BiEdit, BiLockAlt, BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { base_backend_url } from "../../../configs/config";
import { logout } from "../../../features/AuthSlice";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useChangePasswordMutation } from "../../../services/AuthApi";
import { stateOptions, themeOptions } from "../../../utilities/data";
import RequestModalForHouseHolder from "./RequestModalForHouseHolder";
import VerifyBlogModal from "./VerifyBlogModal";

type Props = {
  appChangeRefetch: () => void;
};

const Settings = ({ appChangeRefetch }: Props) => {
  const { updatedUser, setUser, user } = useAuth<authUserInterface | any>({});
  const { name } = useAppSelector((state) => state.appOption);
  const role = updatedUser?.role;
  const isVerify = updatedUser?.isVerified;
  const isBlogAllowed = updatedUser?.blogAllowed;
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [changePassword, { data, isSuccess, error }] =
    useChangePasswordMutation();

  const { register, handleSubmit, reset, setValue } = useForm();
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
      reset();
    }
  }, [isSuccess, data, error, dispatch, setUser, navigate, reset]);

  /* Handle Change App Name */
  const handleChangeAppName = handleSubmit(async (formData) => {
    const { appName } = formData;
    if (!appName) return toast.error("App name is required.");
    try {
      const { data } = await axios.post(
        `${base_backend_url}/api/v1/admin/change-app-name`,
        { name: appName },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      cogoToast.success(data?.message);
      setIsEdit(false);
      appChangeRefetch();
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    setValue("appName", name);
  }, [setValue, name]);

  return (
    <>
      <VerifyBlogModal />
      <RequestModalForHouseHolder />
      <div>
        <div className="p-5 my-4 bg-white font-poppins">
          <h3 className="text-2xl font-bold mb-3">Settings</h3>

          <div className="settings-content">
            {role !== "admin" && role !== "manager" && (
              <>
                {!isBlogAllowed && (
                  <div className="req-for-blog flex-col justify-center sm:justify-between sm:flex-row flex items-center my-8 bg-gray-50  p-5 rounded-lg">
                    <h3 className="text-xl font-bold text-center sm:text-left">
                      If you want to get Blogs writing authority
                    </h3>

                    {isVerify ? (
                      updatedUser.isBlogRequestSent ? (
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
                  <div className="req-for-blog flex items-center  my-8 bg-gray-50  p-5 rounded-lg flex-col justify-center sm:justify-between sm:flex-row">
                    <h3 className="text-xl font-bold text-center sm:text-left">
                      If you want to get House Holder Account
                    </h3>
                    {isVerify ? (
                      updatedUser?.isHouseHolderReqSent ? (
                        <label className="btn btn-warning rounded-full mt-4  sm:mt-0">
                          Already sent Wait for Accept
                        </label>
                      ) : (
                        <label
                          htmlFor="my-modal-for-house-holder"
                          className="btn btn-success rounded-full mt-4 sm:mt-0"
                        >
                          Request For House Holder Account
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
              </>
            )}
            {role === "admin" && (
              <div className="flex items-center justify-between py-6 rounded my-4 bg-gray-50 px-5">
                <h2 className="text-xl font-bold">Change App Name</h2>
                <form
                  onSubmit={handleChangeAppName}
                  className="flex items-center gap-3"
                >
                  {isEdit ? (
                    <input
                      type="text"
                      placeholder="Change App Name"
                      className="input input-sm"
                      {...register("appName")}
                      autoComplete="off"
                    />
                  ) : (
                    <h2 className="text-2xl">{name} </h2>
                  )}

                  {isEdit ? (
                    <>
                      <button
                        type="submit"
                        className="cursor-pointer text-primary font-bold text-2xl"
                      >
                        <BiCheck />
                      </button>{" "}
                      <span
                        className="cursor-pointer text-error font-bold text-2xl"
                        onClick={() => setIsEdit(false)}
                      >
                        <BiX />
                      </span>
                    </>
                  ) : (
                    <span
                      className="cursor-pointer text-primary font-bold"
                      onClick={() => setIsEdit(true)}
                    >
                      <BiEdit />
                    </span>
                  )}
                </form>
              </div>
            )}

            <div className="flex items-center justify-between py-6 rounded my-4 bg-gray-50 px-5">
              <h2 className="text-xl font-bold">Change Language</h2>
              <div className="flex items-center gap-3">
                <Select options={stateOptions} className="w-60" />
              </div>
            </div>
            <div className="flex items-center justify-between py-6 rounded my-4 bg-gray-50 px-5">
              <h2 className="text-xl font-bold">Change Theme</h2>
              <div className="flex items-start gap-3 flex-col">
                <Select options={themeOptions} className="w-60" />
                <span>
                  Active Theme - <span>emerald</span>
                </span>
              </div>
            </div>

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
