import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useQuery } from "react-query";
import GlobalLoader from "../../components/GlobalLoader";
import NoDataComponent from "../../components/NoDataComponent";
import { base_backend_url } from "../../configs/config";
import BlogCard from "./BlogCard";

type Props = {};

const Blogs = (props: Props) => {
  const [categories, setCategories] = useState([]);
  /* Get All the active blogs */
  const { data, isLoading } = useQuery("blogs", async () => {
    const { data } = await axios.get(`${base_backend_url}/api/v1/blogs/all`);

    return data;
  });

  useEffect(() => {
    const categories = data?.data?.map((blog: any) => blog?.category);

    console.log(categories);

    setCategories([]);
  }, [data]);

  console.log(data);

  return (
    <section className="font-poppins">
      <div className="container mx-auto py-10">
        <div className="blogs-header text-center mb-10">
          <h3 className="text-2xl font-bold">Reading Blog</h3>
          {/* Search */}
          <div className="search-area justify-center flex items-center my-10 bg-white sm:w-1/2 mx-auto px-6 py-3 rounded-full shadow">
            <div className="icon">
              <BsSearch />
            </div>
            <input
              type="search"
              placeholder="Search Blogs By Name or Category"
              className="w-full p-2 pl-4 outline-none"
            />
          </div>

          {/* Tabs */}
          <ul className="flex items-center gap-6 justify-center flex-wrap">
            <li className="p-4 shadow rounded-md cursor-pointer bg-success">
              Programming <span className="badge badge-ghost">5</span>
            </li>
            <li className="p-4 bg-white shadow rounded-md cursor-pointer">
              Cinema <span className="badge">5</span>
            </li>
            <li className="p-4 bg-white shadow rounded-md cursor-pointer">
              Comic <span className="badge">5</span>
            </li>
          </ul>
        </div>

        <div className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            {isLoading ? (
              <GlobalLoader />
            ) : (
              <div>
                {data?.data?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -m-4">
                    {data?.data?.map((blog: any, ind: number) => (
                      <BlogCard key={blog?._id} blog={blog} />
                    ))}
                  </div>
                ) : (
                  <div>
                    <NoDataComponent />
                  </div>
                )}
              </div>
            )}

            {/* FAQ Question */}
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                    Raw Denim Heirloom Man Braid
                  </h1>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine, ramps
                    microdosing banh mi pug.
                  </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                        Authentic Cliche Forage
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                        Kinfolk Chips Snackwave
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                        Coloring Book Ethical
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                        Typewriter Polaroid Cray
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                        Pack Truffaut Blue
                      </span>
                    </div>
                  </div>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                        The Catcher In The Rye
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
