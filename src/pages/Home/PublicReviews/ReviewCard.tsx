import { BsFillChatRightQuoteFill, BsStarFill } from "react-icons/bs";
type Props = {
  review: any;
};
const ReviewCard = ({ review }: Props) => {
  return (
    <div className="reviewCard rounded  p-4">
      <div className="review-content  text-gray-700 my-3 font-poppins text-[15px] text-center leading-6 bg-base-100 shadow p-4 rounded-md mb-6">
        <div className="quote text-2xl  m-4">
          <BsFillChatRightQuoteFill />
        </div>
        {review?.content}
      </div>
      <div className="reviewer flex flex-col text-center items-center gap-3">
        <div className="reviewer-image rounded-full overflow-hidden border-4 w-16 h-16 grid place-items-center text-3xl select-none bg-slate-300 font-bold border-gray-300">
          {review?.author?.name
            ?.split(" ")
            ?.slice(0, 2)
            ?.map((name: any) => name?.slice(0, 1))}
        </div>
        <div className="reviewer-name ">
          <h1 className="text-md font-bold">{review?.author?.name}</h1>
          <div className="stars flex items-center justify-center gap-1 text-yellow-500 mt-2">
            {[0, 1, 2, 3, 4].map((stars, index) => (
              <BsStarFill
                key={index}
                size="20"
                color={stars < review?.rating ? "#80CED1" : "#C0C0C0"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
