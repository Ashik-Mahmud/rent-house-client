import { format } from "date-fns";
import formatDistance from "date-fns/formatDistance";
import {
  browserName,
  fullBrowserVersion,
  osName,
  osVersion,
} from "react-device-detect";
import { BiCamera, BiEdit } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import ImageChangeModal from "./ImageChangeModal";
import ProfileModal from "./ProfileModal";
type Props = {};

const Profile = (props: Props) => {
  const {
    user,
    updatedUser: data,
    refetch,
  } = useAuth<authUserInterface | any>({});

  const dateDistance = formatDistance(
    new Date(),
    new Date(user?.user?.createdAt),
    {
      addSuffix: true,
    }
  );

  /* Last Login  */
  const result = format(new Date(user?.user?.updatedAt), "PPPP BBBB ppp");

  return (
    <>
      <div>
        <div className="profile p-5 my-5 bg-white">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">
              <span className="text-success">
                {data?.name || "No Available"}'s
              </span>{" "}
              Profile{" "}
            </h2>
            <small className="badge badge-success">all</small>
          </div>
          <div className="profile-content py-10">
            <div className="flex items-center justify-between">
              <div className="profile-image rounded-full  w-32 h-32 relative  ">
                <img
                  src={
                    data?.profileImage
                      ? "http://localhost:5000/profiles/" + data?.profileImage
                      : data?.avatar
                  }
                  alt={data?.name}
                  className="w-32 h-32 rounded-full border-4 border-success object-cover shadow-lg"
                />
                <label
                  htmlFor="profile-image-edit-modal"
                  className="profile-image-edit absolute right-0 bottom-5 text-lg cursor-pointer w-8 h-8 rounded-full grid place-items-center shadow bg-success text-white "
                >
                  <BiCamera />
                </label>
              </div>
              <div className="social-links">
                <ul className="flex justify-center items-center gap-5 py-5">
                  {data?.facebookLink && (
                    <li className="tooltip" data-tip="Facebook">
                      <a
                        href={data?.facebookLink}
                        target="_blank"
                        className="btn-sm text-lg btn-circle btn-ghost btn btn-outline"
                        rel="noreferrer"
                      >
                        <BsFacebook />
                      </a>
                    </li>
                  )}
                  {data?.twitterLink && (
                    <li className="tooltip" data-tip="Twitter">
                      <a
                        href={data?.twitterLink}
                        target="_blank"
                        className="btn-sm text-lg btn-circle btn-ghost btn btn-outline"
                        rel="noreferrer"
                      >
                        <BsTwitter />
                      </a>
                    </li>
                  )}
                  {data?.instagramLink && (
                    <li className="tooltip" data-tip="Instagram">
                      <a
                        href={data?.instagramLink}
                        target="_blank"
                        className="btn-sm text-lg btn-circle btn-ghost btn btn-outline"
                        rel="noreferrer"
                      >
                        <BsInstagram />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="profile-details py-5 font-poppins">
              <label
                htmlFor="profile-edit-modal"
                className="edit-btn cursor-pointer my-4  text-2xl  grid place-items-end"
              >
                <div className="tooltip" data-tip="Edit Profile">
                  <BiEdit />
                </div>
              </label>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Verified</span>
                <span className="profile-details-item-value ">
                  {data?.isVerified ? (
                    <span className="badge badge-success">Verified</span>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <span className="badge badge-warning">
                          Not Verified
                        </span>
                        <span className="text-sm block text-error">
                          Please Check your Email to get verified.
                        </span>
                      </div>
                    </>
                  )}
                </span>
              </div>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Name</span>
                <span className="profile-details-item-value font-bold">
                  {data?.name || "No Available"}
                </span>
              </div>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Email</span>
                <span className="profile-details-item-value font-bold">
                  {data?.email || "No Available"}
                </span>
              </div>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Phone</span>
                <span className="profile-details-item-value font-bold">
                  {data?.phone || "No Available"}
                </span>
              </div>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Address</span>
                <span className="profile-details-item-value font-bold">
                  {data?.address || "No Available"}
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
                  <span className="badge badge-outline">
                    {data?.role === "user"
                      ? "House Holder"
                      : data?.role || "No Available"}
                  </span>
                </span>
              </div>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Status</span>
                <span className="profile-details-item-value font-bold">
                  <span className="badge badge-info">Active</span>
                </span>
              </div>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Last Login</span>
                <span className="profile-details-item-value font-bold">
                  <span className="badge badge-ghost">{result}</span>
                </span>
              </div>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Used Browser</span>
                <span className="profile-details-item-value font-bold">
                  <span className="badge badge-secondary">
                    {" "}
                    {browserName} {fullBrowserVersion}{" "}
                  </span>
                </span>
              </div>
              <div className="profile-details-item flex items-center justify-between text-lg mb-2 border-b pb-2">
                <span className="profile-details-item-label">Used Device</span>
                <span className="profile-details-item-value font-bold">
                  <span className="badge badge-success">
                    {osName} {osVersion}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProfileModal refetch={refetch} />
      <ImageChangeModal />
    </>
  );
};

export default Profile;
