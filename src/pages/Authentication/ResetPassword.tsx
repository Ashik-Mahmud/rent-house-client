import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "../../services/AuthApi";

type Props = {};

const ResetPassword = (props: Props) => {
  const { register, handleSubmit, reset } = useForm();
  const [resetPassword] = useResetPasswordMutation();

  /* Handle Reset Password */
  const handleResetPassword = handleSubmit(async (formData) => {
    if (!formData?.resetPasswordEmail)
      return toast.error("Email field is required.");
    await resetPassword(formData);
    reset();
  });

  return (
    <div className="h-[80vh] grid place-items-center font-poppins">
      <form
        onSubmit={handleResetPassword}
        className="reset-password bg-white py-16 px-10 w-[35rem]"
      >
        <h4 className="text-2xl font-bold">Reset Password</h4>
        <p className="text-sm leading-6 mt-2">
          After click below this button. It will send you email with password
          reset link and this link will valid only for 1 hour. After 1 hour this
          link will not work anyway.
        </p>
        <div className="input-group my-6 flex items-start gap-3 flex-col">
          <label htmlFor="resetPasswordEmail">Email</label>
          <input
            id="resetPasswordEmail"
            type="email"
            placeholder="Put Your Registered Email..."
            className="w-full p-5 border rounded focus:outline-gray-200 focus:outline-none "
            {...register("resetPasswordEmail")}
          />
        </div>
        <div>
          <button className="w-full btn btn-success rounded-none btn-lg z-10 cursor-pointer">
            Send Verification Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
