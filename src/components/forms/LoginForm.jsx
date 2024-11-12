import { Link } from "react-router-dom";

const LoginForm = () => {


  return (
    <div className=" log-in flex flex-col justify-center items-center h-screen text-xs">
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/images/landingpage.jpg')" }}></div>
      <div className=" max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-black">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h1 className="flex justify-center font-extrabold ">
              User Login
            </h1>
            <p className="flex justify-center font-bold ">
              hey! Enter your details to get sign in to your account
            </p>

            <span className="text-sm text-white font-extrabold"></span>
            <input
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Email"
              required
              name="email"
            />
            <div>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="password"
                required
                name="password"
              />
            </div>

            <span className="font-bold">
              {" "}
              <input type="checkbox" />
              Forgot password
            </span>
            <button className=" flex justify-center bg-green-500 p-2 rounded-lg">
              login
            </button>
            <div>
              <div>
                <span className="flex justify-center mb-4">
                  or sign in with
                </span>


                {/* buttons for signin goes here */}
                <div className="flex font-bold gap-3">
                  <button className=" border rounded-md p-2 w-32">
                    <span className="mr-1 ">
                      <i class="fa-brands fa-google"></i>
                    </span>
                    Google
                  </button>

                  <button className=" border rounded-md p-2 w-32">
                    <span className="mr-1">
                      <i class="fa-brands fa-apple"></i>
                    </span>
                    AppleID
                  </button>

                  <button className="border  p-2 rounded-md w-32">
                    <span className="mr-1">
                      <i class="fa-brands fa-facebook"></i>
                    </span>
                    facebook
                  </button>
                </div>
                <div className="flex justify-center mt-8">
                  <span>Don't have an account?</span>
                  <Link to={"/SignupForm"}>
                    {" "}
                    <span className="ml-2 text-green-600 font-extrabold hover:underline">
                      Sign Up
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
