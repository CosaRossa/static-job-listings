const JobItemCategories = ({job, getActiveFilters, getShowFilters}) => {

    const categories = [job.role, job.level, ...job.languages, ...job.tools];

    const selectFilter = (e) => {
        // show active filters
        getShowFilters(true);

        // add the selected filter
        const filter = e.currentTarget.dataset.value;
        getActiveFilters(filter)
    }

    return (
        <div className='jobs__list__categories'>
            <ul className='categories__list'>
                {categories && categories.map((category, i) => (
                    <li 
                        className="categories__item" 
                        key={i}
                        data-value={category}
                        onClick={(e) => selectFilter(e)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JobItemCategories