import Skeleton from "react-loading-skeleton";
type Props = {};

const ReviewSkeletonLoading = (props: Props) => {
  return (
    <div className="w-full bg-white shadow-sm p-4">
      <div className="text-left">
        <Skeleton width={50} height={50} className="my-3" />
      </div>
      <div>
        <Skeleton count={1} className="w-full" />
        <Skeleton count={1} className="w-full" />
        <Skeleton count={1} className="w-full" />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Skeleton circle={true} height={50} width={50} />
        <div className="flex flex-col mt-2">
          <Skeleton height={10} width={100} />
          <Skeleton height={10} width={100} />
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeletonLoading;
