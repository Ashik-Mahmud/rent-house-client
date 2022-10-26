import axios from "axios";
import cogoToast from "cogo-toast";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import {
  BsFacebook,
  BsLink,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import styled from "styled-components";
import GlobalLoader from "../../components/GlobalLoader";
import { base_backend_url } from "../../configs/config";
import { useGetBlogByIdQuery } from "../../services/BlogApi";

type Props = {};

const BlogsDetails = (props: Props) => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const { data, isLoading, refetch } = useGetBlogByIdQuery(blogId);
  const [isCopyLink, setIsCopyLink] = useState(false);
  /* Handle Favorite */
  const handleFavorite = async () => {
    localStorage.setItem("favorite" + blogId, JSON.stringify(!clicked));
    setClicked(() => {
      return localStorage.getItem("favorite" + blogId) === "true"
        ? true
        : false;
    });
    const { data } = await axios.patch(
      `${base_backend_url}/api/v1/blogs/like/${blogId}?like=${clicked}`
    );
    cogoToast.success(data.message);
    refetch();
  };

  /* Handle Copy Link to the Houses */
  const handleCopyLink = (id: string) => {
    const location = window.location.origin;
    const link = `${location}/blogs/${id}`;
    navigator.clipboard.writeText(link);
    setIsCopyLink(true);
    setTimeout(() => {
      setIsCopyLink(false);
    }, 2000);
  };

  useEffect(() => {
    const favoriteValue: any = localStorage.getItem("favorite" + blogId);
    const parsedValue = JSON.parse(favoriteValue);
    setClicked(parsedValue || false);
  }, [clicked, blogId]);

  if (isLoading) return <GlobalLoader />;
  return (
    <BlogsDetailsContainer className="p-10 sm:p-12 sm:px-96 font-bangla rounded">
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
            <div className="flex items-center gap-4">
              <span
                className="text-4xl cursor-pointer "
                onClick={() => navigate(-1)}
              >
                <BiArrowBack />
              </span>
              <h2 className="text-3xl font-bold">{data?.data?.title}</h2>
            </div>
            <div className="mt-4 ">
              Category/
              <span className="font-bold">{data?.data?.category}</span>
            </div>
          </div>
          <div className="meta flex items-center justify-between mt-10">
            <div className="author">
              <h3 className="text-xl font-bold">
                {data?.data?.author?.name || "loading...."}
              </h3>
              <span>{format(new Date(data?.data?.createdAt), "PPPPp")}</span>
            </div>
            <div className="social-share">
              <ul className=" flex items-center gap-5">
                <li
                  className="cursor-pointer tooltip"
                  data-tip="Share on facebook"
                >
                  <FacebookShareButton
                    url={window.location.origin + "/blogs/" + data?.data?._id}
                  >
                    <BsFacebook />
                  </FacebookShareButton>
                </li>
                <li
                  className="cursor-pointer tooltip"
                  data-tip="Share on WhatsApp"
                >
                  <WhatsappShareButton
                    url={window.location.origin + "/blogs/" + data?.data?._id}
                  >
                    <BsWhatsapp />
                  </WhatsappShareButton>
                </li>
                <li
                  className="cursor-pointer tooltip"
                  data-tip="Share on linkedIn"
                >
                  <TwitterShareButton
                    url={window.location.origin + "/blogs/" + data?.data?._id}
                  >
                    <BsTwitter />
                  </TwitterShareButton>
                </li>{" "}
                <li
                  className="cursor-pointer tooltip"
                  data-tip="Share on linkedIn"
                >
                  <LinkedinShareButton
                    url={window.location.origin + "/blogs/" + data?.data?._id}
                  >
                    <BsLinkedin />
                  </LinkedinShareButton>
                </li>
                <li
                  onClick={() => handleCopyLink(data?.data?._id)}
                  className="cursor-pointer tooltip"
                  data-tip={isCopyLink ? "Copied" : "Copy Link"}
                >
                  <BsLink />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* details */}
        <div
          className="details m-10 leading-8 font-bangla text-lg "
          dangerouslySetInnerHTML={{ __html: data?.data?.description }}
        ></div>

        <div className="text-center flex items-center justify-between  bg-gray-50 rounded-lg">
          <div className="flex items-center gap-0">
            <div
              onClick={handleFavorite}
              className={`loves-to-the-blog ${clicked ? "loved-blog" : ""} `}
              title={"Dislike Like"}
            ></div>
            <span
              className={`font-bold font-open text-xl ${
                clicked ? "text-red-500" : ""
              }`}
            >
              {data?.data?.likes} Likes
            </span>
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
