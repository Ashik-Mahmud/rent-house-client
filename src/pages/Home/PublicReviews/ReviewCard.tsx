import { BsFillChatRightQuoteFill, BsFillStarFill } from "react-icons/bs";
type Props = {};
const ReviewCard = (props: Props) => {
  return (
    <div className="reviewCard rounded  p-4">
      <div className="review-content  text-gray-700 my-3 font-poppins text-[15px] text-center leading-6 bg-base-300 p-4 rounded-md mb-6">
        <div className="quote text-2xl  m-4">
          <BsFillChatRightQuoteFill />
        </div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        nisi, saepe odit reprehenderit deserunt officiis! Laborum commodi,
        maiores ad mollitia quod accusamus dolorem ipsam recusandae quo dolores
        esse cupiditate. Dolorem nobis animi in!
      </div>
      <div className="reviewer flex flex-col text-center items-center gap-3">
        <div className="reviewer-image rounded-full overflow-hidden border-4 w-16 h-16 grid place-items-center text-3xl select-none bg-slate-300 font-bold border-gray-300">
          A
        </div>
        <div className="reviewer-name ">
          <h1 className="text-md font-bold">Ashik Mahmud</h1>
          <div className="stars flex items-center justify-center gap-1 text-yellow-500">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
