import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

type Props = {};

const UsersBlogs = (props: Props) => {
  return (
    <div>
      <div className="p-5 my-5 bg-white">
        <h1 className="text-3xl font-bold">My Blogs</h1>
        {/* Blogs Table */}
        <div className="overflow-x-auto my-5 font-poppins">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Views</th>
                <th>status</th>
                <th>Open</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
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
                  </div>
                </td>
                <td>Blog Title</td>
                <td>Category</td>
                <td>
                  <div className="badge badge-ghost">150</div>
                </td>
                <td>
                  <div className="badge badge-success">active</div>
                </td>
                <td>
                  <div className="badge badge-ghost cursor-pointer">
                    <BsEye />
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-6">
                    <span className="text-lg cursor-pointer">
                      <BiEdit />
                    </span>
                    <span className="text-error text-lg cursor-pointer">
                      <BiTrash />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersBlogs;
