import axios from "axios";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {
  title: string;
  desc: string;
};

const SendVerifyEmail = ({ title, desc }: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  /* Handle Verification Email */
  const handleVerificationEmail = async () => {
    const isConfirm = await swal({
      title: `Please Confirm `,
      text: `We will sent you again verification email please check email to ${updatedUser?.email}`,
      buttons: ["cancel", "Confirm"],
    });
    if (isConfirm) {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/users/send-verification-email/${updatedUser?._id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      await swal({
        title: `${data?.message}`,
        text: "Please check we will sent you again verification mail",
        icon: "success",
        buttons: ["cancel", "okay"],
      });
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 flex-col py-10">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p>{desc}</p>
      <small>
        <b> Note:</b> After creating your account we will sent you verification
        email as well If your account creation time not more then one hour
        please check your email and verify it
      </small>
      <button
        className="btn btn-lg btn-success rounded-full"
        onClick={handleVerificationEmail}
      >
        Send Verify Email
      </button>
    </div>
  );
};

export default SendVerifyEmail;
