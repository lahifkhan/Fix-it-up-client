import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useDynamicTitle from "../Hook/useDynamicTitle";

const Login = () => {
  const { signInUser, signWithGoogle, setloading, setUser } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        toast.success("Log in Successfully");
        {
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err.code);
        setloading(false);
      });
  };

  const handleGoogleSign = () => {
    signWithGoogle()
      .then((res) => {
        toast.success("Accounts Loged In Successfully");
        setUser(res.user);
        setloading(false);
        console.log(res.user);
        {
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(err.code);
        setloading(false);
      });
  };

  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  useDynamicTitle("Login");
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-9">
        <div className="card-body">
          <h1 className="text-center font-bold text-xl text-primary">Log in</h1>
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input placeholder:text-gray-400"
                placeholder="Email"
                name="email"
              />

              {/* password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="input placeholder:text-gray-400"
                  placeholder="Password"
                  name="password"
                />
                <button
                  onClick={handleShowPass}
                  className="btn btn-xs absolute top-2 right-6"
                  type="button"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div>
                <button className="link link-hover">Forgot password?</button>
              </div>
              <button className="btn btn-primary mt-4">Log in</button>

              <div className="flex flex-col text-center space-y-2">
                <p className=" font-semibold text-accent">Or</p>
                <button
                  type="button"
                  onClick={handleGoogleSign}
                  className="btn flex items-center gap-1 bg-black text-white "
                >
                  {" "}
                  <FcGoogle size={24} />
                  Continue With Google
                </button>
              </div>
            </fieldset>
          </form>

          <p>
            Don't have an account?{" "}
            <Link className="text-blue-500" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
