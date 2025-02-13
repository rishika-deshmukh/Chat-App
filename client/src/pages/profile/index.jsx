import { useAppStore } from "@/store";  // Ensure correct capitalization

const Profile = () => {
    return (
      <div>
        Profile
        <div>Email : {userInfo.id}</div>
        </div>
    );
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>Email: {userInfo.email || "Not available"}</div>  
    </div>
  );


export default Profile;

