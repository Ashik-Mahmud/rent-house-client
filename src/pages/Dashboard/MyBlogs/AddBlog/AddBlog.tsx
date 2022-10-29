import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiBook, BiLink } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import useAuth from "../../../../hooks/useAuth";
import useTitle from "../../../../hooks/useTitle";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import { useCreateBlogMutation } from "../../../../services/BlogApi";
import BlogEditor from "./BlogEditor";
type Props = {};

const AddBlog = (props: Props) => {
  useTitle("Add Blog");
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const [blogText, setBlogText] = useState<string>("");
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const [createBlog, { data, isSuccess, error, isLoading }] =
    useCreateBlogMutation();

  const handleAddBlog = handleSubmit(async (formData) => {
    if (
      !formData?.blogTitle ||
      !formData?.category ||
      !formData?.imageUrl ||
      !formData?.excerpt
    ) {
      return toast.error(`All fields is required.`);
    }
    if (!blogText) return toast(`Blog Content is Required.`);

    if (!formData.checked)
      return toast.error("please accept our Term and Conditions");

    try {
      await createBlog({
        title: formData.blogTitle,
        excerpt: formData?.excerpt,
        description: blogText,
        category: formData.category,
        imageUrl: formData.imageUrl,
        author: {
          name: updatedUser?.name,
          email: updatedUser?.email,
          id: updatedUser?._id,
        },
      }).unwrap();
    } catch (e) {
      throw e;
    }
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    if (isSuccess === true) {
      toast.success(`Blog Created Successfully!`);
      navigate("/dashboard/blogs/users-blogs");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, error, data]);

  return (
    <div>
      <form onSubmit={handleAddBlog} className="p-4 my-4 bg-white">
        <h1 className="text-3xl font-bold">Add Blog</h1>
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
                {...register("blogTitle")}
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
              <select
                className="form-control outline-none pl-4 w-full"
                placeholder="Category"
                {...register("category")}
              >
                <option value="">select category</option>
                <option value="General">General</option>
                <option value="Programming">Programming</option>
                <option value="Development">Development</option>
                <option value="Tech">Tech</option>
                <option value="Comic">Comic</option>
                <option value="Funny">Funny</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Science">Science</option>
                <option value="Novel">Novel</option>
                <option value="Technic">Technic</option>
                <option value="Fiction">Fiction</option>
                <option value="Knowledge">Knowledge</option>
                <option value="Random">Random</option>
                <option value="History">History</option>
                <option value="Story">Story</option>
                <option value="Others">Others</option>
              </select>
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
            style={{ height: 400 }}
          >
            <div className="name-title absolute -top-4 bg-white rounded p-1">
              <h3 className="text-xs font-poppins flex items-center gap-1 border p-1 rounded">
                Write Blogs
              </h3>
            </div>
            <div className="my-1 rounded-md mt-6">
              <BlogEditor setBlogText={setBlogText} />
            </div>
            <div className="mt-32 sm:mt-16 flex  items-center gap-3">
              <input
                type="checkbox"
                className="checkbox-primary rounded-none checkbox"
                id="checked"
                {...register("checked")}
              />{" "}
              <label
                htmlFor="checked"
                className="text-xs sm:text-md font-poppins block"
              >
                TERMS: After Adding blog you can't edit Blogs Content. If you
                want to update something in the blog content You should replace
                whole blogs content
              </label>
            </div>
          </div>
          {/* End */}
          <div className="flex justify-end mt-32 sm:mt-5 ">
            {isLoading ? (
              <button className="btn btn-primary rounded-none" type="button">
                <PulseLoader size={8} color="#fff" />
              </button>
            ) : (
              <button className="btn btn-primary rounded-none">Add Blog</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
