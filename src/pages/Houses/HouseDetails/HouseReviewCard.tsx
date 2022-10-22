import { BsStarFill } from "react-icons/bs";

type Props = {
  data: any;
};

const HouseReviewCard = ({ data }: Props) => {
  const rating = data?.rating;
  /* Ratings */
  const ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push(<BsStarFill key={i} className="text-success" />);
  }
  for (let i = 0; i < 5 - rating; i++) {
    ratings.push(<BsStarFill key={i + 5} className="text-gray-300" />);
  }

  return (
    <div className="card shadow m-4">
      <div className="comment p-3 bg-slate-50 text-sm">
        {data?.content?.length > 300
          ? data?.content?.slice(0, 300) +
            `<span className="text-success cursor-pointer text-sm">see more</span>`
          : data?.content}
        <br />
      </div>
      <div className="card-body">
        <small>Reviewed by </small>
        <b>{data?.author?.name}</b>
        <div className="stars flex items-center gap-2">
          {ratings.map((rating) => rating)}
        </div>
      </div>
    </div>
  );
};

export default HouseReviewCard;
