import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type Props = {};

const DashboardSkeletonLoader = (props: Props) => {
  return (
    <SkeletonTheme baseColor="#eaf0f5">
      <div className="my-5">
        {/* Dashboard Statistic */}
        <div className="stats gap-4 shadow flex justify-between">
          <div className="stat ">
            <Skeleton height={100} className="my-3 w-full" />
          </div>
          <div className="stat ">
            <Skeleton height={100} className="my-3 w-full" />
          </div>

          <div className="stat">
            <Skeleton height={100} className="my-3 w-full" />
          </div>
          <div className="stat">
            <Skeleton height={100} className="my-3 w-full" />
          </div>

          <div className="stat">
            <Skeleton className="w-full" height={100} />
          </div>
        </div>
        {/* End */}

        {/* Recent Bookings */}
        <div className="my-5 bg-white p-4">
          <Skeleton className="w-full" height={200} />
        </div>
        <div className="my-5 bg-white p-4 flex items-center gap-5">
          <div className="flex-1">
            <Skeleton className="w-full" height={350} />
          </div>
          <div className="flex-1">
            <Skeleton className="w-full" height={350} />
          </div>
        </div>

        {/* End */}
        {/* Charts Area */}
      </div>
    </SkeletonTheme>
  );
};

export default DashboardSkeletonLoader;
