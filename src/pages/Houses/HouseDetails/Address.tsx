import { BiMap, BiUserCheck } from "react-icons/bi";
import { BsFillSuitHeartFill, BsMapFill } from "react-icons/bs";
import { GoHome } from "react-icons/go";
type Props = {};
const Address = (props: Props) => {
  return (
    <div>
      {" "}
      {/* Address */}
      <div className="address my-3 bg-white p-5">
        <div className="title mb-6">
          <h3 className="text-2xl font-bold mt-3">Address</h3>
          <span className="w-10 h-1 bg-success block"></span>
        </div>
        <div className="address-content overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <td className="flex items-center gap-2">
                  <BiMap /> District
                </td>
                <th>
                  <span className="badge badge-ghost">Gaibandha </span>
                </th>
                <td className="flex items-center gap-2">
                  <BiMap /> City
                </td>
                <th>
                  <span className="badge badge-ghost">
                    Rangpur, Bangladesh{" "}
                  </span>
                </th>
                <td className="flex items-center gap-2">
                  <BsMapFill /> Google Map
                </td>
                <th>
                  <span className="badge badge-ghost">
                    {" "}
                    <a href="https//maps.google.com">Go to Map</a>{" "}
                  </span>
                </th>
                <td className="flex items-center gap-2">
                  <BsFillSuitHeartFill /> Total Love
                </td>
                <th>
                  <span className="badge badge-ghost">1200</span>
                </th>
                <td className="flex items-center gap-2">
                  <BiUserCheck /> Total Views
                </td>
                <th>
                  <span className="badge badge-ghost">1400</span>
                </th>
                <td className="flex items-center gap-2">
                  <GoHome /> Positive Review
                </td>
                <th>
                  <span className="badge badge-ghost">98%</span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Address;
