import { useState } from "react";
import { BiSend, BiUserCircle } from "react-icons/bi";
import MessageBoxEditor from "./MessageBoxEditor";
type Props = {};

const Messages = (props: Props) => {
  const [roles, setRoles] = useState<String>("");
  const [userType, setUserType] = useState<String>("");
  return (
    <div>
      <div className="p-5 my-4 bg-white">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold">Send Email to The All Users </h3>{" "}
          <small className="badge badge-success text-xs">admin</small>
        </div>
        <div className="message-content pb-10">
          <form action="">
            {/* Whom want sent mail */}
            <div className="name border  rounded p-3 pb-1 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins flex items-center gap-1">
                  Mail To <b>{roles}</b>
                </h3>
              </div>
              <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiUserCircle />
                </div>
                <select
                  className="outline-none  w-full pl-4 cursor-pointer text-sm"
                  onChange={(e) => setRoles(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="all">All Register Users</option>
                  <option value="user">House Holder</option>
                  <option value="customer">Customers</option>
                </select>
              </div>
            </div>
            {/* End */}
            {/*  users selection */}
            {roles && (
              <div className="name border  rounded p-3 pb-1 relative mt-10 flex-1">
                <div className="name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins flex items-center gap-1">
                    Users Type
                  </h3>
                </div>
                <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                  <div className="icon">
                    <BiUserCircle />
                  </div>
                  <select
                    className="outline-none  w-full pl-4 cursor-pointer text-sm"
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    {roles === "all" ? (
                      <option value="all">All</option>
                    ) : (
                      <>
                        <option value="">Select Role</option>
                        <option value="all">All</option>
                        <option value="specific">Specific Person</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
            )}

            {/* End */}
            {/*  users selection */}
            {userType === "specific" ? (
              <div className="name border  rounded p-3 pb-1 relative mt-10 flex-1">
                <div className="name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins flex items-center gap-1">
                    Select Users
                  </h3>
                </div>
                <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                  <div className="icon">
                    <BiUserCircle />
                  </div>
                  <input
                    type="text"
                    className="form-control outline-none pl-4 w-full"
                    placeholder="Select Users Email with , separation"
                    list="users"
                  />
                </div>

                <small className="text-xs text-gray-400">
                  Write Multiple username using , (coma) operator
                </small>
              </div>
            ) : null}

            {/* End */}

            {/*Subject */}
            <div className="name border  rounded p-3 pb-1 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins flex items-center gap-1">
                  Subject
                </h3>
              </div>
              <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiUserCircle />
                </div>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div
              className="name border  rounded p-3 pb-1 relative mt-10 flex-1"
              style={{ height: 350 }}
            >
              <div className="name-title absolute -top-4 bg-white rounded p-1">
                <h3 className="text-xs font-poppins flex items-center gap-1 border p-1 rounded">
                  Write Message
                </h3>
              </div>
              <div className="my-1 rounded-md mt-6">
                <MessageBoxEditor />
              </div>
            </div>
            <div className=" mt-5 justify-end flex">
              <button className="flex items-center gap-3 btn btn-success rounded-none">
                Send Message <BiSend />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;
