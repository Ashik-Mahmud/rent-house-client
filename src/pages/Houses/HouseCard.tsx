import formatDistance from "date-fns/formatDistance";
import { useEffect, useState } from "react";
import { BiShare, BiShareAlt } from "react-icons/bi";
import {
  BsArrowDownRight,
  BsFacebook,
  BsLink,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { GiBed, GiShower } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import styled from "styled-components";

type Props = {
  gridView: Boolean;
  house: any;
};

const HouseCard = ({ gridView, house }: Props) => {
  const [showShare, setShowShare] = useState(false);
  const [isCopyLink, setIsCopyLink] = useState(false);

  /* Handle Copy Link to the Houses */
  const handleCopyLink = (id: string) => {
    const location = window.location.origin;
    const link = `${location}/house/${id}`;
    navigator.clipboard.writeText(link);
    setIsCopyLink(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopyLink(false);
    }, 2000);
  }, [isCopyLink]);

  /* Time and date */
  const timeDistance = formatDistance(new Date(house.createdAt), new Date(), {
    addSuffix: true,
  });

  return (
    <HouseCardContainer
      className={`card group ${
        !gridView && "card-side flex-1 p-3"
      }  bg-base-100 shadow-xl rounded border p-1 font-poppins cursor-pointer `}
    >
      {!gridView && (
        <div className="">
          <span
            className="absolute right-5 top-4 hover:scale-110 transition-all  "
            onClick={() => setShowShare((state) => !state)}
          >
            {showShare ? <BiShare /> : <BiShareAlt />}
          </span>
          <div
            className={`share-items flex absolute right-14 transition-all z-50 gap-1 items-center ${
              showShare ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="share-item" title="share on facebook">
              <span className="btn btn-xs btn-circle btn-ghost">
                <FacebookShareButton
                  url={window.location.origin + "/house/" + house?._id}
                >
                  <BsFacebook />
                </FacebookShareButton>
              </span>
            </div>
            <div className="share-item" title="share on Whatsapp">
              <span className="btn btn-xs btn-circle btn-ghost">
                <WhatsappShareButton
                  url={window.location.origin + "/house/" + house?._id}
                >
                  <BsWhatsapp />
                </WhatsappShareButton>
              </span>
            </div>
            <div className="share-item" title="share on Twitter">
              <span className="btn btn-xs btn-circle btn-ghost">
                <TwitterShareButton
                  url={window.location.origin + "/house/" + house?._id}
                >
                  <BsTwitter />
                </TwitterShareButton>
              </span>
            </div>
            <div className="share-item" title="share on Linkedin">
              <span className="btn btn-xs btn-circle btn-ghost">
                <LinkedinShareButton
                  url={window.location.origin + "/house/" + house?._id}
                >
                  <BsLinkedin />
                </LinkedinShareButton>
              </span>
            </div>
            <div
              className="share-item tooltip tooltip-left"
              data-tip={isCopyLink ? "Copied" : "Copy Link"}
            >
              <button
                onClick={() => handleCopyLink(house._id)}
                className="btn btn-xs btn-circle btn-ghost"
              >
                <BsLink />
              </button>
            </div>
          </div>
        </div>
      )}
      <span className="text-sm absolute top-3 left-3 z-20 badge badge-ghost category transition-all">
        {house?.category}
      </span>
      <figure
        className={`rounded overflow-hidden relative shadow ${
          !gridView && "w-4/12"
        }`}
      >
        <img
          loading="lazy"
          src={
            house?.image.img
              ? house?.image.img
              : "https://placeimg.com/400/225/arch"
          }
          alt={house?.name || "loading..."}
          className={`w-full ${
            gridView ? "h-40" : "h-52"
          } object-cover transition-all duration-300 group-hover:scale-125`}
        />
        {gridView && (
          <ul className="absolute flex items-center text-xs gap-2 top-1 right-1  bedrooms-bathrooms transition-all">
            <li
              data-tip="Bathrooms"
              className="badge-ghost p-1 rounded-sm shadow-lg flex items-center gap-1 text-lg font-open tooltip tooltip-left tooltip-success z-20"
            >
              <GiShower /> {house?.bathrooms || "loading..."}
            </li>
            <li
              data-tip="Bedrooms"
              className="badge-ghost p-1 rounded-sm shadow-lg flex items-center gap-1 text-lg font-open tooltip tooltip-left tooltip-success z-20"
            >
              <GiBed /> {house?.bedrooms || "loading..."}
            </li>
          </ul>
        )}
      </figure>
      <div
        className={`card-body p-3 px-4 ${
          !gridView && "justify-start items-start w-3/4"
        }`}
      >
        <div
          className={`flex items-center justify-between ${
            !gridView && "gap-5"
          }`}
        >
          <h2 className="text-lg font-bold text-gray-900 ">
            {house?.name || "loading..."}
          </h2>
          <small className="text-gray-400">{timeDistance}</small>
        </div>
        <ul
          className={`text-sm font-poppins flex  gap-1 ${
            gridView ? "flex-col" : "flex-row gap-7"
          }`}
        >
          <li className="transition-all ">
            Location:{" "}
            <span className="font-semibold">
              {house?.address || "loading..."}
            </span>
          </li>
          <li className="transition-all ">
            Price:{" "}
            <span className="font-semibold">
              {house?.price || "loading..."}
            </span>
          </li>
          <li className="transition-all ">
            Type:{" "}
            <span className="font-semibold">
              {house?.houseType || "loading..."}
            </span>
          </li>
          {!gridView && (
            <>
              <li className="transition-all ">
                Bathrooms:{" "}
                <span className="font-semibold">
                  {house?.bathrooms || "loading..."}
                </span>
              </li>
              <li className="transition-all group-hover:tracking-wide">
                Bedrooms:{" "}
                <span className="font-semibold">
                  {house?.bedrooms || "loading..."}
                </span>
              </li>
            </>
          )}
        </ul>
        {!gridView && (
          <p className="text-sm text-gray-500">
            {house?.description.length > 250
              ? house?.description?.slice(0, 250) + "..."
              : house?.description || "loading..."}
          </p>
        )}
        <Link
          to={`/house/${house?._id}`}
          className={`btn bg-base-200 btn-sm btn-ghost border   gap-3 ${
            gridView ? "flex items-center" : "flex items-center"
          }`}
        >
          View Details <BsArrowDownRight />
        </Link>
      </div>
    </HouseCardContainer>
  );
};

const HouseCardContainer = styled.div`
  position: relative;
  .category {
    top: -50%;
  }
  &:hover .category {
    top: 3%;
  }
  .bedrooms-bathrooms {
    right: -50%;
  }
  &:hover .bedrooms-bathrooms {
    right: 2%;
  }
`;

export default HouseCard;
