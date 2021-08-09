import { Typography } from '@material-ui/core'
import React from 'react'
import profileImage from '../../assets/images/profile.jpeg'
import CustomTimeline from '../Timeline/Timeline';

// Style
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile container-shadow'>
            <div className='profile-name'>
                <Typography className='name'>GIGAS</Typography>
                <Typography className='title'>Creative Developer</Typography>
            </div>

            <figure className='profile-image'>
                <img src={profileImage} alt='profile-image'/>
            </figure>

            <div className='profile-information'>
                <CustomTimeline/>
                <br />
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile
