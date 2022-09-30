import HouseRow from "./HouseRow";

type Props = {};

const MyHouses = (props: Props) => {
  return (
    <div className="p-10 my-5 bg-white rounded shadow">
      <div className="title flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold">My Houses</h1>
        <input
          type="search"
          name="search-field"
          className="input input-bordered"
          id="search-field"
          placeholder="Search"
        />
      </div>
      <div className="my-5 overflow-x-auto">
        <table className="w-full table">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 text-left">House ID</th>
              <th className="py-3 text-left">Title</th>
              <th className="py-3 text-left">Address</th>
              <th className="py-3 text-left">Bedrooms</th>
              <th className="py-3 text-left">Bathrooms</th>
              <th className="py-3 text-left">Price</th>
              <th className="py-3 text-left">Type</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left w-5">Likes</th>
              <th className="py-3 text-left w-5">Revi..</th>
              <th className="py-3 text-left w-5">Ques..</th>
              <th className="py-3 text-left w-5">Repo..</th>
              <th className="py-3 text-left w-5">View</th>
              <th className="py-3 text-left w-5">Upd..</th>
              <th className="py-3 text-left w-5">Del..</th>
            </tr>
          </thead>
          <tbody>
            <HouseRow />
            <HouseRow />
            <HouseRow />
            <HouseRow />
            <HouseRow />
            <HouseRow />
            <HouseRow />
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button className="btn btn-ghost">Previous</button>
        <button className="btn btn-ghost">Next</button>
      </div>
    </div>
  );
};

export default MyHouses;
