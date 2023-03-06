import { useCallback, useEffect, useState } from 'react'
import data from '../../data/data.json';
import JobListItem from './JobListItem/JobListItem';

const Jobs = ({getActiveFilters, getShowFilters, activeFilters}) => {

    const jobs = data;
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    const filterJobs = useCallback(() => {
        if (activeFilters.length === 0) {
            return setFilteredJobs(jobs);
        }

        setFilteredJobs(jobs) // reinitialize the filtered jobs to its original value
        let filteredJobArray = []; // create an empty array to fill in later

        jobs.forEach((job) => {
            // create an array with all types of categories
            const categories = [job.role, job.level, ...job.languages, ...job.tools];

            let isThere = false; // flag variable

            // cycle through activeFilters
            for (let i = 0; i < activeFilters.length; i++) { 
                if (categories.includes(activeFilters[i])) { 
                    isThere = true;
                }
                else {
                    isThere = false;
                    break;
                }
            }

            // only if every filters are contained in the job's categories, add the job
            if (isThere) {
                filteredJobArray.push(job)
            }
        })

        setFilteredJobs(filteredJobArray);
    }, [activeFilters, jobs])

    useEffect(() => {
        filterJobs();
    }, [activeFilters, filterJobs])

    return (
        <div className='jobs'>
            <ul className='jobs__list'>
                {filteredJobs && filteredJobs.map((job, i) => (
                    <JobListItem 
                        job={job} 
                        key={i} 
                        getActiveFilters={getActiveFilters}
                        activeFilters={activeFilters}
                        getShowFilters={getShowFilters}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Jobs