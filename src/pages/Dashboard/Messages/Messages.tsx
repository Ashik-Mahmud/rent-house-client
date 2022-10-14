import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiSend, BiUserCircle } from "react-icons/bi";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import MessageBoxEditor from "./MessageBoxEditor";

type Props = {};

const Messages = (props: Props) => {
  //   const { data } = useGetAllUsersQuery({} as any);
  const { user } = useAuth<authUserInterface | any>({});
  const { data } = useQuery(
    "users-with-profiles",
    async () =>
      await axios
        .get("http://localhost:5000/api/v1/admin/users", {
          headers: { Authorization: `Bearer ${user?.token}` },
        })
        .then((res) => res.data)
  );

  const [roles, setRoles] = useState<String>("");
  const [userType, setUserType] = useState<String>("");
  const [messageVal, setMessageVal] = useState<String>("");
  const [specificUsers, setSpecificUsers] = useState([]);
  const navigate = useNavigate();

  /* form handle hook */
  const { handleSubmit, register, watch, reset } = useForm();

  const registerUsers = data?.users?.users;

  /* email options */
  const registerUsersEmail = registerUsers?.map((user: any) => {
    return { value: user.email, label: user.email, role: user?.role };
  });

  /* get user by filter in role */
  let emailOptions = registerUsersEmail?.filter(
    (email: any) => email?.role === roles
  );

  /* roles option */
  const roleOptions = registerUsers
    ?.map((user: any) => user.role)
    .filter((v: string, i: number, a: string[]) => a.indexOf(v) === i);

  /* Handle Change Users */
  const handleChangeUser = (user: [] | any) => {
    setSpecificUsers(user);
  };

  /* Onchange for roles */

  const [userEmails, setUserEmails] = useState([]);

  useEffect(() => {
    watch(() => {
      const roles = watch("roles");
      setRoles(roles);

      if (roles === "admin") {
        setUserEmails(() =>
          registerUsersEmail?.filter((user: any) => user?.role === roles)
        );
      }
      if (roles === "manager") {
        setUserEmails(() =>
          registerUsersEmail?.filter((user: any) => user?.role === roles)
        );
      }
      if (roles === "user") {
        setUserEmails(() =>
          registerUsersEmail?.filter((user: any) => user?.role === roles)
        );
      }
      if (roles === "customer") {
        setUserEmails(() =>
          registerUsersEmail?.filter((user: any) => user?.role === roles)
        );
      }
      if (roles === "all") {
        setUserEmails(registerUsersEmail);
      }
    });
    if (userType === "all") {
      setUserEmails((state) => state);
    }
    if (userType === "specific") {
      setUserEmails(specificUsers);
    }
  }, [userType, specificUsers, registerUsersEmail, roles, watch]);

  /* Handle Send Message to Users */
  const handleSendMessageFromAdmin = handleSubmit(async (data) => {
    if (!data?.roles) return cogoToast.warn("Please Select The Role!");
    if (data?.roles === "all") {
      setUserType("all");
    }
    if (!userType) return cogoToast.warn("Please Select User Type");
    if (!data?.subject) return cogoToast.warn("Please Write Topic/Subject !");
    if (!messageVal) return cogoToast.warn("Please write a messages!");

    const sendMessageContent = {
      subject: data?.subject,
      content: messageVal,
      userEmails: userEmails?.map((user: any) => user.value).join(","),
    };

    /* Send Message */
    const { data: mailedData } = await axios.post(
      `http://localhost:5000/api/v1/admin/emails/send`,
      { ...sendMessageContent },
      {
        headers: { Authorization: `Bearer ${user?.token}` },
      }
    );
    await swal("Success!", mailedData?.message, "success");
    reset();
    navigate(`/dashboard/messages/`, { replace: true });
  });

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
                  Mail To{" "}
                  <b className="capitalize">
                    {roles === "user" ? "House Holder" : roles}
                  </b>
                </h3>
              </div>
              <div
                className={`input-group flex items-center my-1 border p-3 rounded-md mt-2 tooltip-info tooltip-bottom-left ${
                  specificUsers.length > 0 ? "tooltip" : ""
                }`}
                data-tip={
                  specificUsers.length > 0
                    ? "Unselect previously selected specific users"
                    : ""
                }
              >
                <div className="icon">
                  <BiUserCircle />
                </div>
                <select
                  className="outline-none  w-full pl-4 cursor-pointer text-sm  capitalize"
                  {...register("roles")}
                  disabled={
                    specificUsers.length > 0 && userType !== "all"
                      ? true
                      : false
                  }
                >
                  <option value="">Select Role</option>
                  <option value="all">All Register Users</option>

                  {roleOptions?.map((role: string, index: number) => (
                    <option key={index} value={role}>
                      {role === "user" ? "House Holder" : role}
                    </option>
                  ))}
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
                      <>
                        <option value="">select type</option>
                        <option value="all">All</option>
                      </>
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
                  {...register("subject")}
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
