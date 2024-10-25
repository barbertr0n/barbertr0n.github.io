import React from 'react';
import profilepic from '../assets/profile-pic.jpg';

const Profile = () => {
  return (
    <div id='profile-container'>
        <img src={profilepic} id='profile-picture' alt="image"/>
        <div id='profile-text-bloc'>
            <h3 id='name'>Thomas Barber</h3>
            <p id='profile-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}
export default Profile;