import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosUser } from "../../../api/Axios";
import { useAppSelector } from "../../../app/store";
import SendVerifyEmail from "../../../components/SendVerifyEmail";
import useAuth from "../../../hooks/useAuth";
import useTitle from "../../../hooks/useTitle";
import { authUserInterface } from "../../../interfaces/UserInterface";
import FeatureRequestEditor from "./FeatureRequestEditor";

type Props = {};

const FeatureRequest = (props: Props) => {
  useTitle("Feature Request");
  const { name } = useAppSelector((state) => state.appOption);
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const [isReadonly, setIsReadonly] = useState<boolean>(true);
  const { register, handleSubmit, setValue } = useForm();
  const [requestText, setRequestText] = useState<string>("");

  const navigate = useNavigate();

  /* Handle Feature Bugs */
  const handleFeatureBugs = handleSubmit(async (formData) => {
    if (!requestText || !formData?.subject) {
      return toast.error("All Fields are required.");
    }
    const sendingData = {
      ...formData,
      requestText,
      author: {
        name: updatedUser?.name,
        email: updatedUser?.email,
        role: updatedUser?.role,
      },
    };
    try {
      const { data } = await AxiosUser.post(
        "/send-feature-request",
        sendingData
      );
      if (data?.success) {
        toast.success(data?.message);
        setRequestText("");
        navigate("/dashboard/profile");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log((error as any)?.message, error);
    }
  });

  useEffect(() => {
    setValue("subject", isReadonly ? "Request for Features & Bugs" : "");
  }, [isReadonly, setValue]);

  return (
    <div>
      <div className="p-5 my-4 bg-white">
        <div className="title">
          <h3 className="text-2xl font-bold">Feature Request & Bugs</h3>
          <p className="text-sm text-gray-500 my-2">
            If you got any bugs to browsing our {name} Please let me know to
            fill up below form and also can send us with your creative features
            which one you think to putting our web app much better then now.
          </p>
        </div>
        {updatedUser?.isVerified ? (
          <form action="" onSubmit={handleFeatureBugs}>
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Default Subject</h3>
              </div>
              <div
                className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 ${
                  isReadonly ? "bg-gray-100" : "bg-white"
                }`}
              >
                <div className="icon">
                  <BiUser />
                </div>
                <input
                  type="text"
                  className={`form-control outline-none pl-4 w-full ${
                    isReadonly ? "bg-gray-100" : "bg-white"
                  }`}
                  placeholder="Subject For"
                  readOnly={isReadonly}
                  {...register("subject", { required: true })}
                />
                <button
                  className=" w-32 bg-white p-1 rounded-full overflow-hidden font-poppins text-xs"
                  type="button"
                  onClick={() => setIsReadonly((state) => !state)}
                >
                  {!isReadonly ? "Set Default" : "Put your own"}
                </button>
              </div>
            </div>
            {/* End */}
            <div
              className="name border  rounded p-3 pb-1 relative mt-10 flex-1"
              style={{ height: 350 }}
            >
              <div className="name-title absolute -top-4 bg-white rounded p-1">
                <h3 className="text-xs font-poppins flex items-center gap-1 border p-1 rounded">
                  Write Features & Bugs Issues
                </h3>
              </div>
              <div className="my-1 rounded-md mt-6">
                <FeatureRequestEditor setRequestText={setRequestText} />
              </div>
            </div>

            <div className="submit-btn mt-6">
              <button className="btn btn-success rounded-none btn-lg">
                Send Request
              </button>
            </div>
          </form>
        ) : (
          <SendVerifyEmail
            title="Verify to Send Features & Bugs Request"
            desc="You could'nt send feature & bugs request if you are not verify your account. please verify."
          />
        )}
      </div>
    </div>
  );
};

export default FeatureRequest;
