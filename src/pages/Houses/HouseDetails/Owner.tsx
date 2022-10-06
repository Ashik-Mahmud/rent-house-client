import { BiUser, BiUserCheck } from "react-icons/bi";
import {
  BsEnvelopeOpen,
  BsFacebook,
  BsInstagram,
  BsPhoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";

type Props = {};

const Owner = (props: Props) => {
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
                  <span className="badge badge-ghost">ashik@gmail.com</span>
                </th>
                <td className="flex items-center gap-2">
                  <BsPhoneFill /> Phone
                </td>
                <th>
                  <span className="badge badge-ghost">+8801464445488</span>
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
                        <img src="https://placeimg.com/192/192/people" alt="" />
                      </div>
                    </div>
                  </span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Owner;
