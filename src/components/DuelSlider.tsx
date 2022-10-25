import { useEffect } from "react";
import ReactSlider from "react-slider";
type Props = {
  priceFilter: any;
};

const DuelSlider = ({ priceFilter }: Props) => {
  const {
    minPrice,
    maxPrice,
    setMinPrice,
    lowestPrice,
    setMaxPrice,
    highestPrice,
  } = priceFilter;

  useEffect(() => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  }, [setMaxPrice, setMinPrice, maxPrice, minPrice]);

  return (
    <div className="w-full p-2">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb "
        defaultValue={[minPrice, 150000000000000]}
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
        min={lowestPrice}
        max={highestPrice + 1500 || 0}
      />
    </div>
  );
};

export default DuelSlider;
