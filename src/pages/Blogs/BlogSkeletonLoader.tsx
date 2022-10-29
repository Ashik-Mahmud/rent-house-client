import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type Props = {};

const BlogSkeletonLoader = (props: Props) => {
  return (
    <div className="p-4 transition-all font-bangla hover:scale-x-105 cursor-pointer hover:-translate-y-3 bg-white">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <SkeletonTheme baseColor="#eaf0f5">
          <div>
            <Skeleton className="w-full" height={250} />
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between ">
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>
            <div className="my-2">
              <Skeleton className="w-full" height={30} />
            </div>
            <div>
              <Skeleton className="w-full" count={3} />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <Skeleton width={100} height={30} />
              </div>
              <div className="flex items-center gap-4">
                <Skeleton width={50} height={20} />
                <Skeleton width={50} height={20} />
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default BlogSkeletonLoader;
