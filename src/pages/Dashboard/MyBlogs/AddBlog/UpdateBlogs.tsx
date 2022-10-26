import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiBook, BiLink } from "react-icons/bi";
import { BsCheck2, BsX } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import GlobalLoader from "../../../../components/GlobalLoader";
import {
  useGetBlogByIdQuery,
  useUpdateBlogByIdMutation,
} from "../../../../services/BlogApi";
import BlogEditor from "./BlogEditor";
type Props = {};

const UpdateBlogs = (props: Props) => {
  const { id } = useParams();
  const [seeBlogContent, setSeeBlogContent] = useState<boolean>(false);
  const [blogText, setBlogText] = useState<string>("");
  const { data, isLoading, error, refetch } = useGetBlogByIdQuery(id);
  const [isYes, setIsYes] = useState<boolean>(false);
  const updateData = data?.data;
  const { register, handleSubmit, setValue } = useForm();

  const [updateBlog, { data: blogData, isSuccess, error: blogError }] =
    useUpdateBlogByIdMutation();

  const navigate = useNavigate();

  /* Handle Update Blog */
  const handleUpdateBlog = handleSubmit(async (formData) => {
    const editedContent = { ...formData };
    if (blogText) {
      editedContent.description = blogText;
    } else {
      editedContent.description = updateData?.description;
    }

    await updateBlog({ ...editedContent, _id: id }).unwrap();
    refetch();
  });

  useEffect(() => {
    setIsYes(true);
    /* Set Default value for Blog */
    setValue("excerpt", updateData?.excerpt);
    setValue("title", updateData?.title);
    setValue("category", updateData?.category);
    setValue("imageUrl", updateData?.imageUrl);
    if (error) {
      console.log(error);
    }
    if (blogError) {
      console.log(blogError);
    }
    if (isSuccess) {
      toast.success(`Blog  Updated Successfully!`);
      navigate("/dashboard/blogs/users-blogs");
    }
  }, [
    data,
    error,
    updateData,
    setValue,
    blogError,
    isSuccess,
    blogData,
    navigate,
  ]);

  /* For Loading.... */
  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div>
      <form
        onSubmit={handleUpdateBlog}
        className="p-4 my-4 bg-white font-bangla"
      >
        <h1 className="text-3xl font-bold">Update Blog</h1>
        <div className="mt-5">
          {/* Name */}
          <div className="name border  rounded p-3 relative mt-10 flex-1">
            <div className="name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Put Blog Title</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <div className="icon">
                <BiBook />
              </div>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="Blog Title"
                {...register("title")}
              />
            </div>
          </div>
          {/* End */}
          {/* category */}
          <div className="name border  rounded p-3 relative mt-10 flex-1">
            <div className="name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Category</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <div className="icon">
                <BiBook />
              </div>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="Category"
                {...register("category")}
              />
            </div>
          </div>
          {/* End */}
          {/* url */}
          <div className="name border  rounded p-3 relative mt-10 flex-1">
            <div className="name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Image URL</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <div className="icon">
                <BiLink />
              </div>
              <input
                type="url"
                className="form-control outline-none pl-4 w-full"
                placeholder="Image URL"
                {...register("imageUrl")}
              />
            </div>
          </div>
          {/* End */}
          {/* excerpt */}
          <div className="name border  rounded p-3 relative mt-10 flex-1">
            <div className="name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Excerpt</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <div className="icon">
                <BiBook />
              </div>
              <textarea
                {...register("excerpt")}
                cols={5}
                rows={3}
                className="textarea textarea-bordered w-full"
                placeholder="Put Excerpt in 200 chars."
              ></textarea>
            </div>
          </div>
          {/* End */}
          {/* Blog Content */}
          <div
            className="name border  rounded p-3 pb-1 relative mt-10 flex-1"
            style={{ height: 350 }}
          >
            <div className="name-title absolute -top-4 bg-white rounded p-1">
              <h3 className="text-xs font-poppins flex items-center gap-1 border p-1 rounded">
                Write Blogs
              </h3>
            </div>
            {seeBlogContent ? (
              <div className="my-1 rounded-md mt-6 relative">
                <button
                  className="btn btn-circle btn-error btn-sm absolute right-0 -top-9 text-xl "
                  title="Cancel"
                  onClick={() => setSeeBlogContent(false)}
                >
                  <BsX />
                </button>
                <BlogEditor
                  setBlogText={setBlogText}
                  isYes={isYes}
                  updateBlogText={updateData?.description}
                />
              </div>
            ) : (
              <div className="text-center grid place-items-center h-[320px] font-poppins">
                <div className="flex flex-col items-center">
                  <span className="text-2xl">
                    Are you want to replace your blog content as per TERMS?
                  </span>
                  <button
                    onClick={() => setSeeBlogContent(true)}
                    className="font-poppins btn btn-success btn-circle mt-4 text-2xl "
                    title="Edit Blogs"
                  >
                    <BsCheck2 />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* End */}
          <div className="flex justify-end mt-5">
            <button className="btn btn-primary rounded-none">
              Update Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlogs;
