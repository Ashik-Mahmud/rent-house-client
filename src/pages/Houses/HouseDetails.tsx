import { BiMap, BiUser, BiUserCheck } from "react-icons/bi";
import {
  BsArrowLeft,
  BsEnvelopeOpen,
  BsFacebook,
  BsFillSuitHeartFill,
  BsInstagram,
  BsMapFill,
  BsPhoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FiMaximize2 } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdOutlineOtherHouses } from "react-icons/md";

type Props = {};

const HouseDetails = (props: Props) => {
  /* Get House ID */

  return (
    <section>
      <div className="container mx-auto py-10 ">
        <div className="cards">
          <div className="card-header flex items-center justify-between my-5 bg-white p-4 ">
            <div className="left flex items-center gap-4">
              <div
                className="back text-3xl cursor-pointer tooltip"
                data-tip="Backward"
              >
                <BsArrowLeft />{" "}
              </div>
              <h2 className="text-2xl font-bold">Rajbari New Villa</h2>
            </div>
            <div className="flex items-center gap-2">
              <BiMap /> Rajbari, Rangpur
            </div>
          </div>
          <div className="card-bodies w-full relative">
            {/* Images */}
            <div className="preview-image w-full p-5 bg-white">
              <div className="maximize w-10 h-10 grid place-items-center bg-white absolute right-10 top-10 cursor-pointer">
                <FiMaximize2 />
              </div>
              <img
                src="https://placeimg.com/400/225/arch"
                alt="previewImage"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* House Details */}
            <div className="house-details my-5 bg-white p-10">
              {/* Details */}
              <div className="details">
                <div className="title mb-6">
                  <h3 className="text-2xl font-bold mt-3">Details</h3>
                  <span className="w-10 h-1 bg-success block"></span>
                </div>
                <div className="table">
                  <tbody>
                    <tr>
                      <td className="flex items-center gap-2">
                        <GoHome /> Price
                      </td>
                      <th>
                        <span className="badge badge-ghost">12000/m </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <GoHome /> House Type
                      </td>
                      <th>
                        <span className="badge badge-ghost">Rent </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <GoHome /> Category
                      </td>
                      <th>
                        <span className="badge badge-ghost">Duplex </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <GoHome /> House Use For
                      </td>
                      <th>
                        <span className="badge badge-ghost">Residential</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <GoHome /> Bedrooms
                      </td>
                      <th>
                        <span className="badge badge-ghost">4 pcs</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <GoHome /> Bathrooms
                      </td>
                      <th>
                        <span className="badge badge-ghost">2 pcs</span>
                      </th>
                    </tr>
                  </tbody>
                </div>
              </div>
              {/* End */}
              <div className="desc">
                <div className="title mb-6">
                  <h3 className="text-2xl font-bold mt-3">Description</h3>
                  <span className="w-10 h-1 bg-success block"></span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  ullam iste aperiam, optio quos doloremque incidunt consequatur
                  odit nemo magni et molestiae. In accusantium voluptatibus quos
                  hic voluptas. Aperiam vitae ex, illo qui eaque sint veritatis
                  asperiores est natus harum eum aspernatur, quos delectus sit
                  accusamus iure ipsum ratione laboriosam quibusdam voluptatum
                  voluptatibus ipsa blanditiis. Beatae cum repellat consequatur.
                  Eos exercitationem in porro laudantium deserunt corporis
                  consequuntur tempore nobis quibusdam quas harum assumenda
                  labore iste asperiores, magnam iure sapiente, expedita,
                  doloremque quae. Aperiam at maiores, vel asperiores cumque
                  ullam labore perspiciatis repudiandae repellendus accusantium
                  esse dolor possimus veritatis a vitae, fugiat ipsum beatae
                  modi nam officiis sint natus iste corporis? Quo ea aliquid,
                  tempore recusandae vero perferendis voluptates incidunt iusto
                  quae distinctio nostrum eius reiciendis dolor illo ipsam
                  provident commodi maiores aspernatur velit itaque, dolores
                  iste. Velit amet dolor atque vero quos? Amet eum ad asperiores
                  numquam vero. Aliquam libero velit iusto esse sit commodi
                  consequatur veniam placeat quis doloribus, officia officiis,
                  nulla molestias mollitia, maiores quidem. Ullam laudantium
                  explicabo similique iusto doloremque consequuntur tenetur,
                  omnis modi placeat quam fuga architecto atque ratione
                  voluptate repellendus voluptatum. Atque animi nostrum minima
                  aspernatur est iste magnam commodi quae corporis perspiciatis?
                  Expedita, ab.
                </p>
              </div>
            </div>
            {/* Address */}
            <div className="address my-3 bg-white p-5">
              <div className="title mb-6">
                <h3 className="text-2xl font-bold mt-3">Address</h3>
                <span className="w-10 h-1 bg-success block"></span>
              </div>
              <div className="address-content">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="flex items-center gap-2">
                        <BiMap /> District
                      </td>
                      <th>
                        <span className="badge badge-ghost">Gaibandha </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <BiMap /> City
                      </td>
                      <th>
                        <span className="badge badge-ghost">
                          Rangpur, Bangladesh{" "}
                        </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <BsMapFill /> Google Map
                      </td>
                      <th>
                        <span className="badge badge-ghost">
                          {" "}
                          <a href="https//maps.google.com">Go to Map</a>{" "}
                        </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <BsFillSuitHeartFill /> Total Love
                      </td>
                      <th>
                        <span className="badge badge-ghost">1200</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <BiUserCheck /> Total Views
                      </td>
                      <th>
                        <span className="badge badge-ghost">1400</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <GoHome /> Positive Review
                      </td>
                      <th>
                        <span className="badge badge-ghost">98%</span>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Others */}
            <div className="address my-3 bg-white p-5">
              <div className="title mb-6">
                <h3 className="text-2xl font-bold mt-3">Others</h3>
                <span className="w-10 h-1 bg-success block"></span>
              </div>
              <div className="address-content">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Drawing Room
                      </td>
                      <th>
                        <span className="badge badge-ghost">Yes </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Dining Room
                      </td>
                      <th>
                        <span className="badge badge-ghost">Yes</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Kitchen
                      </td>
                      <th>
                        <span className="badge badge-ghost"> N/A</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Store Room
                      </td>
                      <th>
                        <span className="badge badge-ghost">N/A</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Servant Room
                      </td>
                      <th>
                        <span className="badge badge-ghost">N/A</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Swiming Pool
                      </td>
                      <th>
                        <span className="badge badge-ghost">N/A</span>
                      </th>
                    </tr>
                  </tbody>
                </table>
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Gym
                      </td>
                      <th>
                        <span className="badge badge-ghost">N/A </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Lawn
                      </td>
                      <th>
                        <span className="badge badge-ghost">N/A</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Garage
                      </td>
                      <th>
                        <span className="badge badge-ghost"> N/A</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Lift
                      </td>
                      <th>
                        <span className="badge badge-ghost">N/A</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses /> Generator
                      </td>
                      <th>
                        <span className="badge badge-ghost">N/A</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses />
                        Security
                      </td>
                      <th>
                        <span className="badge badge-ghost">Yes</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses />
                        Internet
                      </td>
                      <th>
                        <span className="badge badge-ghost">Yes</span>
                      </th>
                      <td className="flex items-center gap-2">
                        <MdOutlineOtherHouses />
                        CCTV
                      </td>
                      <th>
                        <span className="badge badge-ghost">Yes</span>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* 
     
     
    
    
     
            {/* Owner Information */}
            <div className="owner-info bg-white p-10 mb-4">
              <div className="title mb-6">
                <h3 className="text-2xl font-bold mt-3">Owners</h3>
                <span className="w-10 h-1 bg-success block"></span>
              </div>
              <div className="owner-content">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="flex items-center gap-2">
                        <BiUser /> Name
                      </td>
                      <th>
                        <span className="badge badge-ghost">Ashik Mahmud </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <BsEnvelopeOpen /> Email
                      </td>
                      <th>
                        <span className="badge badge-ghost">
                          ashik@gmail.com
                        </span>
                      </th>
                      <td className="flex items-center gap-2">
                        <BsPhoneFill /> Phone
                      </td>
                      <th>
                        <span className="badge badge-ghost">
                          +8801464445488
                        </span>
                      </th>
                    </tr>

                    <tr>
                      <td className="flex items-center gap-2">
                        <GoHome />
                        Social Media
                      </td>
                      <th>
                        <div className="flex items-center gap-4">
                          <a href="/" className="text-xl">
                            <BsFacebook />
                          </a>
                          <a href="/" className="text-xl">
                            <BsTwitter />
                          </a>
                          <a href="/" className="text-xl">
                            <BsInstagram />
                          </a>
                          <a href="/" className="text-xl">
                            <BsYoutube />
                          </a>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className="flex items-center gap-2">
                        <BiUserCheck /> Avatars
                      </td>
                      <th>
                        <span className="badge badge-ghost">
                          <div className="avatar online">
                            <div className="w-10 rounded-full">
                              <img
                                src="https://placeimg.com/192/192/people"
                                alt=""
                              />
                            </div>
                          </div>
                        </span>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gallery */}
            <div className="gallery bg-white p-10">
              <div className="title mb-6">
                <h3 className="text-2xl font-bold mt-3">Galleries</h3>
                <span className="w-10 h-1 bg-success block"></span>
              </div>
              <div className="images">
                <ul className="flex gap-1 items-center">
                  <li className="cursor-pointer">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      className="h-60"
                      alt=""
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      className="h-60"
                      alt=""
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      className="h-60"
                      alt=""
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      className="h-60"
                      alt=""
                    />
                  </li>
                  <li className="cursor-pointer">
                    <img
                      src="https://placeimg.com/400/225/arch"
                      className="h-60"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseDetails;
