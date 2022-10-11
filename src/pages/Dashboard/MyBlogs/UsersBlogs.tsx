import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsCheck2, BsEye, BsHeart, BsPen, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import GlobalLoader from "../../../components/GlobalLoader";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import {
  useChangeStatusByIdMutation,
  useDeleteBlogByIdMutation,
  useGetBlogsByUidQuery,
} from "../../../services/BlogApi";
type Props = {};

const UsersBlogs = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const { data, isLoading } = useGetBlogsByUidQuery(updatedUser?._id);

  const [deleteBlogById, { data: blogsData, isSuccess, error }] =
    useDeleteBlogByIdMutation();

  const [changeStatus, { data: statusData, error: statusError }] =
    useChangeStatusByIdMutation();

  /* Handle Delete Blogs by Id */
  const deleteBlog = async (id: Number) => {
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
    });
    try {
      if (isConfirm) {
        await deleteBlogById(id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* Handle Change Status */
  const handleChangeStatus = async (value: string) => {
    if (!status) return cogoToast.error("Select Status");
    const isConfirm = await swal({
      title: "Change Status",
      text: "Are you sure to change status of this blog",
      icon: "warning",
      buttons: ["Cancel", "Yes"],
    });
    try {
      if (isConfirm) {
        await changeStatus({
          _id: value,
          status,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (isSuccess) {
      console.log(blogsData);
    }

    if (statusData) {
      console.log(statusData);
      cogoToast.success("Status Changed Successfully");
      setEditStatus(false);
    }

    if (statusError) {
      console.log(statusError);
      cogoToast.error((statusError as any)?.data?.message);
    }
  }, [isSuccess, error, blogsData, statusData, statusError]);

  return (
    <div>
      <div className="p-3 sm:p-5 my-5 bg-white">
        <h1 className="text-3xl font-bold">My Blogs</h1>
        {/* Blogs Table */}
        <div className="overflow-x-auto my-5 font-poppins">
          {isLoading ? (
            <GlobalLoader />
          ) : data?.data?.blogs.length > 0 ? (
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Views</th>
                  <th>Likes</th>
                  <th>status</th>
                  <th>Open</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.blogs?.map((blog: any, ind: number) => (
                  <tr key={blog._id}>
                    <th>{ind + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={
                                blog?.imageUrl
                                  ? blog?.imageUrl
                                  : "https://placeimg.com/400/225/arch"
                              }
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{blog?.title}</td>
                    <td>{blog?.category}</td>
                    <td>
                      <div className="badge badge-ghost">
                        {" "}
                        <span className="flex items-center gap-1">
                          <BsEye /> {blog?.views || 0}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="badge badge-ghost">
                        <span className="flex items-center gap-1">
                          <BsHeart /> {blog?.likes || 0}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="">
                          {editStatus ? (
                            <select
                              className=" outline-none select select-xs text-xs"
                              onChange={(e) => setStatus(e.target.value)}
                            >
                              <option value="">Select</option>
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                            </select>
                          ) : (
                            <span
                              className={`badge ${
                                blog?.status === "active"
                                  ? "badge-success"
                                  : "badge-warning"
                              }`}
                            >
                              {blog?.status}
                            </span>
                          )}
                        </div>
                        {editStatus ? (
                          <div className="flex items-center gap-1">
                            <span
                              className="cursor-pointer text-xl text-success"
                              onClick={() => handleChangeStatus(blog?._id)}
                            >
                              <BsCheck2 />
                            </span>
                            <span
                              className="cursor-pointer text-lg text-error"
                              onClick={() => setEditStatus((state) => !state)}
                            >
                              <BsX />
                            </span>
                          </div>
                        ) : (
                          <span
                            className="cursor-pointer text-sm tooltip tooltip-success"
                            data-tip="Edit Status"
                            onClick={() => setEditStatus((state) => !state)}
                          >
                            <BsPen />
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="badge badge-ghost cursor-pointer">
                        <BsEye />
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-6">
                        <Link
                          to={`/dashboard/blogs/update/${blog?._id}`}
                          className="text-lg cursor-pointer"
                        >
                          <BiEdit />
                        </Link>
                        <span
                          className="text-error text-lg cursor-pointer"
                          onClick={() => deleteBlog(blog?._id)}
                        >
                          <BiTrash />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-5">
              <h2 className="text-2xl font-bold">No Blogs</h2>
              <Link
                to="/dashboard/blogs/add"
                className="btn btn-sm btn-ghost mt-5"
              >
                Add New
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="pagination flex items-center justify-center gap-2">
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
  );
};

export default UsersBlogs;
