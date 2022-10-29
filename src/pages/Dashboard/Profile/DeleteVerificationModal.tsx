import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiUserCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useAppDispatch } from "../../../app/store";
import { base_backend_url } from "../../../configs/config";
import { logout } from "../../../features/AuthSlice";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {};

const DeleteVerificationModal = (props: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | null>({});
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, watch, handleSubmit } = useForm();

  /* handle delete account */
  const handleDeleteAccount = handleSubmit(async (data) => {
    if (!data?.email) {
      await swal("Put the valid email address to delete your account.");
      return;
    } else if (data?.email !== updatedUser?.email) {
      await swal("You are unauthorized person to delete your account");
      return;
    } else if (!data?.accept) {
      await swal("You must be accept our Term and Condition to delete.");
      return;
    } else {
      await swal("Are you sure to delete account permanently?", {
        buttons: ["No,keep it", "Yes, delete it!"],
        icon: "warning",
      }).then(async (value) => {
        if (value) {
          await axios.delete(
            `${base_backend_url}/api/v1/users/delete-account/${updatedUser?._id}`,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user?.token}`,
              },
            }
          );
          swal(
            "Successfully Deleted! Bye It will redirect to the login page after 4s",
            { icon: "success" }
          );
          setTimeout(() => {
            navigate("/login");
            dispatch(logout());
          }, 4000);
        }
      });
    }
  });

  /* onchange validation*/
  watch(() => {
    const email = watch("email");
    const isMatch = updatedUser?.email.toLowerCase() === email.toLowerCase();
    if (isMatch) {
      swal("Yeah!", "matched!", "success");
      setIsError(false);
    } else {
      setIsError(true);
    }
    if (email.length === updatedUser?.email.length) {
      if (!isMatch) {
        swal("Oops!", "not matched!", "error");
      }
    }
  });

  return (
    <form onSubmit={handleDeleteAccount}>
      <input
        type="checkbox"
        id="verify-account-delete-modal"
        className="modal-toggle"
      />
      <div className="modal modal-middle sm:modal-middle">
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
                    className={`${
                      isError ? "text-error" : "text-success"
                    } font-bold select-none tooltip tooltip-error hover:tooltip-fade`}
                    data-tip="Don't try copy! Write it Your own."
                  >
                    {updatedUser?.email}
                  </span>
                </h3>
              </div>
              <div
                className={`input-group flex items-center my-2 border p-3 rounded-md mt-2 ${
                  isError ? "border-error" : "border-success"
                }`}
              >
                <div
                  className={`icon ${isError ? "text-error" : "text-success"}`}
                >
                  <BiUserCheck />
                </div>
                <input
                  type="text"
                  className={`form-control outline-none pl-4 w-full ${
                    isError ? "text-error" : "text-success"
                  }`}
                  autoComplete="off"
                  autoFocus={true}
                  autoCorrect="off"
                  placeholder="Put Your Email Here...."
                  {...register("email")}
                />
              </div>
            </div>
            {/* End */}
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Accept</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2 gap-3">
                <div className="icon">
                  <input
                    type="checkbox"
                    id="accept"
                    className="checkbox rounded-none checkbox-lg"
                    {...register("accept")}
                  />
                </div>
                <label
                  htmlFor="accept"
                  className="text-sm font-poppins text-gray-600"
                >
                  You Permanently lost all the information, such as house,
                  reviews, blogs etc. Yeah I am sure Love To Delete.
                </label>
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
            <button type="submit" className="btn btn-error">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DeleteVerificationModal;
