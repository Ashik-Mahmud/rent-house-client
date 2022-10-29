import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type Props = {};

const DetailsSkeletonLoader = (props: Props) => {
  return (
    <section>
      <SkeletonTheme baseColor="#ecf0f5">
        <div className="container mx-auto py-10 font-poppins">
          <div className="card-header bg-white p-4">
            <Skeleton className="w-full" height={80} />
          </div>
          <div className="card-image bg-white p-4 my-4">
            <Skeleton className="w-full" height={300} />
          </div>
          <div className="bg-white p-4 my-4">
            <div className="title">
              <Skeleton width={150} height={30} />
            </div>
            <div className="description mt-2">
              <Skeleton height={50} />
            </div>
            <div className="title mt-5">
              <Skeleton width={150} height={30} />
            </div>
            <div className="description mt-2">
              <Skeleton count={4} />
            </div>
          </div>
          <div className="bg-white p-4 my-4">
            <div className="title">
              <Skeleton width={150} height={30} />
            </div>
            <div className="description mt-2">
              <Skeleton height={50} />
            </div>
          </div>
          <div className="bg-white p-4 my-4">
            <div className="title">
              <Skeleton width={150} height={30} />
            </div>
            <div className="description mt-2">
              <Skeleton height={50} />
            </div>
            <div className="description mt-2">
              <Skeleton count={3} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </section>
  );
};

export default DetailsSkeletonLoader;
