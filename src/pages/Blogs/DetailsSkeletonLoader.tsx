import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type Props = {};

const DetailsSkeletonLoader = (props: Props) => {
  return (
    <div className="p-5 sm:p-12 sm:px-96 font-bangla rounded">
      <SkeletonTheme baseColor="#eaf0f5">
        <div className="container mx-auto bg-white p-5">
          <Skeleton height={300} className="w-full" />
          <div className="my-2">
            <Skeleton width={600} height={40} />
          </div>
          <div>
            <Skeleton width={300} height={20} />
          </div>
          <div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <Skeleton width={150} height={30} />
                <Skeleton width={200} height={20} />
              </div>
              <div className="flex items-center gap-4">
                <Skeleton width={40} height={40} />
                <Skeleton width={40} height={40} />
                <Skeleton width={40} height={40} />
                <Skeleton width={40} height={40} />
                <Skeleton width={40} height={40} />
              </div>
            </div>
          </div>
          <div>
            <div className="my-8">
              <Skeleton className="w-full" count={25} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default DetailsSkeletonLoader;
