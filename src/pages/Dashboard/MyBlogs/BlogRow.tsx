import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsCheck2, BsEye, BsHeart, BsPen, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {
  useChangeStatusByIdMutation,
  useDeleteBlogByIdMutation,
} from "../../../services/BlogApi";
type Props = {
  blog: any;
  ind: number;
};
const BlogRow = ({ blog, ind }: Props) => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [changeStatus, { data: statusData, error: statusError }] =
    useChangeStatusByIdMutation();
  const [deleteBlogById, { data: blogsData, isSuccess, error }] =
    useDeleteBlogByIdMutation();

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

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (isSuccess) {
      cogoToast.success(blogsData?.message);
    }

    if (statusData) {
      cogoToast.success("Status Changed Successfully");
      setEditStatus(false);
    }

    if (statusError) {
      console.log(statusError);
      cogoToast.error((statusError as any)?.data?.message);
    }
  }, [isSuccess, error, blogsData, statusData, statusError]);

  return (
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
                  blog?.status === "active" ? "badge-success" : "badge-warning"
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
        <Link
          to={`/blogs/${blog?._id}`}
          className="badge badge-ghost cursor-pointer"
        >
          <BsEye />
        </Link>
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
  );
};

export default BlogRow;
