import React from 'react'
import banner from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse p-16 justify-between items-center gap-12 '>

<div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={banner} alt='' />
    </div>

    <div className='md:1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-medium md-7'>New Releases this week</h1>
        <p className='mb-10'>It's time to update your reading list with some of the latest and greatest Releases in the 
            literary world. From heart pumping thrillers to captivating memonies, this week's 
            new release offer something for everyone
        </p>

        <button className='btn-primary'>Subscribe</button>
    </div>

    </div>
  )
}

export default Banner