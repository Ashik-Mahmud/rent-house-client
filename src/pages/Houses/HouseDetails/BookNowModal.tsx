import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { BiEnvelope, BiKey, BiPhoneIncoming, BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import StripeCheckout from "../../../components/StripeCheckout";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useRegisterAuthMutation } from "../../../services/AuthApi";

type Props = {
  house: any;
};

const BookNow = ({ house }: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  /* Payment state */
  const [isStripe, setIsStripe] = useState(false);
  const [registerAuth, { isLoading, error, isSuccess, data }] =
    useRegisterAuthMutation();

  const navigate = useNavigate();
  /* Information States */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = {
    house,
  };

  /* Handle Register */
  const handleRegister = async () => {
    /* name */
    if (!name) {
      return cogoToast.error("Name is required");
    }
    /* email */
    if (!email) {
      return cogoToast.error("Email is required");
    }
    /* Email Validation */
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return cogoToast.error("Invalid email address");
    }

    /* phone */
    if (!phone) {
      return cogoToast.error("Phone is required");
    }
    /* Phone Number Validation */
    if (!/^(?:\+88|01)?\d{11}$/.test(phone)) {
      return cogoToast.error("Invalid Phone Number");
    }
    /* password */
    if (!password) {
      return cogoToast.error("Password is required");
    }
    /* password validation here */
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordValidation.test(password)) {
      return cogoToast.error(
        "Password must be 8 characters long and must contain at least one uppercase letter, one lowercase letter and one number"
      );
    }
    await registerAuth({
      name,
      email,
      phone,
      password,
      role: "customer",
    });
  };

  useEffect(() => {
    if (error) {
      cogoToast.error((error as any)?.data?.message || "something went wrong");
    }
    if (isSuccess) {
      cogoToast.success((data as any)?.message + " Login Here");
      navigate("/login");
    }
  }, [error, isSuccess, data, navigate]);

  return (
    <div>
      <input type="checkbox" id="book-now-modal" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations you come across to book this house.
          </h3>
          <p className="py-4">
            Please fill up the form below and we will contact you
          </p>
          <div className="modal-body">
            {!updatedUser?._id && (
              <>
                {/* Name */}
                <div className="name border  rounded p-3 relative mt-5 flex-1">
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                {/* End */}
                <div className="flex items-stretch justify-between gap-2">
                  {/* Email */}
                  <div className="name border  rounded p-3 relative mt-7 flex-1">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* End */}
                  {/* PHone */}
                  <div className="name border  rounded p-3 relative mt-7 flex-1">
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* End */}
                </div>
                {/* Password */}
                <div className="name border  rounded p-3 pb-1 relative mt-7 flex-1">
                  <div className="name-title absolute -top-4 bg-white border rounded p-1">
                    <h3 className="text-xs font-poppins flex items-center gap-3">
                      Put your Password{" "}
                    </h3>
                  </div>
                  <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                    <div className="icon">
                      <BiKey />
                    </div>
                    <input
                      type="password"
                      className="form-control outline-none pl-4 w-full"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <small className="text-gray-400 text-xs">
                    It used for login not your card password
                  </small>
                </div>
                {/* End */}
              </>
            )}
            {updatedUser?._id && (
              <>
                <div className="mt-5">
                  <div className="tabs">
                    <div className="tab flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rd"
                        id="rd1"
                        onClick={() => setIsStripe(false)}
                        defaultChecked={isStripe === false}
                      />
                      <div className="tab-header">
                        <label htmlFor="rd1" className="cursor-pointer">
                          Pay with Stripe
                        </label>
                      </div>
                    </div>
                    <div className="tab flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rd"
                        id="rd2"
                        onClick={() => setIsStripe(true)}
                      />
                      <div className="tab-header">
                        <label htmlFor="rd2" className="cursor-pointer">
                          Pay with SSLCOMMERZ
                        </label>
                      </div>
                    </div>
                  </div>
                  {!isStripe ? (
                    <>
                      <StripeCheckout userInfo={userInfo} />
                    </>
                  ) : null}
                </div>
                {isStripe && (
                  <>
                    <button className="btn bg-[#295CAB]">
                      Pay 100 tk With SSLCOMMERZ
                    </button>
                    <div className="my-3 flex items-center gap-2 font-poppins mt-3">
                      <input
                        type="checkbox"
                        name="permission"
                        className="checkbox"
                        id="permission"
                        required
                      />
                      <label htmlFor="permission">
                        Accept all the Condition & Policy
                      </label>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="modal-action  items-stretch gap-3 flex-col-reverse font-poppins">
            <label htmlFor="book-now-modal" className="btn btn-warning">
              Cancel
            </label>
            {!updatedUser?._id && (
              <>
                {isLoading ? (
                  <button className="btn bg-[#295CAB]" disabled>
                    <PulseLoader size={8} color="#fff" />
                  </button>
                ) : (
                  <button className="btn bg-[#295CAB]" onClick={handleRegister}>
                    Register as customer
                  </button>
                )}
                <span>
                  Already have an account?{" "}
                  <Link to="/login" className="text-success">
                    login
                  </Link>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
