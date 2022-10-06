import { BiLockAlt } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {};

const Settings = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const role = updatedUser?.role;
  const isVerify = updatedUser?.isVerified;

  return (
    <div>
      <div className="p-5 my-4 bg-white font-poppins">
        <h3 className="text-2xl font-bold mb-3">Settings</h3>

        <div className="settings-content">
          {role !== "admin" && (
            <>
              <div className="req-for-blog flex-col justify-center sm:justify-between sm:flex-row flex items-center my-8 bg-base-200 p-5 rounded-lg">
                <h3 className="text-xl font-bold text-center sm:text-left">
                  If you want to get Blogs writing authority
                </h3>

                {isVerify ? (
                  <button className="btn btn-success rounded-full mt-4  sm:mt-0">
                    Request For Blog
                  </button>
                ) : (
                  <button
                    className="btn btn-warning pointer-events-none rounded-full mt-4  sm:mt-0 tooltip"
                    data-tip="Verify First"
                  >
                    Verify Account to Get Request
                  </button>
                )}
              </div>
              {role === "customer" && (
                <div className="req-for-blog flex items-center  my-8 bg-base-200 p-5 rounded-lg flex-col justify-center sm:justify-between sm:flex-row">
                  <h3 className="text-xl font-bold text-center sm:text-left">
                    If you want to get House Holder Account
                  </h3>
                  {isVerify ? (
                    <button className="btn btn-success rounded-full mt-4 sm:mt-0">
                      Request For House Holder Account
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning pointer-events-none rounded-full mt-4  sm:mt-0 tooltip"
                      data-tip="Verify First"
                    >
                      Verify Account to Get Request
                    </button>
                  )}
                </div>
              )}
            </>
          )}

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
