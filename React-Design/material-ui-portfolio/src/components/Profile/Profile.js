import { Typography } from '@material-ui/core'
import React from 'react'
import profileImage from '../../assets/images/profile.jpeg'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';

import resumtData from '../../utils/resumtData';

// Style
import './Profile.css';
import { CloudDownload, Person } from '@material-ui/icons';
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import Button from '../Button/Button';

const CustomTilelineItem = ({ title, text, link }) => {
    return (
        <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className='timeline-content'>
                <Typography className='timeline-text'><span>{title}:</span> {text}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

const Profile = () => {
    return (
        <div className='profile container-shadow'>
            <div className='profile-name'>
                <Typography className='name'>{resumtData.name}</Typography>
                <Typography className='title'>{resumtData.title}</Typography>
            </div>

            <figure className='profile-image'>
                <img src={profileImage} alt='profile-image'/>
            </figure>

            <div className='profile-information'>
                <CustomTimeline
                    icon={<Person />}
                >
                    <CustomTilelineItem title={'Name'} text={resumtData.name} />
                    <CustomTilelineItem title={'Title'} text={resumtData.title} />
                    <CustomTilelineItem title={'Email'} text={resumtData.email} />

                    {Object.keys(resumtData.socials).map((key) => {
                        return (
                            <CustomTilelineItem
                                title={key}
                                text={resumtData.socials[key].text}
                            />
                        )
                    })}
                </CustomTimeline>
                <div>
                    <Button
                        text='Download CV'
                        icon={<CloudDownload/>}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile
