import axios from "axios";
import cogoToast from "cogo-toast";
import { BsStarFill } from "react-icons/bs";
import swal from "sweetalert";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {
  data: any;
  refetch: () => void;
};

const HouseReviewCard = ({ data, refetch }: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  const rating = data?.rating;
  /* Ratings */
  const ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push(<BsStarFill key={i} className="text-success" />);
  }
  for (let i = 0; i < 5 - rating; i++) {
    ratings.push(<BsStarFill key={i + 5} className="text-gray-300" />);
  }

  /* Handle Delete */
  const handleDelete = async () => {
    const isConfirm = await swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: ["cancel", "yes, delete it"],
      dangerMode: true,
    });

    if (isConfirm) {
      try {
        const { data: deleteData } = await axios.delete(
          `${base_backend_url}/api/v1/reviews/delete-review/${data?._id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        if (deleteData.success) {
          cogoToast.success("Review deleted successfully");
          refetch();
        }
      } catch (error) {
        cogoToast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="card shadow m-4">
      <div className="comment p-3 bg-slate-50 text-sm">
        {data?.comment?.length > 300
          ? data?.comment?.slice(0, 300) +
            `<span className="text-success cursor-pointer text-sm">see more</span>`
          : data?.comment}
        <br />
      </div>
      <div className="card-body">
        <small>Reviewed by </small>
        <b>{data?.author?.name}</b>
        <div className="stars flex items-center gap-2">
          {ratings.map((rating) => rating)}
        </div>
        {data?.author?._id === updatedUser?._id && (
          <div className="flex items-center gap-2">
            <button className="btn btn-sm btn-success">Edit</button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseReviewCard;
