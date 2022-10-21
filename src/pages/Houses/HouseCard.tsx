import { useState } from "react";
import { BiShare, BiShareAlt } from "react-icons/bi";
import {
  BsArrowDownRight,
  BsFacebook,
  BsInstagram,
  BsLink,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { GiBed, GiShower } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  gridView: Boolean;
  house: any;
};

const HouseCard = ({ gridView, house }: Props) => {
  const [showShare, setShowShare] = useState(false);
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
              <a href="/" className="btn btn-xs btn-circle btn-ghost">
                <BsFacebook />
              </a>
            </div>
            <div className="share-item" title="share on Instagram">
              <a href="/" className="btn btn-xs btn-circle btn-ghost">
                <BsInstagram />
              </a>
            </div>
            <div className="share-item" title="share on Twitter">
              <a href="/" className="btn btn-xs btn-circle btn-ghost">
                <BsTwitter />
              </a>
            </div>
            <div className="share-item" title="share on Linkedin">
              <a href="/" className="btn btn-xs btn-circle btn-ghost">
                <BsLinkedin />
              </a>
            </div>
            <div className="share-item" title="Copy Link">
              <a href="/" className="btn btn-xs btn-circle btn-ghost">
                <BsLink />
              </a>
            </div>
          </div>
        </div>
      )}
      <span className="text-sm absolute top-3 left-3 z-20 badge badge-ghost category transition-all">
        {house?.category || "loading..."}
      </span>
      <figure
        className={`rounded overflow-hidden relative shadow ${
          !gridView && "w-4/12"
        }`}
      >
        <img
          src={
            house?.image
              ? "http://localhost:5000/previews/" + house?.image
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
        <h2 className="text-lg font-bold text-gray-900 ">
          {house?.name || "loading..."}
        </h2>
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
          to="/house/4334232"
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
