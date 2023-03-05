import React, { useState } from 'react'
import Filters from '../Filters/Filters';
import Jobs from '../Jobs/Jobs';

const Main = () => {
    
    const [activeFilters, setActiveFilters] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    const getActiveFilters = filter => {
        // add the filter only if it is NOT already present
        if (!(activeFilters.includes(filter))) {
            setActiveFilters([...activeFilters, filter]);
        }
    }

    const removeFilter = filter => {
        const filteredArray = activeFilters.filter(activeFilter => activeFilter !==  filter)
        setActiveFilters(filteredArray);
        
        // if there are no filter left, close the filter bar
        if (filteredArray.length === 0) {
            setShowFilters(false);
        }
    }

    const clearFilters = () => {
        setActiveFilters([])
    }

    const getShowFilters = show => {
        setShowFilters(show)
    }

    return (
        <main className='main-container'>
            <Filters 
                filters={activeFilters} 
                removeFilter={removeFilter}
                clearFilters={clearFilters}
                show={showFilters}
                getShowFilters={getShowFilters}
            />
            <Jobs 
                getActiveFilters={getActiveFilters}
                activeFilters={activeFilters}
                getShowFilters={getShowFilters}
            />
        </main>
    )
}

export default Main