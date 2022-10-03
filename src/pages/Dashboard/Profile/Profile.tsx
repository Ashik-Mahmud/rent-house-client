import formatDistance from "date-fns/formatDistance";
import { BiCamera } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
type Props = {};

const Profile = (props: Props) => {
  const dateDistance = formatDistance(
    new Date(),
    new Date("Mon Oct 03 2022 15:21:46"),
    {
      addSuffix: true,
    }
  );

  return (
    <div>
      <div className="profile p-5 my-5 bg-white">
        <h2 className="text-2xl font-bold">
          <span className="text-success">Ashik Mahmud's</span> Profile{" "}
        </h2>
        <div className="profile-content py-10">
          <div className="flex items-center justify-between">
            <div className="profile-image rounded-full  w-32 h-32 relative  ">
              <img
                src={
                  "https://assets.webiconspng.com/uploads/2016/11/avatar_business_costume_male_man_office_user_icon_403022.png"
                }
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-success object-cover shadow-lg"
              />
              <div className="profile-image-edit absolute right-0 bottom-5 text-lg cursor-pointer w-8 h-8 rounded-full grid place-items-center shadow bg-success text-white ">
                <BiCamera />
              </div>
            </div>
            <div className="social-links">
              <ul className="flex justify-center items-center gap-5 py-5">
                <li className="tooltip" data-tip="Facebook">
                  <a
                    href="/"
                    className="btn-sm text-lg btn-circle btn-ghost btn btn-outline"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li className="tooltip" data-tip="Twitter">
                  <a
                    href="/"
                    className="btn-sm text-lg btn-circle btn-ghost btn btn-outline"
                  >
                    <BsTwitter />
                  </a>
                </li>
                <li className="tooltip" data-tip="Instagram">
                  <a
                    href="/"
                    className="btn-sm text-lg btn-circle btn-ghost btn btn-outline"
                  >
                    <BsInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-details py-5 font-poppins">
            <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
              <span className="profile-details-item-label">Name</span>
              <span className="profile-details-item-value font-bold">
                John Doe
              </span>
            </div>
            <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
              <span className="profile-details-item-label">Email</span>
              <span className="profile-details-item-value font-bold">
                ashik@gmail.com
              </span>
            </div>
            <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
              <span className="profile-details-item-label">Phone</span>
              <span className="profile-details-item-value font-bold">
                +880 123456789
              </span>
            </div>
            <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
              <span className="profile-details-item-label">Address</span>
              <span className="profile-details-item-value font-bold">
                123, ABC Road, XYZ, Bangladesh
              </span>
            </div>
            <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
              <span className="profile-details-item-label">Joined Date</span>
              <span className="profile-details-item-value font-bold">
                {dateDistance}
              </span>
            </div>
            <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
              <span className="profile-details-item-label">Role</span>
              <span className="profile-details-item-value font-bold">
                Admin
              </span>
            </div>
            <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
              <span className="profile-details-item-label">Status</span>
              <span className="profile-details-item-value font-bold">
                Active
              </span>
            </div>
            <div className="profile-details-item flex items-center justify-between text-lg">
              <span className="profile-details-item-label">Last Login</span>
              <span className="profile-details-item-value font-bold">
                03 Oct 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
