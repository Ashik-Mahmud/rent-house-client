import axios from "axios";
import { BrowserView, MobileView } from "react-device-detect";
import { useQuery } from "react-query";
import GlobalLoader from "../../../../components/GlobalLoader";
import NoDataComponent from "../../../../components/NoDataComponent";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import RejectedHouseModal from "../UnapprovedHouses/RejectedHouseModal";
import RejectedRow from "./RejectedRow";

type Props = {};

const RejectedHouses = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  /* Get Approved House */
  const { data: rejectedHouses, isLoading } = useQuery("unapprovedHouses", () =>
    getApprovedHouses()
  );

  /* Get Approved Houses Function */
  const getApprovedHouses = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/admin/houses/rejected",
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  };

  console.log(rejectedHouses);

  return (
    <>
      {" "}
      <div>
        <div className="p-3 sm:p-5 my-5 bg-white">
          <div className="title flex items-center justify-between bg-gray-50 p-3 rounded">
            <MobileView>
              <h3 className="text-2xl font-bold">Rejected </h3>
            </MobileView>
            <BrowserView>
              <h3 className="text-2xl font-bold">Rejected Houses</h3>
            </BrowserView>
            <div className="recent">
              <select
                name=""
                id=""
                className="cursor-pointer font-poppins outline-none p-1 rounded border border-base-300"
              >
                <option value="">Recent</option>
                <option value="">Oldest</option>
              </select>
            </div>
          </div>
          <div className="unapproved-houses-content my-5">
            <div className="overflow-x-auto">
              {isLoading ? (
                <GlobalLoader />
              ) : rejectedHouses?.houses?.length > 0 ? (
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Image</th>
                      <th>Bedrooms & Bathrooms</th>
                      <th>House Type</th>
                      <th>User - Name/Email</th>
                      <th>Price</th>
                      <th>status</th>
                      <th>View</th>
                      <th>permission</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rejectedHouses?.houses.map((house: any, ind: number) => (
                      <RejectedRow key={house?._id} house={house} ind={ind} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <NoDataComponent />
              )}
            </div>
            {/* Pagination */}
            <div className="pagination flex items-center justify-end my-3">
              <a href="/" className="btn btn-circle btn-ghost btn-sm">
                1
              </a>
              <a
                href="/"
                className="btn btn-circle btn-ghost btn-sm btn-active"
              >
                2
              </a>
              <a href="/" className="btn btn-circle btn-ghost btn-sm">
                3
              </a>
            </div>
          </div>
        </div>
      </div>
      <RejectedHouseModal />
    </>
  );
};

export default RejectedHouses;
