import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { useRegisterAuthMutation } from "../../services/AuthApi";

type Props = {};

const RegisterAuth = (props: Props) => {
  const [userRole, setUserRole] = useState(false);
  const [registerAuth, { isLoading, error, isSuccess, data }] =
    useRegisterAuthMutation();

  const navigate = useNavigate();

  type registerFormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone?: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<registerFormType>();

  const registerForm = handleSubmit(async (formData) => {
    let role: string = userRole ? "customer" : "user";

    if (formData.password === formData.confirmPassword) {
      await registerAuth({
        ...formData,
        role: role,
        phone: !userRole ? formData.phone : undefined,
        confirmPassword: undefined,
      });
    } else {
      toast.error("Password does not match");
    }
  });

  useEffect(() => {
    if (error) {
      toast.error((error as any)?.data?.message || "something went wrong");
    }
    if (isSuccess) {
      toast.success((data as any)?.message + " Login Here");
      navigate("/login");
    }
  }, [error, isSuccess, data, navigate]);

  return (
    <div
      className="flex justify-center sm:p-20 bg-cover"
      style={{
        backgroundImage: `url(${require("../../assets/images/bg.png")})`,
      }}
    >
      <div>
        <div className="hero-content p-0 overflow-hidden w-full flex-col lg:flex-row items-stretch shadow-lg border ">
          <div className="h-100vh font-poppins bg-[#3fa7674f] sm:w-[30rem] grid place-items-center">
            <div className="text-center px-8">
              <h3 className="text-3xl font-bold">Welcome Back</h3>
              <p className="my-4">
                Welcome back to the Houselagbe? app. here you will get dream
                house for yourself.
              </p>
              <button
                onClick={() => {
                  setUserRole((state) => !state);
                  reset();
                }}
                className="btn btn-success rounded-full"
              >
                {userRole ? " House Holder " : "Customer "} Account
              </button>
            </div>
          </div>
          <form
            onSubmit={registerForm}
            method="post"
            className="card flex-shrink-0 w-full sm:w-[30rem] p-5 sm:p-10"
          >
            <div className="card-body p-3">
              <div className="card-header mb-3">
                <h3 className="text-3xl font-semibold">
                  {userRole ? "Customer Account" : "House Holder Account"}
                </h3>
              </div>

              <div className="form-control">
                <div className="input-group my-0 flex items-start gap-3 flex-col rounded-none">
                  <label htmlFor="Name">Name</label>
                  <input
                    id="Name"
                    type="text"
                    placeholder="Name"
                    className="w-full p-4 border focus:outline-gray-200 focus:outline-none rounded-none"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-sm text-error">
                    First name is required
                  </p>
                )}
              </div>
              {!userRole && (
                <div className="form-control">
                  <div className="input-group my-0 flex items-start gap-3 flex-col rounded-none">
                    <label htmlFor="Phone">Phone</label>
                    <input
                      id="Phone"
                      type="text"
                      placeholder="Phone"
                      className="w-full p-4 border focus:outline-gray-200 focus:outline-none rounded-none"
                      {...register("phone", { required: true })}
                    />
                  </div>
                  {errors.phone?.type === "required" && (
                    <p role="alert" className="text-sm text-error">
                      phone is required
                    </p>
                  )}
                </div>
              )}
              <div className="form-control">
                <div className="input-group my-0 flex items-start gap-3 flex-col rounded-none">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 border focus:outline-gray-200 focus:outline-none rounded-none"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </div>

                {errors.email?.type === "required" && (
                  <p role="alert" className="text-sm text-error">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <div className="input-group my-0 flex items-start gap-3 flex-col rounded-none">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="password"
                    className="w-full p-4 border focus:outline-gray-200 focus:outline-none rounded-none"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                  />
                </div>

                {errors.password?.type === "required" && (
                  <p role="alert" className="text-sm text-error">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-sm text-error">
                    Password is must be more then 6 chars.
                  </p>
                )}
              </div>
              <div className="form-control">
                <div className="input-group my-0 flex items-start gap-3 flex-col rounded-none">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    className="w-full p-4 border focus:outline-gray-200 focus:outline-none rounded-none"
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                  />
                </div>
                {errors.confirmPassword?.type === "required" && (
                  <p role="alert" className="text-sm text-error">
                    Confirm Password is required
                  </p>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <p role="alert" className="text-sm text-error">
                    Confirm Password is must be more then 6 chars.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="w-full btn btn-success rounded-none btn-lg z-10 cursor-pointer"
                >
                  {isLoading ? (
                    <PulseLoader color="#000" size={8} />
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
              <p className="my-2">
                Already have an Account?{" "}
                <Link to="/login" className="text-success">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAuth;
