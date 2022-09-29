import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
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
          <div className="card flex-shrink-0 w-full max-w-sm  ">
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Login</button>
              </div>
              <p className="my-2">
                Don't have account?{" "}
                <Link to="/register" className="text-success">
                  Create
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
