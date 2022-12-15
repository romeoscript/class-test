import React from 'react'
import '../../assets/dashboardcss/profileauth.scss'


const ProfileSettings = () => {
  return (
    <div className='profilesetting'>
      <h3>other settings</h3>
      <ul>
        <li>2Fa Verification</li>
        <li>Update Bank Details</li>
        <li>Edit Profile Information</li>
        <li>Change Password</li>
        <li>Theme</li>
      </ul>
    </div>
  )
}

export default ProfileSettings