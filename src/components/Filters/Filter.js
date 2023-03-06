const Filter = ({filter, removeFilter}) => {

    const handleRemoveFilter = e => {
        const filter = e.currentTarget.dataset.value; // get the value of the filter to remove
        removeFilter(filter);
    }

    return (
        <li className='filters__item'>
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
    )
}

export default Filter