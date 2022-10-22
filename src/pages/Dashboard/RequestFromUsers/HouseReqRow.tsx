import cogoToast from "cogo-toast";
import { BiCheck, BiX } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import swal from "sweetalert";
import { AxiosRequest } from "../../../api/Axios";
import { base_backend_url } from "../../../configs/config";
type Props = {
  data: any;
  ind: number;
  refetch: () => void;
};
const HouseReqRow = ({ ind, data, refetch }: Props) => {
  /* Handle Confirm Blog Request */
  const handleConfirmHouseReq = async () => {
    try {
      const isConfirm = await swal({
        title: "Really?",
        text: "You wont be able to revert this!",
        icon: "warning",
        buttons: ["cancel", "confirm!"],
        dangerMode: true,
      });

      if (isConfirm) {
        // User pressed the confirm button
        // Will make an api call to confirm user blog
        const { data: info } = await AxiosRequest.patch(
          `/approve-request/${data?._id}?authorId=${data?.author?._id}&role=house`
        );
        cogoToast.success(info?.message);
        refetch();
      }
    } catch (error) {
      cogoToast.error((error as any)?.response?.data?.message);
    }
  };

  /* Handle Remove From Blog */
  const handleRemoveForHouse = async () => {
    try {
      const isConfirm = await swal({
        title: "Really?",
        text: "You wont be able to revert this!",
        icon: "warning",
        buttons: ["cancel", "confirm!"],
      });
      if (isConfirm) {
        // User pressed the confirm button
        // Will make an api call to confirm user blog
        const { data: info } = await AxiosRequest.delete(
          `/cancel-request/${data._id}?authorId=${data?.author?._id}&role=house`
        );
        cogoToast.success(info.message);
        refetch();
      }
    } catch (error) {
      cogoToast.error((error as any)?.response?.data?.message);
    }
  };

  return (
    <tr>
      <td>{ind + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  data?.author.profileImage
                    ? `${base_backend_url}/profiles/${data.author.profileImage}`
                    : data?.author?.avatar
                }
                alt={data?.author.name || "User"}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{data?.author?.name}</div>
            <div className="text-sm opacity-50">
              {data?.author?.role === "user"
                ? "House Holder"
                : data?.author?.role}
            </div>
          </div>
        </div>
      </td>
      <td>
        <a href={`mailto:${data?.author?.email}`}>{data?.author?.email}</a>
      </td>
      <td>
        <a href="tel:+880123456789">+{data?.author?.phone}</a>
      </td>

      <td>
        {data?.notes.length > 100
          ? data?.notes.slice(0, 100) + "..."
          : data?.notes}
      </td>
      <td>
        {data?.status === "pending" ? (
          <>
            {" "}
            <button
              className="badge badge-success badge-lg text-sm font-poppins cursor-pointer"
              onClick={handleConfirmHouseReq}
            >
              <BiCheck /> Confirm
            </button>
            <button
              className="badge badge-error ml-3 badge-lg text-sm font-poppins cursor-pointer"
              onClick={handleRemoveForHouse}
            >
              <BiX /> Remove
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <span className="badge badge-success">Confirmed</span>
              <span
                className="btn btn-circle btn-xs btn-error"
                onClick={handleRemoveForHouse}
              >
                <BsX />
              </span>
            </div>
          </>
        )}
      </td>
    </tr>
  );
};

export default HouseReqRow;
