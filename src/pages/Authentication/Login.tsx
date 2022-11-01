import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiLogIn } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { useAppDispatch } from "../../app/store";
import { setAuthInformation } from "../../features/AuthSlice";
import useTitle from "../../hooks/useTitle";
import { useLoginAuthMutation } from "../../services/AuthApi";

const Fade = require("react-reveal/Fade");

type Props = {};

const Login = (props: Props) => {
  useTitle("Login");
  /* From AuthAPI */
  const [loginAuth, { data, isLoading, isSuccess, error }] =
    useLoginAuthMutation();

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isShow, setIsShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //Handle Form
  const loginForm = handleSubmit(async (formData) => {
    try {
      await loginAuth(formData);
    } catch (err) {
      console.log(err);
    }
  });

  /* Handle Another Options */
  useEffect(() => {
    /* If Error */
    if (error) {
      toast.error((error as any).data.message);
      toast.error((error as any)?.data);
      swal({
        title: (error as any)?.data?.message,
        icon: "error",
        dangerMode: true,
        buttons: ["cancel", "okay"],
      });
    }
    /* If Success */
    if (isSuccess) {
      navigate("/dashboard/profile");
      dispatch(setAuthInformation({ user: data?.user, token: data?.token }));
      cogoToast.success("Login Success");
    }
  }, [isSuccess, error, data, navigate, dispatch]);

  return (
    <div className="flex justify-center sm:p-20 bg-cover bg-gray-50">
      <div>
        <div className="hero-content flex-col border  sm:p-10 bg-white">
          {/* <div className="text-center lg:text-left max-w-md ">
            <img
              src="https://i.ibb.co/HVBwcZT/undraw-Access-account-re-8spm.png"
              alt="loginImage"
            />
          </div> 
          <div className="divider lg:divider-horizontal">+</div>*/}
          <Fade top distance="20px">
            <form
              onSubmit={loginForm}
              className="card flex-shrink-0 w-full sm:w-[30rem]  bg-white"
            >
              <div className="card-body p-5  ">
                <div className="card-header mb-3">
                  <span className="text-3xl  w-20 h-20 bg-gray-100 grid place-items-center mb-4">
                    <BiLogIn />
                  </span>
                  <h3 className="text-2xl">Login to Account</h3>
                </div>
                <div className="form-control rounded-none">
                  <div className="input-group my-1 flex items-start gap-3 flex-col rounded-none">
                    <label htmlFor="email">
                      Email <small className="text-error">*</small>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full p-5 border focus:outline-gray-200 focus:outline-none rounded-none"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                  </div>
                  {errors.email?.type === "required" && (
                    <small className="text-xs py-1 text-error font-poppins">
                      Email field is required.
                    </small>
                  )}
                  {errors.email?.type === "pattern" && (
                    <small className="text-xs py-1 text-error font-poppins">
                      Put valid email
                    </small>
                  )}
                </div>
                <div className="form-control">
                  <div className="input-group my-0 flex items-start gap-3 flex-col rounded-none relative">
                    <label htmlFor="password">
                      Password <small className="text-error">*</small>
                    </label>
                    <input
                      id="password"
                      type={isShow ? "text" : "password"}
                      placeholder="Password"
                      className="w-full p-5 border focus:outline-gray-200 focus:outline-none rounded-none"
                      {...register("password", { required: true })}
                    />
                    <div
                      className="eye absolute right-6 top-16 cursor-pointer z-10 select-none"
                      onClick={() => setIsShow((state) => !state)}
                    >
                      {isShow ? <BsEyeSlash /> : <BsEye />}
                    </div>
                  </div>
                  {errors.password?.type === "required" && (
                    <small className="text-xs text-error font-poppins py-1">
                      Password field is required
                    </small>
                  )}
                  <label className="label">
                    <Link
                      to="/reset-password"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  {isLoading ? (
                    <button
                      type="button"
                      className="w-full btn btn-success rounded-none btn-lg z-10 cursor-pointer"
                    >
                      <PulseLoader size={8} />
                    </button>
                  ) : (
                    <button className="w-full btn btn-success rounded-none btn-lg z-10 cursor-pointer">
                      Login
                    </button>
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
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Login;
