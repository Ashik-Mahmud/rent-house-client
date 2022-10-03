import { BiLockAlt } from "react-icons/bi";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div>
      <div className="p-5 my-4 bg-white font-poppins">
        <h3 className="text-2xl font-bold">Settings</h3>

        <div className="settings-content">
          <div className="req-for-blog flex items-center justify-between my-8 bg-base-200 p-5 rounded-lg">
            <h3 className="text-xl font-bold">
              If you want to get Blogs writing authority
            </h3>
            <button className="btn btn-success rounded-full">
              Request For Blog
            </button>
          </div>
          <div className="req-for-blog flex items-center justify-between my-8 bg-base-200 p-5 rounded-lg">
            <h3 className="text-xl font-bold">
              If you want to get House Holder Account
            </h3>
            <button className="btn btn-success rounded-full">
              Request For House Holder Account
            </button>
          </div>
          <div className="password-change-field bg-gray-50 p-8 rounded">
            <h3 className="text-2xl font-bold mb-6">Change Password</h3>
            <form action="">
              <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2 bg-white">
                <div className="icon">
                  <BiLockAlt />
                </div>
                <input
                  type="password"
                  className="outline-none  w-full pl-4 text-sm"
                  placeholder="Old Password"
                />
              </div>
              <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2 bg-white">
                <div className="icon">
                  <BiLockAlt />
                </div>
                <input
                  type="password"
                  className="outline-none  w-full pl-4  text-sm"
                  placeholder="New Password"
                />
              </div>
              <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2 bg-white">
                <div className="icon">
                  <BiLockAlt />
                </div>
                <input
                  type="password"
                  className="outline-none  w-full pl-4  text-sm"
                  placeholder="Confirm Password"
                />
              </div>
              <button className="btn btn-success rounded-full mt-5">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
