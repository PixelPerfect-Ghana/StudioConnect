import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiSignupForm } from "../../services/auth";
import studioBackground from "../../assets/images/studio2.jpg";

const SignupForm = () => {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
      const studioName = role === "vendor" ? formData.get("studioName") : null;

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        setLoading(false);
        return;
      }

      const payload = {
        name,
        email,
        password,
        // role,
        ...(studioName && { studioName }),
      };

      const response = await apiSignupForm(payload);
      console.log(response.data);
      toast.success("Account Registered Successfully. Proceed to log in");
      event.target.reset();
      navigate("/LoginForm");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      toast.error("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="log-in flex flex-col justify-center items-center h-screen text-xs bg-cover bg-center"
      style={{ backgroundImage: `url(${studioBackground})` }}
    >
      <div className="text-black text-xs flex flex-col justify-center items-center h-[60vh]">
        <div className="max-w-sm w-full shadow-lg border rounded-lg p-6 bg-transparent my-11">
          <form onSubmit={handleSubmit}>
            <h1 className="flex justify-center mb-3 text-lg">Register With</h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Full Name</label>
                <input
                  id="name"
                  className="w-full bg-white border p-2 rounded-md"
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="name"
                />
              </div>

              <div>
                <label htmlFor="role" className="block mb-1">Role</label>
                <select
                  id="role"
                  className="border p-2 rounded w-full"
                  value={role}
                  onChange={handleRoleChange}
                  name="role"
                  required
                >
                  <option value="" disabled>Select Role</option>
                  <option value="user">USER</option>
                  <option value="vendor">VENDOR</option>
                </select>
              </div>

              {role === "vendor" && (
                <div>
                  <label htmlFor="studioName" className="block mb-1">Studio Name</label>
                  <input
                    id="studioName"
                    className="w-full bg-white border p-2 rounded-md"
                    type="text"
                    placeholder="Enter Studio name"
                    required
                    name="studioName"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
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
                <label htmlFor="password" className="block mb-1">Password</label>
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
                <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
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
              className="w-full mt-6 bg-green-500 p-2 rounded-lg text-white hover:bg-gray-700 duration-300"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>

            <div className="text-xs mt-2 text-center">
              By creating an account you agree to the{" "}
              <Link to="/PrivacyPolicy">
                <span className="font-bold underline">Terms and Services</span>
              </Link>.
            </div>

            <div className="flex justify-center mt-4 text-sm">
              <span>Already have an account?</span>
              <Link to="/LoginForm">
                <span className="text-green-600 ml-2 hover:underline">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
