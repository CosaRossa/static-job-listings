import React from 'react'

const JobListInfo = ({job}) => {
    return (
        <div className='job-list__info'>
            <div className='job-list__info_top'>
                <span className='job-list__info_company'>
                    {job.company}
                </span>

                {job.new && <span className='job-list__info_new'>NEW!</span>} 
                {job.featured && <span className='job-list__info_featured'>FEATURED</span>}
            </div>
            <div className='job-list__info_position'>
                {job.position}
            </div>
            <div className='job-list__info_bottom'>
                {job.postedAt} 
                <span className='separator-dot'> &#9679; </span>
                {job.contract}
                <span className='separator-dot'> &#9679; </span>
                {job.location}
            </div>
        </div>
    )
}

export default JobListInfo