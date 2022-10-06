import { BrowserView, MobileView } from "react-device-detect";
import ApprovedRow from "./ApprovedRow";

type Props = {};

const ApprovedHouses = (props: Props) => {
  return (
    <div className="">
      <div className="approvedHouse p-3 sm:p-5 my-4 bg-white">
        <div className="title flex items-center justify-between bg-base-300 p-3 rounded">
          <MobileView>
            <h3 className="text-2xl font-bold">Approved</h3>
          </MobileView>
          <BrowserView>
            <h3 className="text-2xl font-bold">Approved Houses</h3>
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
        <div className="approved-houses-content py-6">
          <div className="overflow-x-auto">
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
                <ApprovedRow />
                <ApprovedRow />
                <ApprovedRow />
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="pagination flex items-center justify-end my-3">
            <a href="/" className="btn btn-circle btn-ghost btn-sm">
              1
            </a>
            <a href="/" className="btn btn-circle btn-ghost btn-sm btn-active">
              2
            </a>
            <a href="/" className="btn btn-circle btn-ghost btn-sm">
              3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedHouses;
