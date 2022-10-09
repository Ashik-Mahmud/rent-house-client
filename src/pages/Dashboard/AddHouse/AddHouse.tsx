import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiBath, BiBed, BiMoney } from "react-icons/bi";
import { BsAlignEnd, BsHouse, BsLink, BsPen } from "react-icons/bs";
import SendVerifyEmail from "../../../components/SendVerifyEmail";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import HouseInput from "./HouseInput";

type Props = {};

const AddHouse = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});

  const isVerify = updatedUser?.isVerified;

  /* Handle Add House Form Submit */
  const { handleSubmit, register, reset } = useForm();

  const handleAddHouseFormSubmit = handleSubmit((data) => {
    /* Validation */
    if (!data.name) return toast.error(`Name is required`);
    if (!data.district) return toast.error(`District is required`);
    if (!data.city) return toast.error(`City is required`);
    if (!data.bedrooms) return toast.error(`Bedrooms is required`);
    if (!data.bathrooms) return toast.error(`Bathrooms is required`);
    if (!data.address) return toast.error(`Address is required`);
    if (!data.description) return toast.error(`Description is required`);
    if (!data.price) return toast.error(`Price is required`);
    if (!data.isBooked) return toast.error(`isBooked is required`);
    if (!data.isBachelorRoom) return toast.error(`isBachelorRoom is required`);
    if (!data.allowQuestion) return toast.error(`Allow Question is required`);
    if (!data.isAvailable) return toast.error(`isAvailable is required`);
    if (!data.allowReview) return toast.error(`Allow Review is required`);

    /* Validation for Images */
    if (data.previewImage.length === 0)
      return toast.error(`Preview is Image required`);

    if (data.previewImage[0].size > 1000000)
      return toast.error(`Preview Image size must be in 1 MB`);

    if (data.galleryImage.length === 0)
      return toast.error(`Image Gallery is  required`);

    if (data.galleryImage.length > 5)
      return toast.error(`5 Images only for gallery.`);

    const galleryImage = data.galleryImage;

    for (let image in galleryImage) {
      const eachImage = galleryImage[image];
      if (eachImage.size > 1000000)
        return toast.error(`Gallery Image must be in 1 MB`);
    }

    /* Create Form Data for This */
    const houseFormData = new FormData();

    const sendingDataForHouse = {
      name: data.name,
      price: data.price,
      category: data.category,
      houseType: data.houseType,
      houseUseFor: data.houseUseFor,
      googleMapLink: data.googleMapLink,
      bathrooms: data.bathrooms,
      bedrooms: data.bedrooms,
      address: data.address,
      district: data.district,
      city: data.city,
      description: data.description,
      allowQuestion: data.allowQuestion,
      allowReview: data.allowReview,
      isAvailable: data.isAvailable,
      isBachelorRoom: data.isBachelorRoom,
      isBooked: data.isBooked,
      others: {
        hasDrawingRoom: data.hasDrawingRoom,
        hasDinningRoom: data.hasDinningRoom,
        hasKitchen: data.hasKitchen,
        hasStore: data.hasStore,
        hasServantRoom: data.hasServantRoom,
        hasSwimmingPool: data.hasSwimmingPool,
        hasGym: data.hasGym,
        hasLawn: data.hasLawn,
        hasGarage: data.hasGarage,
        hasCarParking: data.hasCarParking,
        hasLift: data.hasLift,
        hasGenerator: data.hasGenerator,
        hasSecurity: data.hasSecurity,
        hasCCTV: data.hasCCTV,
        hasInternet: data.hasInternet,
        hasGas: data.hasGas,
      },
    };

    houseFormData.append(
      "previewImage",
      data?.previewImage[0],
      data?.previewImage[0]?.name
    );
    [...data?.galleryImage].forEach((image) => {
      houseFormData.append("galleryImage", image);
    });
    houseFormData.append("data", sendingDataForHouse as any);
  });

  return (
    <div className="p-5 my-5 bg-white rounded">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Add House</h1>
        <small className="badge badge-success">House Holder</small>
      </div>
      <div className="mt-5">
        {isVerify ? (
          <form onSubmit={handleAddHouseFormSubmit}>
            <div className="flex flex-col md:flex-row gap-3">
              <HouseInput title="Put Your House Name" icon={<BsHouse />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your House Address" icon={<BsHouse />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your Category" icon={<BsHouse />}>
                <select
                  className="outline-none  w-full pl-4 cursor-pointer text-sm"
                  {...register("category", { required: true })}
                >
                  <option value="General">General</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Flat">Flat</option>
                  <option value="Terrace">Terrace</option>
                </select>
              </HouseInput>

              <HouseInput title="Select House Type" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("houseType", { required: true })}
                >
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                </select>
              </HouseInput>

              <HouseInput title="Select House Use For" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("houseUseFor", { required: true })}
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </HouseInput>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <HouseInput title="Put Your House Price" icon={<BiMoney />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Price"
                  {...register("price", { required: true })}
                />
              </HouseInput>

              <HouseInput
                title="Put Your House Bedrooms Quantity"
                icon={<BiBed />}
              >
                <input
                  type="number"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="bedrooms"
                  {...register("bedrooms", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your Bathrooms Quantity" icon={<BiBath />}>
                <input
                  type="number"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="bathrooms"
                  {...register("bathrooms", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your District" icon={<BsHouse />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="District"
                  {...register("district", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your City" icon={<BsAlignEnd />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="City"
                  {...register("city", { required: true })}
                />
              </HouseInput>
            </div>
            <HouseInput title="Put Your Description" icon={<BsPen />}>
              <textarea
                cols={10}
                rows={5}
                placeholder="Description"
                className="w-full outline-none"
                {...register("description", { required: true })}
              ></textarea>
            </HouseInput>
            <HouseInput title="Put Your Google Map Link" icon={<BsLink />}>
              <input
                type="url"
                className="form-control outline-none pl-4 w-full"
                placeholder="URL"
                {...register("googleMapLink")}
              />
            </HouseInput>
            {/* Start */}
            <div className="flex flex-col md:flex-row gap-3">
              <HouseInput title="IsBooked" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("isBooked")}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
              <HouseInput title="isBachelorRoom" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("isBachelorRoom")}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
              <HouseInput title="Allow Question" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("allowQuestion")}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
              <HouseInput title="Is Available" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("isAvailable")}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
              <HouseInput title="Allow Review" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("allowReview")}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
            </div>
            <HouseInput title="Others">
              <ul className="flex items-center flex-wrap gap-3 ">
                <li className="flex items-center gap-4  mb-1 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasDrawingRoom"
                    {...register("hasDrawingRoom")}
                  />{" "}
                  <label htmlFor="hasDrawingRoom" className="cursor-pointer">
                    hasDrawingRoom
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasDinningRoom"
                    {...register("hasDinningRoom")}
                  />{" "}
                  <label htmlFor="hasDinningRoom" className="cursor-pointer">
                    hasDinningRoom
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasKitchen"
                    {...register("hasKitchen")}
                  />{" "}
                  <label htmlFor="hasKitchen" className="cursor-pointer">
                    hasKitchen
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasStore"
                    {...register("hasStore")}
                  />{" "}
                  <label htmlFor="hasStore" className="cursor-pointer">
                    hasStore
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasServantRoom"
                    {...register("hasServantRoom")}
                  />{" "}
                  <label htmlFor="hasServantRoom" className="cursor-pointer">
                    hasServantRoom
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasSwimmingPool"
                    {...register("hasSwimmingPool")}
                  />{" "}
                  <label htmlFor="hasSwimmingPool" className="cursor-pointer">
                    hasSwimmingPool
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasGym"
                    {...register("hasGym")}
                  />{" "}
                  <label htmlFor="hasGym" className="cursor-pointer">
                    hasGym
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasLawn"
                    {...register("hasLawn")}
                  />{" "}
                  <label htmlFor="hasLawn" className="cursor-pointer">
                    hasLawn
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasGarage"
                    {...register("hasGarage")}
                  />{" "}
                  <label htmlFor="hasGarage" className="cursor-pointer">
                    hasGarage
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasCarParking"
                    {...register("hasCarParking")}
                  />{" "}
                  <label htmlFor="hasCarParking" className="cursor-pointer">
                    hasCarParking
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasLift"
                    {...register("hasLift")}
                  />{" "}
                  <label htmlFor="hasLift" className="cursor-pointer">
                    hasLift
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasGenerator"
                    {...register("hasGenerator")}
                  />{" "}
                  <label htmlFor="hasGenerator" className="cursor-pointer">
                    hasGenerator
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasSecurity"
                    {...register("hasSecurity")}
                  />{" "}
                  <label htmlFor="hasSecurity" className="cursor-pointer">
                    hasSecurity
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasCCTV"
                    {...register("hasCCTV")}
                  />{" "}
                  <label htmlFor="hasCCTV" className="cursor-pointer">
                    hasCCTV
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasInternet"
                    {...register("hasInternet")}
                  />{" "}
                  <label htmlFor="hasInternet" className="cursor-pointer">
                    hasInternet
                  </label>
                </li>
                <li className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="hasGas"
                    {...register("hasGas")}
                  />{" "}
                  <label htmlFor="hasGas" className="cursor-pointer">
                    hasGas
                  </label>
                </li>
              </ul>
            </HouseInput>
            <div>
              <HouseInput title="Image">
                <input
                  type="file"
                  {...register("previewImage")}
                  accept="image/*"
                />
              </HouseInput>
              <HouseInput title="Galleries">
                <input
                  type="file"
                  multiple
                  {...register("galleryImage")}
                  accept="image/*"
                />
              </HouseInput>
            </div>
            <div className="py-5 my-3 flex justify-end gap-4">
              <button className="btn btn-warning btn-md" type="reset">
                Reset
              </button>
              <button className="btn btn-success btn-md">Save House</button>
            </div>
          </form>
        ) : (
          <SendVerifyEmail
            title="Verify to Add House"
            desc="You could'nt add house if you are not verify your account. please verify."
          />
        )}
      </div>
    </div>
  );
};

export default AddHouse;
