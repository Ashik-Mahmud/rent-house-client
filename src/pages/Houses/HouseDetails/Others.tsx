import { MdOutlineOtherHouses } from "react-icons/md";
type Props = {};

const Others = (props: Props) => {
  return (
    <>
      {/* Others */}
      <div className="address my-3 bg-white p-5">
        <div className="title mb-6">
          <h3 className="text-2xl font-bold mt-3">Others</h3>
          <span className="w-10 h-1 bg-success block"></span>
        </div>
        <div className="address-content">
          <table className="table">
            <tbody>
              <tr>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Drawing Room
                </td>
                <th>
                  <span className="badge badge-ghost">Yes </span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Dining Room
                </td>
                <th>
                  <span className="badge badge-ghost">Yes</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Kitchen
                </td>
                <th>
                  <span className="badge badge-ghost"> N/A</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Store Room
                </td>
                <th>
                  <span className="badge badge-ghost">N/A</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Servant Room
                </td>
                <th>
                  <span className="badge badge-ghost">N/A</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Swiming Pool
                </td>
                <th>
                  <span className="badge badge-ghost">N/A</span>
                </th>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <tbody>
              <tr>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Gym
                </td>
                <th>
                  <span className="badge badge-ghost">N/A </span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Lawn
                </td>
                <th>
                  <span className="badge badge-ghost">N/A</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Garage
                </td>
                <th>
                  <span className="badge badge-ghost"> N/A</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Lift
                </td>
                <th>
                  <span className="badge badge-ghost">N/A</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses /> Generator
                </td>
                <th>
                  <span className="badge badge-ghost">N/A</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses />
                  Security
                </td>
                <th>
                  <span className="badge badge-ghost">Yes</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses />
                  Internet
                </td>
                <th>
                  <span className="badge badge-ghost">Yes</span>
                </th>
                <td className="flex items-center gap-2">
                  <MdOutlineOtherHouses />
                  CCTV
                </td>
                <th>
                  <span className="badge badge-ghost">Yes</span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Others;
