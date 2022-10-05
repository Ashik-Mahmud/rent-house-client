import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { useLoginAuthMutation } from "../../services/AuthApi";

type Props = {};

const Login = (props: Props) => {
  const [loginAuth, { data, isLoading, isSuccess, error }] =
    useLoginAuthMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginForm = handleSubmit(async (formData) => {
    await loginAuth(formData);
  });

  /* Handle Another Options */
  useEffect(() => {
    /* If Error */
    if (error) {
      toast.error((error as any).data.message);
    }
    /* If Success */
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess, error, data]);
  return (
    <div
      className="flex justify-center p-20 bg-cover"
      style={{
        backgroundImage: `url(${require("../../assets/images/bg.png")})`,
      }}
    >
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse shadow-lg border rounded-lg p-10 ">
          <div className="text-center lg:text-left max-w-md">
            <img
              src="https://i.ibb.co/HVBwcZT/undraw-Access-account-re-8spm.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="divider lg:divider-horizontal">+</div>
          <form
            onSubmit={loginForm}
            className="card flex-shrink-0 w-full max-w-sm  "
          >
            <div className="card-body">
              <div className="card-header mb-3">
                <h3 className="text-2xl">Login to Account</h3>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email?.type === "required" && (
                  <small className="text-xs py-1 text-error font-poppins">
                    {" "}
                    Email field is required.{" "}
                  </small>
                )}
                {errors.email?.type === "pattern" && (
                  <small className="text-xs py-1 text-error font-poppins">
                    {" "}
                    Put valid email{" "}
                  </small>
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
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                  <small className="text-xs text-error font-poppins py-1">
                    Password field is required
                  </small>
                )}
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {isLoading ? (
                  <button className="btn btn-success">
                    <PulseLoader size={8} />
                  </button>
                ) : (
                  <button className="btn btn-success">Login</button>
                )}
              </div>
              <p className="my-2">
                Don't have an account?{" "}
                <Link to="/register" className="text-success">
                  Create for free
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
