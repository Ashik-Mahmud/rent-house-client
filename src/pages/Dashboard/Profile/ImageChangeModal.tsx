import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsImage } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useChangeProfilePictureMutation } from "../../../services/AuthApi";

type Props = {};

const ImageChangeModal = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const [changeProfilePicture, { data, isSuccess }] =
    useChangeProfilePictureMutation();
  const { register, handleSubmit, watch, reset } = useForm();
  const [imageName, setImageName] = useState<string>("");
  const [previewSource, setPreviewSource] = useState<any>("");
  /* Handle change profile picture */
  const handleChangeProfile = handleSubmit(async (formDataImage) => {
    const imageInfo = formDataImage?.profileImage[0];
    const formData = new FormData();
    formData.append("profileImage", imageInfo, imageInfo?.name);
    formData.append("email", updatedUser?.email || "");
    await changeProfilePicture(formData);
    reset();
  });

  watch((data, { name, type }) => {
    const reader = new FileReader();
    reader?.readAsDataURL(data?.profileImage[0] || "");
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
    setImageName(data?.profileImage[0]?.name);
  });

  console.log(data, isSuccess);

  /* Handle Data */
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
    }
  }, [data, isSuccess]);

  return (
    <form
      encType="multipart/form-data"
      method="post"
      onSubmit={handleChangeProfile}
    >
      <input
        type="checkbox"
        id="profile-image-edit-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
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
                {imageName ? (
                  <>
                    <div className="text-center">
                      <h3 className="text-xl mb-4">{imageName}</h3>
                      {previewSource && (
                        <div
                          className="w-48 h-48  overflow-hidden mx-auto border-8 border-success"
                          style={{ borderRadius: "50%" }}
                        >
                          <img
                            src={previewSource}
                            alt="previewImage"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="icon text-5xl">
                    <BsImage />
                  </div>
                )}
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
              onClick={() => {
                setPreviewSource("");
                setImageName("");
              }}
            >
              Cancel
            </label>
            <button className="btn btn-success">Save Image</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ImageChangeModal;
