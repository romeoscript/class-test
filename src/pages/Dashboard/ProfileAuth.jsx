import React  from "react";
import "../../assets/dashboardcss/profileauth.scss";
import Wrapper from "../../components/wrapper/Wrapper";
import ProfileInfo from "../../components/Dashboard/ProfileInfo";
import ProfileSettings from "../../components/Dashboard/ProfileSettings";

import ProfileSidebar from "./ProfileSidebar";

const ProfileAuth = () => {
 
  return (
    <Wrapper>
      <div className="profile__wrapper">
        <ProfileSidebar />
        <aside className="profile__information">
          <ProfileInfo />
          <ProfileSettings />
        </aside>
      </div>
    </Wrapper>
  );
};

export default ProfileAuth;
