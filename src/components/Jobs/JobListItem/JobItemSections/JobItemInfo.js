const JobItemInfo = ({job}) => {
    return (
        <div className='jobs__item__info'>

            <div className='jobs__item__info_top'>
                <span className='jobs__item__info_company'>
                    {job.company}
                </span>

                {job.new && <span className='jobs__item_new'>NEW!</span>} 
                {job.featured && <span className='jobs__item_featured'>FEATURED</span>}
            </div>

            <div className='jobs__item__info_position'>
                {job.position}
            </div>

            <div className='jobs__item__info_bottom'>
                {job.postedAt} 
                <span className='separator-dot'> &#9679; </span>
                {job.contract}
                <span className='separator-dot'> &#9679; </span>
                {job.location}
            </div>
            
        </div>
    )
}

export default JobItemInfo