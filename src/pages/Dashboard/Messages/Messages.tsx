import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSend, BiUserCircle } from "react-icons/bi";
import Select from "react-select";
import { useGetAllUsersQuery } from "../../../services/AuthApi";
import MessageBoxEditor from "./MessageBoxEditor";

type Props = {};

const Messages = (props: Props) => {
  const { data } = useGetAllUsersQuery({} as any);
  const [roles, setRoles] = useState<String>("");
  const [userType, setUserType] = useState<String>("");
  const [messageVal, setMessageVal] = useState<String>("");
  const [specificUsers, setSpecificUsers] = useState([]);

  /* form handle hook */
  const { handleSubmit, register, watch } = useForm();

  const registerUsers = data?.users?.users;

  /* email options */
  const emailOptions = registerUsers?.map((user: any) => {
    return { value: user.email, label: user.email };
  });

  /* roles option */
  const roleOptions = registerUsers?.map((user: any) => user.role);
  console.log(roleOptions);

  /* Handle Change Users */
  const handleChangeUser = (user: [] | any) => {
    setSpecificUsers(user);
  };
  console.log(messageVal, specificUsers);

  /* Handle Send Message to Users */
  const handleSendMessageFromAdmin = handleSubmit(async (data) => {
    console.log(data);
  });

  /* Onchange for roles */
  watch(() => {
    const roles = watch("roles");
    setRoles(roles);
    console.log(roles);
  });

  console.log(data);

  return (
    <div>
      <div className="p-5 my-4 bg-white font-poppins">
        <div className="flex items-center gap-3">
          <h3 className="text-lg sm:text-2xl font-bold">
            Send Email to The All Users{" "}
          </h3>{" "}
          <small className="badge badge-success text-xs">admin</small>
        </div>
        <div className="message-content pb-10">
          <form action="" onSubmit={handleSendMessageFromAdmin}>
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
                  {...register("roles")}
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

                  <Select
                    defaultValue={[emailOptions[2], emailOptions[3]]}
                    isMulti
                    name="colors"
                    options={emailOptions}
                    className="form-control outline-none pl-4 w-full"
                    classNamePrefix="select"
                    onChange={handleChangeUser}
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
                <MessageBoxEditor setMessageVal={setMessageVal} />
              </div>
            </div>
            <div className="mt-16 sm:mt-6 justify-end flex">
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
