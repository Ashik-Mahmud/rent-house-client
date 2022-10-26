import { BsFacebook, BsLink, BsLinkedin, BsTwitter } from "react-icons/bs";
import styled from "styled-components";

type Props = {};

const BlogsDetails = (props: Props) => {
  return (
    <BlogsDetailsContainer className="p-10 sm:p-12 sm:px-96 font-poppins">
      <div className="container mx-auto bg-white p-5">
        <div className="image">
          <img
            src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1666736516847.png"
            className="w-full h-96 object-cover rounded-md"
            alt="previewImage"
          />
        </div>
        <div className="meta-title m-10">
          <div>
            <h2 className="text-3xl font-bold">
              ওয়েব ডেভলপমেন্ট – কম্পিলিট গাইড লাইন
            </h2>
            <div className="mt-4 ">
              Category/
              <span className="font-bold">Programming</span>
            </div>
          </div>
          <div className="meta flex items-center justify-between mt-10">
            <div className="author">
              <h3 className="text-xl font-bold">Ashik Mahmud</h3>
              <span>27 Oct, 2022 at 10:30 AM</span>
            </div>
            <div className="social-share">
              <ul className=" flex items-center gap-3">
                <li>
                  <BsFacebook />
                </li>
                <li>
                  <BsTwitter />
                </li>
                <li>
                  <BsLinkedin />
                </li>
                <li>
                  <BsLink />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="details m-10 leading-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          corrupti aut commodi asperiores suscipit tenetur officiis earum
          perspiciatis repellat alias deleniti, itaque doloribus nisi mollitia
          quidem! Non praesentium, explicabo laudantium consequatur vel mollitia
          commodi neque? Velit deleniti recusandae possimus nostrum quam aut
          sunt exercitationem nemo blanditiis? Similique, voluptatem natus?
          Tempore veniam natus sunt eveniet distinctio at iure dignissimos fuga
          vero, reprehenderit vitae earum cum maxime tempora architecto, magnam
          debitis voluptates ratione tenetur. Iure placeat nostrum quasi dolor
          neque eligendi consequatur! Sint recusandae quod nisi explicabo
          cumque, maxime tempore libero in iste provident vero harum, voluptate
          tenetur veritatis illum. Dolore corrupti ipsam dignissimos eius, autem
          veniam corporis consequatur obcaecati officia nemo explicabo!
          Distinctio odio voluptatem ratione tempora recusandae, voluptas <br />
          <br />
          asperiores, iste veritatis atque tempore, eaque iure possimus.
          Accusantium consequatur ipsa fugit incidunt aut, esse earum, maiores
          nihil enim commodi natus nostrum blanditiis. Dicta necessitatibus,
          porro voluptatum est fugit rem illum, blanditiis aut perferendis
          accusamus unde neque nam expedita voluptatem doloribus deleniti in!
          Architecto, veritatis aliquam laudantium culpa voluptatibus
          perspiciatis cumque sunt consequuntur iste maiores autem alias ipsum
          expedita sint reprehenderit et temporibus odio suscipit facilis, quo
          ratione at veniam ea voluptate? Sunt quaerat culpa unde, tempore fuga
          nobis, maiores a quam quidem doloribus accusamus quo ipsam explicabo
          temporibus blanditiis in vitae, magnam repellat nesciunt. Praesentium
          deserunt laboriosam maxime voluptate accusamus quidem placeat eius
          cupiditate veniam in mollitia, amet vel commodi ad voluptas rem
          reprehenderit minima possimus labore obcaecati velit provident aliquid{" "}
          <br />
          <br />
          quae ea. Inventore atque repudiandae ut quasi consequatur dolores
          eveniet dolore voluptas ipsa fuga, sunt maxime, error illum rerum id
          quae explicabo nesciunt. Consequuntur repudiandae quasi ratione animi
          nulla hic deleniti officia cum similique? Sit numquam expedita velit
          facere ut? Voluptate natus, quod assumenda temporibus cumque molestias
          magnam optio illo corporis fugit consequatur praesentium eius non sunt
          ex recusandae dolorum nemo. Rem hic dignissimos quos beatae neque
          placeat, reiciendis laborum ipsam consectetur aperiam laudantium illum
          numquam debitis similique distinctio magnam assumenda quisquam
          voluptatem consequuntur fugiat quaerat quam cum pariatur deserunt.
          Animi sunt harum rerum nulla. Sed ducimus non expedita consequuntur,
          vel ipsum. Reprehenderit soluta molestias minima labore vitae vero vel
          cupiditate recusandae? Placeat obcaecati quibusdam, numquam nulla
          voluptatem at, neque ipsum vitae minima commodi voluptas velit rem
          accusantium. Quisquam ratione reiciendis, ea, cum sunt minus molestiae
          temporibus earum dolore hic, ipsam distinctio iste? Nesciunt alias
          omnis non eligendi beatae. Quos quo quas reiciendis modi voluptatem
          asperiores, impedit aspernatur ex.
        </div>

        <div className="text-center flex items-center justify-between  bg-gray-50 rounded-lg">
          <div className="flex items-center gap-0">
            <div
              className={`loves-to-the-blog loved-blog`}
              title={"Dislike Like"}
            ></div>
            <span className="font-bold text-xl text-red-500">1.5k Likes</span>
          </div>
          <div>
            <form
              action=""
              className="input-group rounded-full overflow-hidden shadow"
            >
              <input
                type="email"
                placeholder="Get Update for blogs"
                className="input sm:w-72 rounded-full px-7 font-sm"
              />
              <button className="btn btn-success rounded-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </BlogsDetailsContainer>
  );
};

const BlogsDetailsContainer = styled.div`
  .loves-to-the-blog {
    position: relative;
    width: 100px;
    height: 100px;
    background: url(https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png)
      no-repeat;
    cursor: pointer;
    display: inline-block;
  }
  .loved-blog {
    background-position: -2799px 0px;
    transition: background 1s steps(28);
  }
`;
export default BlogsDetails;
