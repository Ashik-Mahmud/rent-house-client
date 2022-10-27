import { useState } from "react";
import { BsFillChatRightQuoteFill, BsStarFill } from "react-icons/bs";
type Props = {
  review: any;
};

const AppReviewCard = ({ review }: Props) => {
  const [isShow, setIsShow] = useState(false);

  /* showing stars */

  return (
    <div className="text-left bg-white shadow p-6 rounded-lg">
      <div className="quote text-2xl m-4">
        <BsFillChatRightQuoteFill />
      </div>
      <blockquote className="font-poppins my-4 text-sm leading-6">
        {isShow
          ? review?.content
          : review?.content?.length > 200
          ? review?.content?.slice(0, 200) + "..." // if content is more than 200 then slice it
          : review?.content}

        {review?.content?.length > 200 && (
          // if content is more than 200 then show read more button
          <span
            className="text-success cursor-pointer"
            onClick={() => setIsShow((state) => !state)}
          >
            Read More
          </span>
        )}
      </blockquote>
      <div className="author flex items-center gap-4">
        <div className="avatar online">
          <div className="w-12 border-4 border-gray-300 rounded-full">
            <img
              src={
                review?.author?.profileImage
                  ? review?.author?.profileImage
                  : review?.author?.avatar
              }
              alt={review?.author?.name}
            />
          </div>
        </div>
        <div className="info">
          <h3 className="text-lg font-bold ">{review?.author?.name}</h3>
          <div className="stars flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((stars, index) => (
              <BsStarFill
                key={index}
                size="15"
                color={stars < review?.rating ? "#31bb61" : "#C0C0C0"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppReviewCard;
