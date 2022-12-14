import cogoToast from "cogo-toast";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiLink, BiPen } from "react-icons/bi";
import { PulseLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useSendForBlogRequestMutation } from "../../../services/RequestApi";

type Props = {};

const VerifyBlogModal = (props: Props) => {
  const { updatedUser, refetch } = useAuth<authUserInterface | any>({});
  const { handleSubmit, register, reset } = useForm();
  const [sendRequestForBlog, { data, isSuccess, error, isLoading }] =
    useSendForBlogRequestMutation();
  /* Handle Verify Blog Modal */
  const handleVerifyBlogModal = handleSubmit(async (data) => {
    if (!data?.notes) return cogoToast.error(`Blog Notes is required!`);
    const sendingContent = {
      ...data,
      reqFor: "blog",
      author: {
        name: updatedUser?.name,
        email: updatedUser?.email,
        id: updatedUser?._id,
      },
    };
    try {
      await sendRequestForBlog(sendingContent);
    } catch (error) {
      console.error(error);
    }
  });

  /* Handle error */
  useEffect(() => {
    if (error) {
      cogoToast.error((error as any)?.data?.message);
    }
    if (isSuccess) {
      cogoToast.success(data?.message);
      refetch();
      reset();
    }
  }, [error, data, isSuccess, reset, refetch]);

  return (
    <>
      <form action="" onSubmit={handleVerifyBlogModal}>
        <input
          type="checkbox"
          id="my-modal-for-blog"
          className="modal-toggle"
        />
        <div className="modal font-poppins">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-for-blog"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              Add Notes Why you access blog option?
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <p className="bg-yellow-100 text-sm p-3 rounded text-left font-poppins">
              <b>Note:</b> Before send request make sure your profile is
              completed with{" "}
              <b>updated profile image, address, phone number, Facebook Link</b>
            </p>
            {/* url */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">
                  Put Your Best Blog Link (If have)
                </h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiLink />
                </div>
                <input
                  type="url"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Blog URL"
                  {...register("blogUrl")}
                />
              </div>
            </div>
            {/* End */}
            {/* url */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">
                  Why You want blog writing authority?
                </h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiPen />
                </div>
                <textarea
                  key={1}
                  cols={5}
                  rows={4}
                  className="font-poppins text-md textarea textarea-ghost appearance-none placeholder-gray-400 w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                  placeholder="Write why you need blog option?"
                  {...register("notes")}
                ></textarea>
              </div>
            </div>
            {/* End */}
            <div className="my-5 ">
              {isLoading ? (
                <button className="btn btn-primary" disabled type="button">
                  <PulseLoader size={8} color="#fff" />
                  Sending...
                </button>
              ) : (
                <button className="btn btn-success mr-3">Send Request</button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default VerifyBlogModal;
