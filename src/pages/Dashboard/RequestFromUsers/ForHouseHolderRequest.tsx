import { BiCheck, BiX } from "react-icons/bi";

type Props = {};

const ForHouseHolderRequest = (props: Props) => {
  return (
    <>
      <div className="request-table mt-5">
        <table className="table table-compact table-striped w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Users</th>
              <th>Email</th>
              <th>Phone</th>

              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">Admin</div>
                  </div>
                </div>
              </td>
              <td>
                <a href="mailto:jhone@doe.com">jhone@doe.com</a>
              </td>
              <td>
                <a href="tel:+880123456789">+880123456789</a>
              </td>

              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </td>
              <td>
                <button className="badge badge-success badge-lg text-sm font-poppins cursor-pointer">
                  <BiCheck /> Confirm
                </button>
                <button className="badge badge-error ml-3 badge-lg text-sm font-poppins cursor-pointer">
                  <BiX /> Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="pagination flex items-center justify-center mt-10 gap-2">
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
    </>
  );
};

export default ForHouseHolderRequest;
