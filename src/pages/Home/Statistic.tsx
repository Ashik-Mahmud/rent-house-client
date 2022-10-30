import axios from "axios";
import CountUp from "react-countup";
import { useQuery } from "react-query";
type Props = {};
const Fade = require("react-reveal/Fade");

const Statistic = (props: Props) => {
  const { data, isLoading } = useQuery("statistic", async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/request/reports-for-homepage"
    );
    return data?.data;
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <Fade top distance="20px" cascade>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-2  rounded  sm:stats stats-vertical sm:stats-horizontal gap-20 ">
          <div className="stat">
            <div className="stat-title">Satisfied Customer</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={data?.customers}
                duration={2.75}
                separator=" "
                decimals={1}
                decimal="."
              />
            </div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Houses</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={data?.totalHouses}
                duration={2.75}
                separator=" "
                decimals={1}
                decimal="."
              />
            </div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Awards</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={10}
                duration={2.75}
                separator=" "
                decimals={1}
                decimal="."
              />
            </div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Blogs</div>
            <div className="stat-value">
              <CountUp
                start={0}
                end={data?.totalBlogs}
                duration={1.75}
                separator=" "
                decimals={1}
                decimal="."
              />
            </div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Statistic;
