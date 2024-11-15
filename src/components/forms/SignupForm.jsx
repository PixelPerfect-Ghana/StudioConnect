import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiSignupForm } from "../../services/auth";

const SignupForm = () => {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission
    try {
      const formData = new FormData(event.target);
      setLoading(true);

      // Extract form data
      const name = formData.get("name");
      // const studioName = formData.get("studioName"); // Updated variable name
      const email = formData.get("email");
      const password = formData.get("password");
      // const confirmPassword = formData.get("confirmPassword");
      // const location = formData.get("location");
      //  const role = formData.get("role");

      console.log("Full Name:", name); // Logs the full name

      // Prepare the payload with the selected role and other data
      const payload = {
        name,
        // studioName,
        email,
        password,
        // confirmPassword,
        // location,
        //  role,
      };

      // Call the signup API
      const response = await apiSignupForm(payload);
      console.log(response.data);
      toast.success("Account Registered Successfully. Proceed to log in");
      navigate("/LoginForm");
    } catch (error) {
      console.error("Signup error:", error);
      console.error("full error object:", error);
      toast.error("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="log-in flex flex-col justify-center items-center h-screen text-xs bg-cover bg-center"
      style={{ backgroundImage: "url('./src/assets/images/studio2.jpg')" }}
    >
      <div className="text-black text-xs flex flex-col justify-center items-center h-[60vh]">
        <div className="max-w-sm w-full shadow-lg  border rounded-lg p-6 bg-transparent my-11">
          <form onSubmit={handleSubmit}>
            <h1 className="flex justify-center mb-3 text-lg">Register With</h1>
            <div className="flex font-bold gap-3 mb-8 justify-center">
              {/* Social Media Buttons */}
              <button
                type="button"
                className="bg-white border rounded-md w-32 p-2 flex items-center justify-center"
              >
                <span className="mr-1">
                  <i className="fa-brands fa-facebook"></i>
                </span>
                Facebook
              </button>
              <button
                type="button"
                className="bg-white border rounded-md w-32 p-2 flex items-center justify-center"
              >
                <span className="mr-1">
                  <i className="fa-brands fa-google"></i>
                </span>
                Google
              </button>
              <button
                type="button"
                className="bg-white border rounded-md w-32 p-2 flex items-center justify-center"
              >
                <span className="mr-1">
                  <i className="fa-brands fa-apple"></i>
                </span>
                AppleID
              </button>
            </div>
            <div className="space-y-4">
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

              <div>
                <label className="block mb-1">Role</label>
                <select
                  className="border p-2 rounded w-full"
                  value={role}
                  onChange={handleRoleChange}
                  name="role"
                >
                  <option value="">Select Role</option>
                  <option value="admin">ADMIN</option>
                  <option value="user">USER</option>
                  <option value="owner">STUDIO OWNER</option>
                </select>
              </div>

              {role === "STUDIO_OWNER" && (
                <div>
                  <label className="block mb-1">Studio Name</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-regular fa-building mr-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-2"
                      type="text"
                      placeholder="Enter Studio name"
                      required
                      name="studioName"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block mb-1">Location</label>
                <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                  <i className="fa-solid fa-location-dot mr-2"></i>
                  <input
                    className="w-full bg-transparent focus:ring-2"
                    type="text"
                    placeholder="Enter location"
                    name="location"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                  <i className="fa-regular fa-envelope mr-2"></i>
                  <input
                    className="w-full bg-transparent"
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
                    className="w-full bg-transparent"
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
                    className="w-full bg-transparent focus:ring-2"
                    type="password"
                    placeholder="Confirm password"
                    required
                    name="password"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-green-500 p-2 rounded-lg text-white hover:bg-gray-700 duration-300"
              disabled={loading} // Disables the button when loading
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>

            <div className="text-xs mt-2 text-center">
              By creating an account you agree to the{" "}
              <Link to="/PrivacyPolicy">
                <span className="font-bold underline">Terms and Services</span>
              </Link>
              . We will occasionally send you account-related emails.
            </div>

            <div className="flex justify-center mt-4 text-sm">
              <span>Already have an account?</span>
              <Link to="/LoginForm">
                <span className="text-green-600 ml-2 hover:underline">
                  Login
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
