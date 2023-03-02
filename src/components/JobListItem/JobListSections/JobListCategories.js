import React from 'react'

const JobListCategories = ({job}) => {

    const categories = [job.role, job.level, ...job.languages, ...job.tools]
    
    return (
        <div className='job-list__categories'>
            <ul className='categories-list'>
                {categories && categories.map((category, i) => (
                    <li className="categories-list__item" key={i}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default JobListCategories