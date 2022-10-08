import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { authUserInterface } from "../../interfaces/UserInterface";
import { useResetPasswordMutation } from "../../services/AuthApi";
type Props = {};

const ResetPasswordField = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const { verified } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [resetPassword] = useResetPasswordMutation();
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const navigate = useNavigate();

  /* Handle Reset Password */
  const handleResetPassword = handleSubmit(async (formData) => {
    if (!formData?.resetPasswordEmail)
      return toast.error("Email field is required.");
    await resetPassword(formData);
    reset();
  });

  useEffect(() => {
    if (verified) {
      setIsVerified(true);
    }
    if (user?.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [verified, navigate, user]);
  return (
    <div className="h-[80vh] grid place-items-center font-poppins">
      <form
        onSubmit={handleResetPassword}
        className="reset-password bg-white py-16 px-10 w-[35rem]"
      >
        {isVerified && (
          <div className="alert rounded bg-green-50 text-green-500 mb-3">
            Email successfully verified
          </div>
        )}
        <h4 className="text-2xl font-bold">Put New Password</h4>
        <p className="text-sm leading-6 mt-2">
          Password is very secure things for everyone. Which one be any
          credential password. So please secure it as like your valuable things
        </p>
        <div className="input-group my-6 flex items-start gap-3 flex-col">
          <label htmlFor="newPassword">New Password</label>
          <input
            id="newPassword"
            type="password"
            placeholder="New Password"
            className="w-full p-5 border rounded focus:outline-gray-200 focus:outline-none "
            {...register("newPassword")}
          />
        </div>
        <div className="input-group my-6 flex items-start gap-3 flex-col">
          <label htmlFor="newPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="w-full p-5 border rounded focus:outline-gray-200 focus:outline-none "
            {...register("confirmPassword")}
          />
        </div>
        <div>
          <button className="w-full btn btn-success rounded-none btn-lg z-10 cursor-pointer">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordField;
