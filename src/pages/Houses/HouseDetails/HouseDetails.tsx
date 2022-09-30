import { BiMap } from "react-icons/bi";
import { BsArrowLeft, BsHeartFill } from "react-icons/bs";
import { FiMaximize2 } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdReportGmailerrorred } from "react-icons/md";
import Address from "./Address";
import BookNow from "./BookNowModal";
import Gallery from "./Gallery";
import Others from "./Others";
import Owner from "./Owner";
import Question from "./Question";
import QuestionModal from "./QuestionModal";
import ReviewModal from "./ReviewModal";
import Reviews from "./Reviews";

/* Question Modal */

type Props = {};

const HouseDetails = (props: Props) => {
  /* Get House ID */

  return (
    <>
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
                <div
                  className="report tooltip flex items-center gap-2 btn btn-ghost"
                  data-tip="Report House"
                >
                  <MdReportGmailerrorred /> Report
                </div>
                <div
                  className="heart tooltip flex items-center gap-2 btn btn-ghost"
                  data-tip="Loved House"
                >
                  <BsHeartFill /> Love
                </div>
                <div className="flex items-center gap-2">
                  <BiMap /> Rajbari, Rangpur
                </div>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam ullam iste aperiam, optio quos doloremque incidunt
                    consequatur odit nemo magni et molestiae. In accusantium
                    voluptatibus quos hic voluptas. Aperiam vitae ex, illo qui
                    eaque sint veritatis asperiores est natus harum eum
                    aspernatur, quos delectus sit accusamus iure ipsum ratione
                    laboriosam quibusdam voluptatum voluptatibus ipsa
                    blanditiis. Beatae cum repellat consequatur. Eos
                    exercitationem in porro laudantium deserunt corporis
                    consequuntur tempore nobis quibusdam quas harum assumenda
                    labore iste asperiores, magnam iure sapiente, expedita,
                    doloremque quae. Aperiam at maiores, vel asperiores cumque
                    ullam labore perspiciatis repudiandae repellendus
                    accusantium esse dolor possimus veritatis a vitae, fugiat
                    ipsum beatae modi nam officiis sint natus iste corporis? Quo
                    ea aliquid, tempore recusandae vero perferendis voluptates
                    incidunt iusto quae distinctio nostrum eius reiciendis dolor
                    illo ipsam provident commodi maiores aspernatur velit
                    itaque, dolores iste. Velit amet dolor atque vero quos? Amet
                    eum ad asperiores numquam vero. Aliquam libero velit iusto
                    esse sit commodi consequatur veniam placeat quis doloribus,
                    officia officiis, nulla molestias mollitia, maiores quidem.
                    Ullam laudantium explicabo similique iusto doloremque
                    consequuntur tenetur, omnis modi placeat quam fuga
                    architecto atque ratione voluptate repellendus voluptatum.
                    Atque animi nostrum minima aspernatur est iste magnam
                    commodi quae corporis perspiciatis? Expedita, ab.
                  </p>
                </div>
              </div>

              <Address />
              <Owner />
              <Others />
              <Gallery />
              <Question />
              <Reviews />
            </div>
          </div>
        </div>
        <div className="book-now text-center mb-8">
          <label
            htmlFor="book-now-modal"
            className="btn btn-lg btn-success modal-button"
          >
            Book Now
          </label>
        </div>
      </section>

      {/* Modals */}
      <BookNow />
      <QuestionModal />
      <ReviewModal />
    </>
  );
};

export default HouseDetails;
