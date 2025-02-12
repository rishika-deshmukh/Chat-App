import { useAppStore } from "@/store";  // Ensure correct capitalization

const Profile = () => {
  const { userInfo } = useAppStore();  // Ensure store is correctly set up

  if (!userInfo) {
    return <div>Loading user data...</div>;  // Handle case where userInfo is undefined
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>Email: {userInfo.email || "Not available"}</div>  
    </div>
  );
};

export default Profile;

