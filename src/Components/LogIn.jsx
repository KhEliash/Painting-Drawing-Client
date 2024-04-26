import { Helmet } from "react-helmet";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  const google = () => {};
  const github = () => {};
  const handleLogin = () => {};
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Login - PaintingDrawing</title>
      </Helmet>
      <div className="p-5 rounded-xl shadow-2xl bg-base-100">
        <h1 className="font-bold text-2xl text-center text-black">
          Login Here
        </h1>
        <form className="lg:card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-orange-500 text-white hover:text-black">
              Login
            </button>
          </div>
        </form>
        <p>
          Do not have an account?
          <Link to={"/register"} className="btn btn-link font-bold ">
            Register
          </Link>
        </p>
        <hr className="mb-3" />
        <div>
          <h1 className="text-xl text-center font-bold text-black">
            Login with . . .
          </h1>

          <div className="flex justify-around mt-3">
            <button
              onClick={google}
              className="btn btn-sm bg-orange-500  text-white hover:text-black"
            >
              <span>
                <FaGoogle />
              </span>
              Google
            </button>
            <button
              onClick={github}
              className="btn btn-sm bg-orange-500 text-white hover:text-black"
            >
              <span>
                <FaGithub />
              </span>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
