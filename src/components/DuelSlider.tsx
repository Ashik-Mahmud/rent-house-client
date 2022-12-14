import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import ReactSlider from "react-slider";
import { base_backend_url } from "../configs/config";
type Props = {
  priceFilter: any;
};

const DuelSlider = ({ priceFilter }: Props) => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = priceFilter;

  useEffect(() => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  }, [setMaxPrice, setMinPrice, maxPrice, minPrice]);

  const { data, isLoading } = useQuery("GET_HOUSES", async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/houses/house-prices`
    );
    return data?.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full p-2">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb "
        defaultValue={[data?.lowestPrice, data?.highestPrice]}
        renderThumb={(props, state) => (
          <div
            {...props}
            className="bg-gray-300 border shadow-xl h-auto p-1 w-auto grid place-items-center rounded cursor-grab outline-none active:bg-gray-300 -top-3 text-xs"
          >
            {state.valueNow}
          </div>
        )}
        pearling={true}
        trackClassName="track"
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderTrack={(props, state) => (
          <>
            <div {...props} className="track h-1 bg-base-300 rounded"></div>
          </>
        )}
        minDistance={1}
        step={100}
        onChange={([min, max]) => {
          setMinPrice(min);
          setMaxPrice(max);
        }}
        min={data?.lowestPrice || 0}
        max={data?.highestPrice || 0}
      />
    </div>
  );
};

export default DuelSlider;
