import React from 'react';
import { siPngshadow } from '../assets';


const Hero = () => {
  return (
    <div className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-4'>
            
            <div className='flex flex-col justify-start gap-5'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'></p>
                <h1 className='md:leading-[72px] py-1 md:text-6xl text-5xl font-semibold'> How are <span className='text-[#20B486]'>apolipoproteins </span> linked to 
                     <span  className='text-[#20B486]'>  longevity</span>  
                   
                </h1>
                <p className='py-2 text-lg text-gray-600'>It has been established for almost 20 years that ApoB is a better predictor of heart disease than LDL cholesterol. We make it easy to track both, along with ApoA1 and HDL (good cholesterol).</p>
                <a href="https://siphoxhealth.com/pages/yourjourney" target="_blank" rel="noopener noreferrer">
                <button class="bg-transparent hover:bg-green-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-green-500 hover:border-transparent rounded">
               TEST APOB + 16 OTHER KEY BIOMARKERS FROM HOME.
                </button>
                </a>
            </div>            
            <img  src={siPngshadow} className="md:order-last  order-first " />
            
        </div>
       
    </div>
  )
}

export default Hero