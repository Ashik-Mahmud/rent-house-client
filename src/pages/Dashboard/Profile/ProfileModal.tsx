import {
  BiEnvelope,
  BiMailSend,
  BiPhoneIncoming,
  BiUser,
} from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import SendVerifyEmail from "../../../components/SendVerifyEmail";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {};

const ProfileModal = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const isVerify = updatedUser?.isVerified;
  return (
    <div>
      <input type="checkbox" id="profile-edit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Edit Profile Information's</h3>
          {isVerify ? (
            <>
              <div className="modal-body">
                {/* Name */}
                <div className="name border  rounded p-3 relative mt-10 flex-1">
                  <div className="name-title absolute -top-4 bg-white border rounded p-1">
                    <h3 className="text-xs font-poppins">Put your name</h3>
                  </div>
                  <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                    <div className="icon">
                      <BiUser />
                    </div>
                    <input
                      type="text"
                      className="form-control outline-none pl-4 w-full"
                      placeholder="Name"
                    />
                  </div>
                </div>
                {/* End */}
                <div className="flex items-stretch justify-between gap-2">
                  {/* Email */}
                  <div className="name border  rounded p-3 relative mt-10 flex-1">
                    <div className="name-title absolute -top-4 bg-white border rounded p-1">
                      <h3 className="text-xs font-poppins">Put your Email</h3>
                    </div>
                    <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                      <div className="icon">
                        <BiEnvelope />
                      </div>
                      <input
                        type="email"
                        className="form-control outline-none pl-4 w-full"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  {/* End */}
                  {/* PHone */}
                  <div className="name border  rounded p-3 relative mt-10 flex-1">
                    <div className="name-title absolute -top-4 bg-white border rounded p-1">
                      <h3 className="text-xs font-poppins">Put your Phone</h3>
                    </div>
                    <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                      <div className="icon">
                        <BiPhoneIncoming />
                      </div>
                      <input
                        type="text"
                        className="form-control outline-none pl-4 w-full"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* Password */}
                <div className="name border  rounded p-3 pb-1 relative mt-10 flex-1">
                  <div className="name-title absolute -top-4 bg-white border rounded p-1">
                    <h3 className="text-xs font-poppins flex items-center gap-3">
                      Address
                    </h3>
                  </div>
                  <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                    <div className="icon">
                      <BiMailSend />
                    </div>
                    <input
                      type="text"
                      className="form-control outline-none pl-4 w-full"
                      placeholder="Address"
                    />
                  </div>
                </div>
                {/* End */}
                {/* Card Number */}
                <div className="name border  rounded p-3 relative mt-10 flex-1">
                  <div className="name-title absolute -top-4 bg-white border rounded p-1">
                    <h3 className="text-xs font-poppins">Social Links</h3>
                  </div>
                  <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                    <div className="icon">
                      <BsFacebook />
                    </div>
                    <input
                      type="url"
                      className="form-control outline-none pl-4 w-full"
                      placeholder="Facebook URL"
                    />
                  </div>
                  <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                    <div className="icon">
                      <BsTwitter />
                    </div>
                    <input
                      type="url"
                      className="form-control outline-none pl-4 w-full"
                      placeholder="Twitter URL"
                    />
                  </div>
                  <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                    <div className="icon">
                      <BsInstagram />
                    </div>
                    <input
                      type="url"
                      className="form-control outline-none pl-4 w-full"
                      placeholder="Instagram URL"
                    />
                  </div>
                </div>
                {/* End */}
              </div>
            </>
          ) : (
            <SendVerifyEmail
              title="Verify to Update Profile"
              desc="You could'nt Update profile  If you are not verify you account"
            />
          )}
          <div className="modal-action">
            <label htmlFor="profile-edit-modal" className="btn btn-warning">
              Cancel
            </label>
            {isVerify && (
              <button className="btn btn-success">Save Profile</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
