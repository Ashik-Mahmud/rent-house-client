import { BiUser, BiUserCheck } from "react-icons/bi";
import {
  BsEnvelopeOpen,
  BsFacebook,
  BsInstagram,
  BsPhoneFill,
  BsTwitter,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {
  owner: any;
};

const Owner = ({ owner }: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});

  return (
    <div>
      {" "}
      {/* Owner Information */}
      <div className="owner-info bg-white p-10 mb-4">
        <div className="title mb-6">
          <h3 className="text-2xl font-bold mt-3">Owners</h3>
          <span className="w-10 h-1 bg-success block"></span>
        </div>
        <div className="owner-content overflow-x-auto">
          {updatedUser?.role === "admin" ||
          updatedUser?.role === "manager" ||
          updatedUser?._id === owner?._id ? (
            <table className="table">
              <tbody>
                <tr>
                  <td className="flex items-center gap-2">
                    <BiUser /> Name
                  </td>
                  <th>
                    <span className="badge badge-ghost"> {owner?.name} </span>
                  </th>
                  <td className="flex items-center gap-2">
                    <BsEnvelopeOpen /> Email
                  </td>
                  <th>
                    <span className="badge badge-ghost">{owner?.email}</span>
                  </th>
                  <td className="flex items-center gap-2">
                    <BsPhoneFill /> Phone
                  </td>
                  <th>
                    <span className="badge badge-ghost">+{owner?.phone}</span>
                  </th>
                </tr>

                <tr>
                  <td className="flex items-center gap-2">
                    <GoHome />
                    Social Media
                  </td>
                  <th>
                    <div className="flex items-center gap-4">
                      {owner?.facebookLink && (
                        <a
                          href={owner?.facebookLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xl"
                        >
                          <BsFacebook />
                        </a>
                      )}
                      {owner?.twitterLink && (
                        <a
                          href={owner?.twitterLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xl"
                        >
                          <BsTwitter />
                        </a>
                      )}{" "}
                      {owner?.instagramLink && (
                        <a
                          href={owner?.instagramLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xl"
                        >
                          <BsInstagram />
                        </a>
                      )}
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
                            src={
                              owner?.profileImage
                                ? "http://localhost:5000/profiles/" +
                                  owner?.profileImage
                                : owner?.avatar
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="py-10 text-center text-2xl">
              <p className="">You should get booked a house to get this info</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Owner;
