import { BsFillChatRightQuoteFill, BsStarFill } from "react-icons/bs";

type Props = {};

const AppReviewCard = (props: Props) => {
  return (
    <div className="text-left bg-white shadow p-6 rounded-lg">
      <div className="quote text-2xl m-4">
        <BsFillChatRightQuoteFill />
      </div>
      <blockquote className="font-poppins my-4 text-sm leading-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus at
        atque explicabo nemo hic distinctio error numquam deleniti repellat,
        officia laudantium quisquam dolorem adipisci?
      </blockquote>
      <div className="author flex items-center gap-4">
        <div className="avatar online">
          <div className="w-12 border-4 border-gray-300 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <div className="info">
          <h3 className="text-lg font-bold ">Raihan Khan</h3>
          <div className="stars flex items-center gap-2">
            <span className="text-success">
              <BsStarFill />
            </span>
            <span className="text-success">
              <BsStarFill />
            </span>
            <span className="text-success">
              <BsStarFill />
            </span>
            <span className="text-success">
              <BsStarFill />
            </span>
            <span className="text-success">
              <BsStarFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppReviewCard;
