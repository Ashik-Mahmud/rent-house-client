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
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormType>();

  const registerForm = handleSubmit(async (formData) => {
    let role: string = userRole ? "customer" : "user";
    if (formData.password === formData.confirmPassword) {
      await registerAuth({
        ...formData,
        role: role,
        confirmPassword: undefined,
      });
    } else {
      toast.error("Password does not match");
    }
  });

  useEffect(() => {
    if (error) {
      toast.error((error as any).data.message);
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
        <div className="hero-content flex-col lg:flex-row-reverse shadow-lg border rounded-lg sm:p-10 ">
          <form
            onSubmit={registerForm}
            method="post"
            className="card flex-shrink-0 w-full sm:max-w-sm  p-3"
          >
            <div className="card-body p-3">
              <div className="card-header mb-3">
                <h3 className="text-2xl">
                  {userRole ? "Customer Account" : "House Holder Account"}
                </h3>
                <span className="text-md block mt-4 select-none">
                  Register as
                  <span
                    className="text-success cursor-pointer font-bold"
                    onClick={() => setUserRole((state) => !state)}
                  >
                    {" "}
                    {userRole ? " House Holder" : "Customer"}
                  </span>
                </span>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-sm text-error">
                    First name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-sm text-error">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
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
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />{" "}
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
                <button type="submit" className="btn btn-success">
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
          <div className="divider lg:divider-horizontal">+</div>
          <div className="text-center lg:text-left max-w-md">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/867/677/non_2x/online-registration-illustration-design-concept-vector.jpg"
              alt="registerImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAuth;
