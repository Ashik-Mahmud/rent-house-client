import { useForm } from "react-hook-form";
import { BsImage } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useChangeProfilePictureMutation } from "../../../services/AuthApi";

type Props = {};

const ImageChangeModal = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const [changeProfilePicture] = useChangeProfilePictureMutation();
  const { register, handleSubmit } = useForm();
  /* Handle change profile picture */
  const handleChangeProfile = handleSubmit(async (formDataImage) => {
    const imageInfo = formDataImage?.profileImage[0];
    const formData = new FormData();
    formData.append("profileImage", imageInfo, imageInfo.name);
    formData.append("email", updatedUser?.email || "");
    await changeProfilePicture(formData);
  });

  return (
    <div>
      <input
        type="checkbox"
        id="profile-image-edit-modal"
        className="modal-toggle"
      />
      <form
        encType="multipart/form-data"
        method="post"
        onSubmit={handleChangeProfile}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Change Image</h3>

          <div className="modal-body">
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">
                  Click to Put Image here
                </h3>
              </div>
              <label
                htmlFor="choose-file"
                className="input-group flex items-center my-2 border-2 border-dotted  py-14 rounded-md mt-2 justify-center cursor-grabbing"
              >
                <div className="icon text-5xl">
                  <BsImage />
                </div>
              </label>
              <input
                type="file"
                className="form-control outline-none pl-4 w-full hidden"
                id="choose-file"
                {...register("profileImage", { required: true })}
              />
            </div>
            {/* End */}
          </div>
          <div className="modal-action">
            <label
              htmlFor="profile-image-edit-modal"
              className="btn btn-warning"
            >
              Cancel
            </label>
            <button className="btn btn-success">Save Image</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImageChangeModal;
