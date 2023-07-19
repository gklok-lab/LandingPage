import React from 'react'
import { lowdhea } from '../assets'

const FeedbackCard2 = () => {
  return (
    <div className='bg-white p-11 rounded-2xl shadow-xl my-8 mx-3'>
      <div className='flex justify-between'>
        <div className='flex gap-12'>
                <img src={lowdhea} className="w-[250px] mx-auto" />
                <div>
                    <p class = "text-4xl">Normal ApoB levels</p>
                </div>
            </div>

      </div>

      <div className='py-9'>
        <h3 className='text-lg'>Normal ApoB levels (40-120 mg/dL) can indicate healthy cholesterol transport and clearance. ApoB levels towards the higher end of this range may begin to indicate suboptimal cholesterol clearance.    
        </h3>
      </div>
    </div>
  )
}

export default FeedbackCard2