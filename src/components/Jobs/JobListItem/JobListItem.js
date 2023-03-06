import JobItemCategories from './JobItemSections/JobItemCategories'
import JobItemInfo from './JobItemSections/JobItemInfo'

const JobListItem = ({job, getActiveFilters, getShowFilters}) => {

    return (
        <li className='jobs__item'>
            
            {/* if a job is featured, add a green border */}
            {job.featured &&
                <div className='jobs__item__border-right'></div>
            }

            <div className='jobs__item__left-section'>
                <div className='jobs__item__logo'>
                    <img src={job.logo} alt="company"/>
                </div>

                <JobItemInfo job={job}/>
            </div>

            {/* only for mobile and tablet */}
            <div className='separation-line'></div>

            <JobItemCategories 
                job={job} 
                getActiveFilters={getActiveFilters} 
                getShowFilters={getShowFilters}
            />            
        </li>
    )
}

export default JobListItem