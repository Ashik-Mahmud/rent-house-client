import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { toast } from "react-toastify";
import swal from "sweetalert";
import GlobalLoader from "../../../components/GlobalLoader";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import {
  useDeleteReviewByIdMutation,
  useGetReviewsByUserQuery,
} from "../../../services/ReviewApi";

type Props = {};

const UserReviews = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const { data, isLoading } = useGetReviewsByUserQuery(user?.user?._id);
  const [DeleteReview, { data: deleteData, isSuccess }] =
    useDeleteReviewByIdMutation();

  const reviewsData = data?.data;

  type ReviewType = {
    content: string;
    rating: number;
    _id: string;
    author: {
      name: string;
      email: string;
      userId: string;
    };
  };

  /* Handle Delete Review */
  const handleDeleteReview = async (id: string) => {
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
    });

    if (isConfirm) {
      try {
        await DeleteReview(id);
      } catch (err) {
        toast.error((err as any).message);
      }
    }
  };

  return (
    <div>
      {/* Reviews Table */}
      <div className="overflow-x-auto my-8">
        {isLoading ? (
          <GlobalLoader />
        ) : reviewsData?.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Review ID</th>
                <th>Ratings</th>
                <th>Comment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviewsData.map((review: ReviewType, index: number) => (
                <tr key={review?._id}>
                  <th>{index + 1}</th>
                  <td>R-{review?._id.slice(0, 10)}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      {[0, 1, 2, 3, 4].map((stars, index) => (
                        <BsStarFill
                          key={index}
                          size="20"
                          color={stars < review?.rating ? "#80CED1" : "#C0C0C0"}
                        />
                      ))}
                    </div>
                  </td>
                  <td>
                    {review?.content.length > 80
                      ? review?.content.slice(0, 80) + "..."
                      : review?.content}
                  </td>
                  <td>
                    <button className="text-success">
                      <BiEditAlt />
                    </button>
                    <button
                      className="text-error ml-3"
                      onClick={() => handleDeleteReview(review?._id)}
                    >
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center"> No Reviews </div>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
