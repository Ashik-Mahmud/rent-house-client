import axios from "axios";
import cogoToast from "cogo-toast";
import { useForm } from "react-hook-form";
import { BiBookAdd, BiEnvelope } from "react-icons/bi";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
type Props = {
  payment: any;
};
const SendThankEmail = ({ payment }: Props) => {
  const { register, handleSubmit, reset } = useForm();
  const { updatedUser, user } = useAuth<authUserInterface | any>({});

  /* Handle Send Message */
  const handleSendMessage = handleSubmit(async (formData) => {
    if (!formData?.subject) return cogoToast.error("Please enter subject");
    if (!formData?.message) return cogoToast.warn("Please enter message");

    const emailData = {
      from: updatedUser?.email,
      to: payment?.user?.email,
      subject: formData?.subject,
      text: formData?.message,
      data: {
        customerName: payment?.user?.name,
        houseName: payment?.house?.name,
      },
    };

    const { data } = await axios.post(
      `${base_backend_url}/api/v1/payment/send-thanks-email`,
      emailData,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );

    if (data?.success) {
      cogoToast.success("Email sent successfully");
      reset();
    }
  });
  return (
    <form onSubmit={handleSendMessage}>
      <input
        type="checkbox"
        id={"send-thanks-modal" + payment?._id}
        className="modal-toggle"
      />
      <div className={`modal  modal-bottom sm:modal-middle font-poppins `}>
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Say Thanks </h3>

          <div className="modal-body">
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Put Your Subject</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiBookAdd />
                </div>
                <input
                  type="text"
                  {...register("subject")}
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Subject"
                />
              </div>
            </div>
            {/* End */}

            {/* Email */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Thanks Text</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiEnvelope />
                </div>
                <textarea
                  className="form-control outline-none pl-4 w-full text-sm"
                  id=""
                  cols={5}
                  {...register("message")}
                  rows={6}
                  placeholder="Thanks notes"
                ></textarea>
              </div>
            </div>
            {/* End */}
          </div>
          <div className="modal-action">
            <label
              htmlFor={"send-thanks-modal" + payment?._id}
              className="btn btn-warning"
            >
              Cancel
            </label>

            <button className="btn btn-success">Send Thanks</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SendThankEmail;
