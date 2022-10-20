import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiBath, BiBed, BiLeftArrow, BiMoney } from "react-icons/bi";
import { BsAlignEnd, BsHouse, BsLink, BsPen } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import swal from "sweetalert";
import GlobalLoader from "../../../components/GlobalLoader";
import {
  useGetHouseByHouseIdQuery,
  useUpdateHouseByIdMutation,
} from "../../../services/HouseApi";
import HouseInput from "../AddHouse/HouseInput";
type Props = {};

const UpdateHouse = (props: Props) => {
  const navigate = useNavigate();
  const { houseId } = useParams();
  const { data, isLoading } = useGetHouseByHouseIdQuery(houseId);
  const { register, handleSubmit, setValue } = useForm();
  const [updateHouseById, { isLoading: isUpdating, data: updateData }] =
    useUpdateHouseByIdMutation();

  const udata = data?.data;

  useEffect(() => {
    setValue("name", udata?.name);
    setValue("address", udata?.address);
    setValue("category", udata?.category);
    setValue("houseType", udata?.houseType);
    setValue("houseUseFor", udata?.houseUseFor);
    setValue("allowQuestion", udata?.allowQuestion);
    setValue("price", udata?.price);
    setValue("bedrooms", udata?.bedrooms);
    setValue("bathrooms", udata?.bathrooms);
    setValue("district", udata?.district);
    setValue("city", udata?.city);
    setValue("description", udata?.description);
    setValue("googleMapLocation", udata?.googleMapLocation);
    setValue("isBooked", udata?.isBooked);
    setValue("isBachelorRoom", udata?.isBachelorRoom);
    setValue("allowQuestion", udata?.allowQuestion);
    setValue("isAvailable", udata?.isAvailable);
    setValue("allowReview", udata?.allowReview);
    setValue("hasGarage", udata?.others?.hasGarage);
    setValue("hasCCTV", udata?.others?.hasCCTV);
    setValue("hasCarParking", udata?.others?.hasCarParking);
    setValue("hasDinningRoom", udata?.others?.hasDinningRoom);
    setValue("hasDrawingRoom", udata?.others?.hasDrawingRoom);
    setValue("hasGas", udata?.others?.hasGas);
    setValue("hasGenerator", udata?.others?.hasGenerator);
    setValue("hasGym", udata?.others?.hasGym);
    setValue("hasInternet", udata?.others?.hasInternet);
    setValue("hasKitchen", udata?.others?.hasKitchen);
    setValue("hasLawn", udata?.others?.hasLawn);
    setValue("hasLift", udata?.others?.hasLift);
    setValue("hasSecurity", udata?.others?.hasSecurity);
    setValue("hasServantRoom", udata?.others?.hasServantRoom);
    setValue("hasStore", udata?.others?.hasStore);
    setValue("hasSwimmingPool", udata?.others?.hasSwimmingPool);
  }, [udata, setValue]);

  /* Handle Update House Data */
  const handeUpdateHouseForm = handleSubmit(async (data) => {
    const sendingDataForHouse = {
      name: data.name,
      price: data.price,
      category: data.category,
      houseType: data.houseType,
      houseUseFor: data.houseUseFor,
      googleMapLocation: data.googleMapLink,
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
    const res = await updateHouseById({
      id: houseId,
      data: sendingDataForHouse,
    });
    if ((res as any).data) {
      navigate("/dashboard/houses");
    }
  });

  useEffect(() => {
    if (updateData) {
      swal("Success", "House Updated Successfully", "success");
    }
  }, [updateData]);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div className="p-5 my-5 bg-white rounded">
      <div className="flex items-center gap-3">
        <span className="cursor-pointer" onClick={() => navigate(-1)}>
          <BiLeftArrow />
        </span>
        <h1 className="text-2xl font-bold">Update House</h1>
      </div>
      <div className="mt-5">
        <form onSubmit={handeUpdateHouseForm}>
          <div className="flex flex-col md:flex-row gap-3">
            <HouseInput title="Put Your House Name" icon={<BsHouse />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="Name"
                {...register("name")}
              />
            </HouseInput>

            <HouseInput title="Put Your House Address" icon={<BsHouse />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="Address"
                {...register("address")}
              />
            </HouseInput>

            <HouseInput title="Put Your Category" icon={<BsHouse />}>
              <select
                className="outline-none  w-full pl-4 cursor-pointer text-sm"
                {...register("category")}
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
                {...register("houseType")}
              >
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
              </select>
            </HouseInput>

            <HouseInput title="Select House Use For" icon={<BsHouse />}>
              <select
                className="form-control outline-none pl-4 w-full"
                {...register("houseUseFor")}
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </HouseInput>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <HouseInput title="Put Your House Price" icon={<BiMoney />}>
              <input
                type="number"
                className="form-control outline-none pl-4 w-full"
                placeholder="Price"
                {...register("price")}
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
                {...register("bedrooms")}
              />
            </HouseInput>

            <HouseInput title="Put Your Bathrooms Quantity" icon={<BiBath />}>
              <input
                type="number"
                className="form-control outline-none pl-4 w-full"
                placeholder="bathrooms"
                {...register("bathrooms")}
              />
            </HouseInput>

            <HouseInput title="Put Your District" icon={<BsHouse />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="District"
                {...register("district")}
              />
            </HouseInput>

            <HouseInput title="Put Your City" icon={<BsAlignEnd />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="City"
                {...register("city")}
              />
            </HouseInput>
          </div>
          <HouseInput title="Put Your Description" icon={<BsPen />}>
            <textarea
              cols={10}
              rows={5}
              placeholder="Description"
              className="w-full outline-none"
              {...register("description")}
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
          <div></div>

          <div className="py-5 my-3 flex justify-end gap-4">
            <Link
              to="/dashboard/houses"
              className="btn btn-warning btn-md"
              type="reset"
            >
              Back
            </Link>
            {isUpdating ? (
              <button type="button" className="btn btn-success btn-md">
                <PulseLoader size={8} />
              </button>
            ) : (
              <button className="btn btn-success btn-md">Update House</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateHouse;
