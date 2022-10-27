import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type Props = {
  cards: number;
  gridView: Boolean;
};

const HouseSkeletonLoading = ({ cards, gridView }: Props) => {
  return (
    <div className={"flex gap-8 py-4"}>
      <SkeletonTheme baseColor="#eaf0f5">
        <div className="img w-4/12 ">
          <Skeleton height={230} />
        </div>
        <div className="info flex-1">
          <div className="title">
            <Skeleton height={20} width={400} />
          </div>
          <div className="flex items-center gap-5 my-2">
            <div className="location">
              <Skeleton height={20} width={100} />
            </div>
            <div className="price">
              <Skeleton height={20} width={100} />
            </div>
            <div className="share">
              <Skeleton height={20} width={100} />
            </div>
            <div className="share">
              <Skeleton height={20} width={100} />
            </div>
            <div className="share">
              <Skeleton height={20} width={100} />
            </div>
          </div>
          <div className="description">
            <Skeleton height={15} count={5} className="w-full" />
          </div>
          <button>
            <Skeleton height={30} width={150} />
          </button>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default HouseSkeletonLoading;
