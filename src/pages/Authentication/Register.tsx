import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UserInterface } from "../../interfaces/UserInterface";
type Props = {};

const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInterface>();
  const registerForm = handleSubmit((data) => {
    if (data.password === data.confirmPassword) {
      console.log(data);
    } else {
      toast("Password does not match", {
        type: "error",
      });
    }
  });

  return (
    <div
      className="flex justify-center p-20 bg-cover"
      style={{
        backgroundImage: `url(${require("../../assets/images/bg.png")})`,
      }}
    >
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse shadow-lg border rounded-lg p-10 ">
          <form
            onSubmit={registerForm}
            method="post"
            className="card flex-shrink-0 w-full max-w-sm  "
          >
            <div className="card-body">
              <div className="card-header mb-3">
                <h3 className="font-bold text-2xl">Register</h3>
                <h3 className="text-2xl">For List Your Houses Here</h3>
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
                  Create Account
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
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
