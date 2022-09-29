import { useState } from "react";
import ReactSlider from "react-slider";
type Props = {};

const DuelSlider = (props: Props) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  console.log(min, max);
  return (
    <div className="w-full p-2">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb "
        defaultValue={[min, max]}
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
        minDistance={10}
        step={1000}
        onChange={([min, max]) => {
          setMin(min);
          setMax(max);
        }}
        min={0}
        max={100000}
      />
    </div>
  );
};

export default DuelSlider;
