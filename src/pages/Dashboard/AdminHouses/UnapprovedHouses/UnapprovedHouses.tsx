import UnapprovedRow from "./UnapprovedRow";

type Props = {};

const UnapprovedHouses = (props: Props) => {
  return (
    <div>
      <div className="p-5 my-5 bg-white">
        <div className="title flex items-center justify-between bg-base-200 p-3 rounded">
          <h3 className="text-2xl font-bold">Unapproved Houses</h3>
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
                <UnapprovedRow />
                <UnapprovedRow />
                <UnapprovedRow />
                <UnapprovedRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnapprovedHouses;
