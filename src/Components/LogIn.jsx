import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import swal from "sweetalert";

const LogIn = () => {
  const { signIn, googleLogIn, githubLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const google = () => {
    googleLogIn()
      .then((result) => {
        swal({
          text: "Successfully login",
          icon: "success",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "warning",
        });
      });
  };
  const github = () => {
    githubLogIn()
      .then((result) => {
        swal({
          text: "Successfully login",
          icon: "success",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "warning",
        });
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        swal({
          text: "Successfully login",
          icon: "success",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "warning",
        });
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Login - PaintingDrawing</title>
      </Helmet>
      <div className="p-5 rounded-xl shadow-2xl bg-base-100">
        <h1 className="font-bold text-2xl text-center text-orange-500">
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
          <h1 className="text-xl text-center font-bold text-orange-500">
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
