import { formatDistance } from "date-fns";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {
  blog: any;
};

const BlogCard = ({ blog }: Props) => {
  /* Time and date */
  const timeDistance = formatDistance(new Date(blog.createdAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="p-4 transition-all font-bangla hover:scale-x-105 cursor-pointer hover:-translate-y-3 bg-white">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          loading="lazy"
          className=" md:h-36 w-full lg:h-56 object-cover  object-center"
          src={
            blog?.imageUrl
              ? blog?.imageUrl
              : "https://placeimg.com/400/225/arch"
          }
          alt={blog?.title}
        />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {blog?.category}
            </h2>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {timeDistance}
            </h2>
          </div>
          <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
            {blog?.title}
          </h1>
          <p className="leading-relaxed mb-3 text-sm">
            {blog?.excerpt?.length > 130
              ? blog?.excerpt?.slice(0, 120) + "..."
              : blog?.excerpt}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/blogs/${blog?._id}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {blog?.views}
            </span>

            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <span>
                <BiLike />
              </span>
              {blog?.likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
