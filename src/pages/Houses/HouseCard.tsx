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
};

const HouseCard = ({ gridView }: Props) => {
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
            className={`share-items flex absolute right-14 z-50 gap-1 items-center ${
              showShare ? "opacity-100" : "opacity-0"
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
        Duplex
      </span>
      <figure
        className={`rounded overflow-hidden relative shadow ${
          !gridView && "w-4/12"
        }`}
      >
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
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
              <GiShower /> 2
            </li>
            <li
              data-tip="Bedrooms"
              className="badge-ghost p-1 rounded-sm shadow-lg flex items-center gap-1 text-lg font-open tooltip tooltip-left tooltip-success z-20"
            >
              <GiBed /> 4
            </li>
          </ul>
        )}
      </figure>
      <div
        className={`card-body p-3 px-4 ${
          !gridView && "justify-start items-start w-3/4"
        }`}
      >
        <h2 className="text-lg font-bold text-gray-900 ">Rajbar New Villa</h2>
        <ul
          className={`text-sm font-poppins flex  gap-1 ${
            gridView ? "flex-col" : "flex-row gap-7"
          }`}
        >
          <li className="transition-all group-hover:tracking-wide">
            Location: <span className="font-semibold">Rangpur City</span>
          </li>
          <li className="transition-all group-hover:tracking-wide">
            Price: <span className="font-semibold">12,524/m</span>
          </li>
          <li className="transition-all group-hover:tracking-wide">
            Type: <span className="font-semibold">Rent</span>
          </li>
          {!gridView && (
            <>
              <li className="transition-all group-hover:tracking-wide">
                Bathrooms: <span className="font-semibold">12</span>
              </li>
              <li className="transition-all group-hover:tracking-wide">
                Bedrooms: <span className="font-semibold">4</span>
              </li>
            </>
          )}
        </ul>
        {!gridView && (
          <p className="text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            optio odit at voluptas ex aperiam praesentium mollitia, repellat
            officia aliquam similique, fugiat accusamus iste? Culpa ducimus nisi
            ab officiis itaque!
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
