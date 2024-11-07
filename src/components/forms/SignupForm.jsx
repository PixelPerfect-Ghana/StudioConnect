import { Link } from "react-router-dom";


const SignupForm = () => {
  
  return (
    <div className="log-in h-full ">
      <div className="bg-[#ff923e44] w-full h-full flex justify-center items-center ">
        <div className="text-black text-xs flex flex-col justify-center items-center h-full ">
          <div className="max-w-sm w-full shadow-lg rounded-lg p-6 bg-white  my-11">
            <form>
              <h1 className="flex justify-center mb-3 text-lg">
                Register With
              </h1>
              <div className="flex font-bold gap-3 mb-8 justify-center">
                <button className="bg-white border rounded-md w-32 p-2 flex items-center justify-center">
                  <span className="mr-1">
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  Facebook
                </button>
                <button className="bg-white border rounded-md w-32 p-2 flex items-center justify-center">
                  <span className="mr-1">
                    <i className="fa-brands fa-google"></i>
                  </span>
                  Google
                </button>
                <button className="bg-white border rounded-md w-32 p-2 flex items-center justify-center">
                  <span className="mr-1">
                    <i className="fa-brands fa-apple"></i>
                  </span>
                  AppleID
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <label className="block mb-1">Full Name</label>
                    <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                      <i className="fa-regular fa-user mr-2"></i>
                      <input
                        className="w-full bg-transparent"
                        type="text"
                        placeholder="Enter your name"
                        required
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block mb-1">Phone</label>
                    <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                      <i className="fa-solid fa-phone mr-2"></i>
                      <input
                        className="w-full bg-transparent"
                        type="tel"
                        placeholder="Enter phone number"
                        required
                        name="phone"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Business Name</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-regular fa-building mr-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-2 "
                      type="text"
                      placeholder="Enter business name"
                      required
                      name="businessName"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Location</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-solid fa-location-dot mr-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-2 "
                      type="text"
                      placeholder="Enter location"
                      required
                      name="location"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Email</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-regular fa-envelope mr-2"></i>
                    <input
                      className="w-full bg-transparent "
                      type="email"
                      placeholder="Enter your email"
                      required
                      name="email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Password</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-solid fa-lock mr-2"></i>
                    <input
                      className="w-full bg-transparent "
                      type="password"
                      placeholder="Enter password"
                      required
                      name="password"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Confirm Password</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-solid fa-lock ml-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-2 "
                      type="password"
                      placeholder="Confirm password"
                      required
                      name="confirmPassword"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-green-500 p-2 rounded-lg text-white hover:bg-gray-700 hover:text-white duration-300">
                Sign Up
              </button>

              <div className="text-xs mt-2 text-center">
                By creating an account you agree to the{" "}
                 <Link to="/PrivacyPolicy"> <span className="font-bold underline">Terms and Services</span> </Link>
                We will occasionally send you account-related emails.
              </div>

              <div className="flex justify-center mt-4 text-sm">
                <span>Already have an account?</span>
                <Link to="/LoginForm">
                  <span className="text-green-600 ml-2 hover:underline  ">
                    Login
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
