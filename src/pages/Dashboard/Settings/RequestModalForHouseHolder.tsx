import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPen } from "react-icons/bi";
import { PulseLoader } from "react-spinners";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useReqForHouseholderRequestMutation } from "../../../services/RequestApi";

type Props = {};

const RequestModalForHouseHolder = (props: Props) => {
  const { updatedUser, refetch } = useAuth<authUserInterface | any>({});
  const [countWord, setCountWord] = useState(200);
  /* Form Control */
  const { register, handleSubmit, watch, setValue, reset } = useForm();
  const [reqForHouseholderRequest, { data, error, isSuccess, isLoading }] =
    useReqForHouseholderRequestMutation();

  /* Handle to Send Request as House Holder Role */
  const handleHouseRequest = handleSubmit(async (data) => {
    if (!data.note) return swal("Sorry", "You don't input a note!", "error");
    // Send request
    const sendingContent = {
      notes: data.note,
      reqFor: "householder",
      author: {
        name: updatedUser?.name,
        email: updatedUser?.email,
        id: updatedUser?._id,
      },
    };
    try {
      await reqForHouseholderRequest(sendingContent);
    } catch (error) {
      console.log(error);
    }
  });

  watch(() => {
    const note = watch("note");
    if (note?.length > 200) {
      swal("You can only write 200 words! please!");
      setValue("note", note.slice(0, 200));
    }
    setCountWord(() => {
      if (countWord > 0) return 200 - note?.length;
      else return 0;
    });
  }); //this will keep listening to the change

  /* Handle error */
  useEffect(() => {
    if (error) {
      console.log(error);
      cogoToast.error((error as any)?.data?.message);
    }
    if (isSuccess) {
      cogoToast.success(data?.message);
      refetch();
      reset();
    }
  }, [error, data, isSuccess, reset, refetch]);

  return (
    <form action="" onSubmit={handleHouseRequest} className="font-poppins">
      <input
        type="checkbox"
        id="my-modal-for-house-holder"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-for-house-holder"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Request For House Holder Account.
          </h3>
          <p className="py-4">
            After send Request, admin will contact you for verify account by
            email. it will take while time to accept.
          </p>
          {/* url */}
          <div className="name border  rounded p-3 relative mt-10 flex-1">
            <div className="name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">
                Why You want be a House holder?
              </h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <div className="icon">
                <BiPen />
              </div>
              <textarea
                id=""
                cols={5}
                rows={4}
                className="font-poppins text-md textarea textarea-ghost appearance-none placeholder-gray-400 w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                placeholder="Write Notes"
                {...register("note")}
              ></textarea>
            </div>
            <small className="text-xs absolute right-3 bottom-px text-gray-400">
              Chars - {countWord}
            </small>
          </div>
          {/* End */}
          <div className="my-5 ">
            {isLoading ? (
              <button
                className="btn btn-success mr-3 flex items-center gap-2"
                type="button"
              >
                <PulseLoader color="#fff" size={8} /> Sending Request
              </button>
            ) : (
              <button className="btn btn-success mr-3">Send Request</button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default RequestModalForHouseHolder;
