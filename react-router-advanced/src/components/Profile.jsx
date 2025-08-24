import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Nested components
const ProfileDetails = () => <p>This is the Profile Details page.</p>;
const ProfileSettings = () => <p>This is the Profile Settings page.</p>;

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
