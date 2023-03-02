import React from 'react'
import JobListCategories from './JobListSections/JobListCategories'
import JobListInfo from './JobListSections/JobListInfo'

const JobListItem = ({job}) => {
    return (
        <li className='job-list__item'>
            {/* if a job is featured, add a green border */}
            {job.featured &&
                <div className='job-list__border-right'></div>
            }

            <div className='job-list__logo'>
                <img src={job.logo} alt="company"/>
            </div>
            
            <JobListInfo job={job}/>

            <div className='separation-line'></div>

            <JobListCategories job={job}/>            
        </li>
    )
}

export default JobListItem