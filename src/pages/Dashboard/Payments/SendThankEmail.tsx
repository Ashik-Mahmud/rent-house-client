import { useForm } from "react-hook-form";
import { BiBookAdd, BiEnvelope } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
type Props = {};
const SendThankEmail = (props: Props) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { updatedUser } = useAuth<authUserInterface | any>({});

  return (
    <div>
      {" "}
      <form>
        <input
          type="checkbox"
          id="send-thanks-modal"
          className="modal-toggle"
        />
        <div className={`modal  modal-bottom sm:modal-middle `}>
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
                    className="form-control outline-none pl-4 w-full"
                    placeholder="Subject"
                  />
                </div>
              </div>
              {/* End */}
              <div className="flex items-stretch justify-between gap-2">
                {/* Email */}
                <div className="name border  rounded p-3 relative mt-10 flex-1">
                  <div className="name-title absolute -top-4 bg-white border rounded p-1">
                    <h3 className="text-xs font-poppins">Put your Email</h3>
                  </div>
                  <div
                    className="input-group flex items-center my-2 border p-3 rounded-md mt-2 bg-base-300 tooltip"
                    data-tip="Readonly"
                  >
                    <div className="icon">
                      <BiEnvelope />
                    </div>
                    <input
                      type="email"
                      className="form-control outline-none pl-4 w-full bg-base-300"
                      placeholder="Email"
                      defaultValue={updatedUser?.email}
                      readOnly
                    />
                  </div>
                </div>
                {/* End */}
              </div>
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
                    name="thanks"
                    id=""
                    cols={5}
                    rows={6}
                    placeholder="Thanks notes"
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>
              </div>
              {/* End */}
            </div>
            <div className="modal-action">
              <label htmlFor="send-thanks-modal" className="btn btn-warning">
                Cancel
              </label>

              <button className="btn btn-success">Send Thanks</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendThankEmail;
