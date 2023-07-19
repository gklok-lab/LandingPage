import React from 'react'
import Slider from "react-slick";
import FeedbackCard from './FeedbackCard';
import FeedbackCard2 from './FeedbackCard2';
import FeedbackCard3 from './FeedbackCard3';

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };

  return (
    <div className='w-full bg-[#FBF2DE] py-3'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-1'>
              <h1 className='py-3 text-4xl font-bold '> <span className='text-[#1F2937]'> </span></h1>
            </div>
            
            <Slider {...settings} >
            
                <FeedbackCard />
                <FeedbackCard2 />
                <FeedbackCard3 />



              

            </Slider>
            
        </div>

    </div>
  )
}

export default Feedback