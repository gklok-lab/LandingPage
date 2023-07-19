import React from 'react'
import { logoo } from '../assets'
import {FaFacebookF,FaDribbble,FaLinkedinIn,FaInstagram,FaBehance} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#404650] py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
                <img src={logoo} className="h-[50px]" />

                <h3 className='text-3xl font-bold mt-10 text-[#34A4CA]'>OUR MISSION</h3>
                <h3 className='py-2 text-[#FDF8EF]'>By leveraging silicon photonic biosensors, <br></br>lower the cost of at-home health testing by 100x <br></br> and provide results instantly.</h3>
                <h3 className='py-2 text-[#FDF8EF]'>SiPhox, Inc. <br></br>111 Terrace Hall Avenue <br></br> Burlington MA 01803 US</h3>
                <div className='flex gap-4 py-4'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaFacebookF size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaDribbble size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={25} style={{color:'#4DC39E'}} /></div>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaBehance size={25} style={{color:'#4DC39E'}} /></div>

                </div>

            </div>

            <div>
                <h3 className='text-3xl font-bold text-[#]'>Explore</h3>
                <ul className='py-6 text-[#FDF8EF]'>
                    <li className='py-2'>Careers</li>
                    <li className='py-2'>About</li>
                    <li className='py-2'>Parter with us</li>
                    <li className='py-2'>Biomakers</li>
                    <li className='py-2'>Support</li>

                </ul>
            </div>

            <div className='max-[780px]:col-span-2'>
                <h3 className='text-3xl font-bold text-[#]'>Disclaimer</h3>
                <h3 className='py-5 text-[#FDF8EF]'>The reference ranges and insights presented in the SiPhox Health dashboard are meant to improve readability and provide context, however you should consult with your physician for a more formal interpretation of your results. No communication from SiPhox Health is meant to be or should be taken as medical advice. SiPhox Health is a wellness-only service and is not designed to diagnose or treat any disease. If you are concerned about any of the data in your dashboard please consult your physician immediately.</h3>
            </div>
        
        </div>
    </div>
  )
}

export default Footer