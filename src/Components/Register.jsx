import { useContext, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, logOut, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (!/[A-Z]/.test(password)) {
      swal("Password should have a CAPITAL latter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      swal("Password should have a SMALL latter");

      return;
    }
    if (!password.length >= 6) {
      swal("Password should be at least 6 characters");
      return;
    }

    // user create
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo).then(() => {
          logOut();
          navigate("/login");
          swal({
            text: "Registered successfully",
            icon: "success",
          });
        });
      })
      .catch((error) => {
        console.log(error);
        swal({
          text: error.message,
          icon: "warning",
        });
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="p-5 rounded-xl shadow-2xl bg-base-100">
        <h1 className="font-bold text-2xl  text-center text-orange-500">
          Register Here
        </h1>
        <form className=" lg:card-body " onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute right-2 bottom-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-orange-500 text-white hover:text-black">
              Register
            </button>
          </div>
        </form>
        <p>
          Already have an account?
          <Link to={"/login"} className="btn btn-link font-bold ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
