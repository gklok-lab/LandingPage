import React from 'react'
import { man } from '../assets'

const FeedbackCard3 = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-12'>
                <img src={man} className="w-[250px] mx-auto" />
                <div>
                    <p class = "text-4xl">Connection to heart disease</p>
                </div>
            </div>

      </div>

      <div className='py-2'>
        <h3 className='text-lg'>Studies show that high ApoB levels are associated with an increased risk for atherosclerosis (plague build-up in the arteries), which, left untreated, increase the risk of heart disease.</h3>
        <h3 className = 'text-lg'> And because heart disease is the leading cause of death in the US, addresing ApoB and making cardioprotective lifestyle modifications is critical to living healthier longer</h3>
      </div>
    </div>
  )
}

export default FeedbackCard3