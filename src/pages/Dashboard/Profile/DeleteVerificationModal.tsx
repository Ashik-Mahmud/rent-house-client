import { BiUserCheck } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {};

const DeleteVerificationModal = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | null>({});
  return (
    <form encType="multipart/form-data" method="post">
      <input
        type="checkbox"
        id="verify-account-delete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl text-error">
            Delete Account Permanently
          </h3>

          <div className="modal-body">
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">
                  Put Email -{" "}
                  <span
                    className="text-success font-bold select-none tooltip tooltip-error hover:tooltip-fade"
                    data-tip="Don't try copy! Write it Your own."
                  >
                    {updatedUser?.email}
                  </span>
                </h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiUserCheck />
                </div>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Put Your Email Here...."
                />
              </div>
            </div>
            {/* End */}
          </div>
          <div className="modal-action">
            <label
              htmlFor="verify-account-delete-modal"
              className="btn btn-warning"
            >
              Cancel
            </label>
            <button className="btn btn-error">Delete Account</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DeleteVerificationModal;
