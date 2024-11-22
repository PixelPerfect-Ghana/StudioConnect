import PagesLayout from "../../layout/PagesLayout";
import { apiGetProfile } from "../../services/auth";
import { apiGetUserStudio } from "../../services/studios";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const Home = () => {
  const userRole = localStorage.getItem("role");

  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState();

  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const response = await apiGetProfile();
      setProfile(response.data);
    } catch (error) {
      console.error("Error creating studio", error);
      toast.error("Failed to fetch profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchStudioProfile = async () => {
    setLoading(true);
    try {
      const response = await apiGetUserStudio();
      setProfile(response.data[0]);
    } catch (error) {
      console.error("Error creating studio", error);
      toast.error("Failed to fetch studio profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userRole === "user") fetchUserProfile();
    else fetchStudioProfile();
  }, [userRole]);
  return (
    <PagesLayout loading={loading}>
      {userRole === "vendor" && (
        <div className="flex flex-col w-full">
          <h1 className="text-4xl font-bold">
            Welcome to the {profile?.name} Dashboard!
          </h1>
          <p className="mt-4 text-gray-700">
            Manage your studios, bookings, and user interactions here.
          </p>
        </div>
      )}
      {userRole === "user" && <div>User Content here</div>}
    </PagesLayout>
  );
};

export default Home;
