import { Typography } from '@material-ui/core';
import {
    Timeline as MuiTimeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
} from '@material-ui/lab'
import React from 'react'

// Style
import './Timeline.css';

const Timeline = (props) => {

    const { title, icon, children } = props;

    return (
        <MuiTimeline className='timeline'>
            {/* Header */}
            <TimelineItem className='timeline-first'>
                <TimelineSeparator>
                    <TimelineDot className='timeline-dot-header'>
                        {icon}
                    </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' className='timeline-header'>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {children}
        </MuiTimeline>
    )
}

export const CustomTimelineSeparator = () => {
    return (
        <TimelineSeparator className='separator-padding'>
            <TimelineDot variant='outlined' className='timeline-dot' />
            <TimelineConnector />
        </TimelineSeparator>
    )
}

export default Timeline
