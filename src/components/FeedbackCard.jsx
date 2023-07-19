import React from 'react'
import { apobheart } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-12'>
                <img src={apobheart} className="w-[250px] mx-auto" />
                <div>
                    <p class = "text-4xl">What is ApoB?</p>
                </div>
            </div>

      </div>

      <div className='py-8'>
        <h3 className='text-lg'>ApoB is a structural protein, found on all potential atherogenic(or plaque-forming) particles. So an ApoB blood test is a direct measure of the concetration of all atherogenic particles, including LDL cholesterol as well as other cholesterol markers.</h3>
      </div>
    </div>
  )
}

export default FeedbackCard