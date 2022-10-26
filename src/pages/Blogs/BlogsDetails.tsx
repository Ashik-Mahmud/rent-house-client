import { format } from "date-fns";
import { BsFacebook, BsLink, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GlobalLoader from "../../components/GlobalLoader";
import { useGetBlogByIdQuery } from "../../services/BlogApi";

type Props = {};

const BlogsDetails = (props: Props) => {
  const { blogId } = useParams();

  const { data, isLoading } = useGetBlogByIdQuery(blogId);

  if (isLoading) return <GlobalLoader />;
  console.log(data?.data);
  return (
    <BlogsDetailsContainer className="p-10 sm:p-12 sm:px-96 font-poppins rounded">
      <div className="container mx-auto bg-white p-5">
        <div className="image">
          <img
            src={
              data?.data?.imageUrl
                ? data?.data?.imageUrl
                : "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1666736516847.png"
            }
            className="w-full h-96 object-cover rounded-md"
            alt={data?.data?.title}
          />
        </div>
        <div className="meta-title m-10">
          <div>
            <h2 className="text-3xl font-bold">{data?.data?.title}</h2>
            <div className="mt-4 ">
              Category/
              <span className="font-bold">{data?.data?.category}</span>
            </div>
          </div>
          <div className="meta flex items-center justify-between mt-10">
            <div className="author">
              <h3 className="text-xl font-bold">Ashik Mahmud</h3>
              <span>{format(new Date(data?.data?.createdAt), "PPPPp")}</span>
            </div>
            <div className="social-share">
              <ul className=" flex items-center gap-3">
                <li className="cursor-pointer" title="Share on facebook">
                  <BsFacebook />
                </li>
                <li className="cursor-pointer" title="Share on twitter">
                  <BsTwitter />
                </li>
                <li className="cursor-pointer" title="Share on linkedIn">
                  <BsLinkedin />
                </li>
                <li className="cursor-pointer" title="Copy link">
                  <BsLink />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* details */}
        <div
          className="details m-10 leading-8 font-poppins "
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        ></div>

        <div className="text-center flex items-center justify-between  bg-gray-50 rounded-lg">
          <div className="flex items-center gap-0">
            <div
              className={`loves-to-the-blog loved-blog`}
              title={"Dislike Like"}
            ></div>
            <span className="font-bold text-xl text-red-500">1.5k Likes</span>
          </div>
          <div>
            <form
              action=""
              className="input-group rounded-full overflow-hidden shadow"
            >
              <input
                type="email"
                placeholder="Get Update for blogs"
                className="input sm:w-72 rounded-full px-7 font-sm"
              />
              <button className="btn btn-success rounded-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </BlogsDetailsContainer>
  );
};

const BlogsDetailsContainer = styled.div`
  .loves-to-the-blog {
    position: relative;
    width: 100px;
    height: 100px;
    background: url(https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png)
      no-repeat;
    cursor: pointer;
    display: inline-block;
  }
  .loved-blog {
    background-position: -2799px 0px;
    transition: background 1s steps(28);
  }
`;
export default BlogsDetails;
