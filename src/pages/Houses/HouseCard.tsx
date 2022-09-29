import { BsArrowDownRight } from "react-icons/bs";
import { GiBed, GiShower } from "react-icons/gi";
import styled from "styled-components";

type Props = {};

const HouseCard = (props: Props) => {
  return (
    <HouseCardContainer className="card  bg-base-100 shadow-xl rounded border p-1 font-poppins cursor-pointer">
      <span className="text-sm absolute top-3 left-3 z-20 badge badge-ghost category transition-all">
        Duplex
      </span>
      <figure className="rounded overflow-hidden relative">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="w-full h-40"
        />
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
      </figure>
      <div className="card-body p-3 px-4">
        <h2 className="text-lg font-bold text-gray-900">Rajbar New Villa</h2>
        <ul className="text-sm font-poppins flex flex-col gap-2">
          <li>
            Location: <span className="font-semibold">Rangpur City</span>
          </li>
          <li>
            Price: <span className="font-semibold">12,524/m</span>
          </li>
          <li>
            Type: <span className="font-semibold">Rent</span>
          </li>
        </ul>
        <button className="btn bg-base-200 btn-sm btn-ghost border flex items-center gap-3">
          View Details <BsArrowDownRight />
        </button>
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
