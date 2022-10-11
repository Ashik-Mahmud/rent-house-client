import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiBook, BiLink } from "react-icons/bi";
import { useParams } from "react-router-dom";
import GlobalLoader from "../../../../components/GlobalLoader";
import { useGetBlogByIdQuery } from "../../../../services/BlogApi";
import BlogEditor from "./BlogEditor";
type Props = {};

const UpdateBlogs = (props: Props) => {
  const { id } = useParams();
  const [blogText, setBlogText] = useState<string>("");
  const { data, isLoading, error } = useGetBlogByIdQuery(id);
  const [isYes, setIsYes] = useState<boolean>(false);
  const updateData = data?.data;
  const { register, handleSubmit, setValue } = useForm();

  /* Handle Update Blog */
  const handleUpdateBlog = handleSubmit(async (formData) => {
    console.log(formData, blogText);
  });

  useEffect(() => {
    setIsYes(true);
    /* Set Default value for Blog */
    setValue("title", updateData?.title);
    setValue("category", updateData?.category);
    setValue("imageUrl", updateData?.imageUrl);

    if (error) {
      console.log(error);
    }
  }, [data, error, updateData, setValue]);

  /* For Loading.... */
  if (isLoading) {
    return <GlobalLoader />;
  }

  console.log(isYes);
  return (
    <div>
      <form onSubmit={handleUpdateBlog} className="p-4 my-4 bg-white">
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
            <div className="my-1 rounded-md mt-6">
              <BlogEditor
                setBlogText={setBlogText}
                isYes={isYes}
                updateBlogText={updateData?.description}
              />
            </div>
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
