import axios from "axios";
import { BiAddToQueue, BiBath, BiBed } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import GlobalLoader from "../../../../components/GlobalLoader";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";

type Props = {};

const RecentBookings = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});

  /* Get Unapproved House */
  const { data: unapprovedHouses, isLoading } = useQuery(
    ["unapprovedHouses"],
    () => getUnapprovedHouses()
  );

  /* Get Unapproved Houses Function */
  const getUnapprovedHouses = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/admin/houses/unapproved?filter=-createdAt`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  };

  return (
    <div className="p-5 bg-white rounded shadow">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Recent Houses Request</h3>
        <Link to="/dashboard/admin/houses" className="text-primary">
          View All
        </Link>
      </div>
      <div className="my-5 overflow-x-auto">
        {isLoading ? (
          <GlobalLoader />
        ) : unapprovedHouses?.data?.houses?.length > 0 ? (
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
              </tr>
            </thead>
            <tbody>
              {unapprovedHouses?.data?.houses
                .slice(0, 4)
                .map((house: any, ind: number) => (
                  <tr key={house?._id}>
                    <th>{ind + 1}</th>
                    <td>
                      {" "}
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={
                                house?.image?.img
                                  ? house?.image?.img
                                  : "https://placeimg.com/400/225/arch"
                              }
                              alt={house?.name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{house?.name}</div>
                          <div className="text-sm opacity-50">
                            {house?.address}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="badge badge-ghost">
                          <BiBed /> {house?.bedrooms}
                        </div>
                        <div className="badge badge-ghost">
                          <BiBath /> {house?.bathrooms}
                        </div>
                      </div>
                    </td>
                    <td> {house?.houseType}</td>
                    <td>
                      <div className="badge badge-ghost text-xs">
                        {house?.owner?.name} / {house?.owner?.email}
                      </div>
                    </td>
                    <td>{house?.price}</td>
                    <td>
                      <div className="badge badge-warning">
                        {house?.status}{" "}
                      </div>
                    </td>
                    <td>
                      <Link
                        to={`/house/${house?._id}`}
                        className="tooltip"
                        data-tip="View House"
                      >
                        <BsEyeFill />
                      </Link>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Link
                          to="/dashboard/admin/houses"
                          className="flex items-center gap-1 bg-info rounded p-1 px-2 cursor-pointer"
                        >
                          <BiAddToQueue /> <small>Action</small>{" "}
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-5">
            <h3>No Data found.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentBookings;
