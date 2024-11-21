import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiSignUp } from "../../services/auth";
import studioBackground from "../../assets/images/studio2.jpg";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        setLoading(false);
        return;
      }

      const payload = {
        firstName,
        lastName,
        email,
        password,
      };

      const response = await apiSignUp(payload);
      toast.success(response.data.message);
      event.target.reset();
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      toast.error("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="log-in flex flex-col justify-center items-center h-screen  bg-cover bg-center"
      style={{ backgroundImage: `url(${studioBackground})` }}
    >
      <div className="max-w-lg w-full  bg-blend-overlay shadow-lg rounded-lg p-10 border  bg-white/20 backdrop-blur-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="flex justify-center text-3xl font-bold">Join Us!</h1>
          <div className="flex flex-col gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                id="firstName"
                className="w-full bg-white border p-2 rounded-md"
                type="text"
                placeholder="Enter your first name"
                required
                name="firstName"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                className="w-full bg-white border p-2 rounded-md"
                type="text"
                placeholder="Enter your last name"
                required
                name="lastName"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                className="w-full bg-white border p-2 rounded-md"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                id="password"
                className="w-full bg-white border p-2 rounded-md"
                type="password"
                placeholder="Enter password"
                required
                name="password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                className="w-full bg-white border p-2 rounded-md"
                type="password"
                placeholder="Confirm password"
                required
                name="confirmPassword"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-green-500 p-2 rounded-lg text-white hover:bg-gray-700 duration-300 font-bold"
            disabled={loading}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
          <div className=" mt-2 text-center">
            By creating an account you agree to the{" "}
            <Link to="/PrivacyPolicy">
              <span className="font-bold underline">Terms and Services</span>
            </Link>
            .
          </div>
          <div className="flex justify-center mt-4 ">
            <span>Already have an account?</span>
            <Link to="/login">
              <span className="text-green-600 ml-2 font-extrabold hover:underline">
                Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
