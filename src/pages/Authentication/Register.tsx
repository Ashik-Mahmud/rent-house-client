import { Link } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="flex justify-center p-20">
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse shadow-lg border rounded-lg p-10 ">
          <div className="card flex-shrink-0 w-full max-w-sm  ">
            <div className="card-body">
              <div className="card-header mb-3">
                <h3 className="text-2xl">Register your Account</h3>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Create Account</button>
              </div>
              <p className="my-2">
                Already have an Account?{" "}
                <Link to="/login" className="text-success">
                  Login
                </Link>
              </p>
            </div>
          </div>
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
