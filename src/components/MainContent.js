import React from 'react'
import data from '../data/data.json';
import JobListItem from './JobListItem/JobListItem';

const MainContent = () => {
    const jobs = data;

    return (
        <main className='main-container'>
            <ul className='job-list'>
                {jobs && jobs.map((job, i) => (
                    <JobListItem job={job} key={i} />
                ))}
            </ul>
        </main>
    )
}

export default MainContent