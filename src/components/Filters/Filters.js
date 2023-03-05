import React from 'react'

const Filters = ({filters, removeFilter, clearFilters, show, getShowFilters}) => {

  const hideFilters = () => {
    getShowFilters(false); // close the filter bar 
    clearFilters();
  }
  
  const handleRemoveFilter = e => {
    const filter = e.currentTarget.dataset.value; // get the value of the filter to remove
    removeFilter(filter);
  }

  return (
    <>
      {show &&
        <div className='filters'>
            <ul className='filters__list'>
              {filters && filters.map((filter ,i) => (
                <li className='filters__item' key={i}>
                  <span className='filters__item_text'>
                    {filter}
                  </span>
                  <span 
                    className='filters__item_remove' 
                    data-value={filter}
                    onClick={(e) => handleRemoveFilter(e)}
                  >
                    <span className='close-icon'>
                      &#215;
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div className='filters__clear' onClick={hideFilters}>Clear</div>
        </div>
      }
    </>
  )
}

export default Filters