import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";

type Props = {};

const FeatureRequest = (props: Props) => {
  const [isReadonly, setIsReadonly] = useState<boolean>(true);
  const { register, handleSubmit, setValue } = useForm();

  /* Handle Feature Bugs */
  const handleFeatureBugs = handleSubmit(async (formData) => {
    console.log(formData);
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
            If you got any bugs to browsing our houseLagbe Please let me know to
            fill up below form and also can send us with your creative features
            which one you think to putting our web app much better then now.
          </p>
        </div>
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
                Put you own
              </button>
            </div>
          </div>
          {/* End */}
        </form>
      </div>
    </div>
  );
};

export default FeatureRequest;
