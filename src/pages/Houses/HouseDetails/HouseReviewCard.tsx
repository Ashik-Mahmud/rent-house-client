import { BsStarFill } from "react-icons/bs";

type Props = {};

const HouseReviewCard = (props: Props) => {
  return (
    <div className="card shadow m-4">
      <div className="comment p-3 bg-slate-50 text-sm">
        House is so much good yet. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Molestiae nulla fuga sapiente sunt odit pariatur optio
        architecto amet error facilis, perspiciatis iure necessitatibus fugit
        rem, sint numquam dolor obcaecati eos. <br />
        <span className="text-success cursor-pointer text-sm">see more</span>
      </div>
      <p className="card-body">
        <small>Reviewed by </small>
        <b>Ashik Mahmud</b>
        <div className="stars flex items-center gap-2">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      </p>
    </div>
  );
};

export default HouseReviewCard;
