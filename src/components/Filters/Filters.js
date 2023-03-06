import React from 'react'
import Filter from './Filter';

const Filters = ({filters, removeFilter, clearFilters, show, getShowFilters}) => {

  const hideFilters = () => {
    getShowFilters(false); // close the filter bar 
    clearFilters();
  }

  return (
    <>
      {show &&
        <div className='filters'>
            <ul className='filters__list'>
              {filters && filters.map((filter ,i) => (
                <Filter 
                  filter={filter} 
                  key={i}
                  removeFilter={removeFilter}
                />
              ))}
            </ul>
            <div className='filters__clear' onClick={hideFilters}>Clear</div>
        </div>
      }
    </>
  )
}

export default Filters