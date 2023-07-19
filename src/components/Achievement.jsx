import React from 'react'
import { testing, award, savings, mark } from '../assets'


const Achievement = () => {
  return (
    <div className='w-full bg-[#FBF2DE] py-50'>
        <div className='md:max-w-[1880px] m-auto grid md:grid-cols-1 max-w-[700px]  px-1 md:px-1'>
      
<div class="container my-33 mx-auto md:px-20">

  <section class="mb-32 text-center">
    <div class="flex justify-center">
      <div class="max-w-[700px] text-center">
        <h2 class="mb-6 text-center text-4xl font-light">
        Why choose <u class="text-primary dark:text-primary-400">
        SiPhox Health?</u>
        </h2>
        <p class="mb-6 text-neutral-500 dark:text-neutral-700">
        The lowest cost per biomarker testing, at-home sample collection,
interactive reports and actionable insights.
        </p>
      </div>
    </div>

    <div class="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
      <div class="mb-12 lg:mb-0">
        <div class="mb-7 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
          <img src={testing}/>
        </div>
        <h5 class="mb-4 text-lg font-bold">Support 24/7</h5>
        <p class="text-neutral-500 dark:text-neutral-600">
        No more driving to clinics. No more waiting in lines. The sample collection kit lets you collect your sample using only a few drops of blood
        </p>
      </div>

      <div class="mb-12 lg:mb-0">
        <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
        <img src={savings}/>
        </div>
        <h5 class="mb-4 text-lg font-bold">Safe and solid</h5>
        <p class="text-neutral-500 dark:text-neutral-600">
        Blood testing is expensive. But it shouldn't be. Meet SiPhox Health, the lowest cost per-biomarker test on the market (17 biomarkers for $95).
        </p>
      </div>

      <div class="mb-12 md:mb-0">
        <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
        <img src={mark}/>
        </div>
        <h5 class="mb-4 text-lg font-bold">Extremely fast</h5>
        <p class="text-neutral-500 dark:text-neutral-600">
        Users tell us that regular testing is key to reaching their goals. Whether you want to lose weight or have more energy—we have your back!
        </p>
      </div>

      <div class="mb-12 md:mb-0">
        <div class="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
        <img src={award}/>
        </div>
        <h5 class="mb-4 text-lg font-bold">Live analytics</h5>
        <p class="text-neutral-500 dark:text-neutral-600">
        Personalized insights sets you up for success. Paired with your favorite wearables, our system creates insights to improve each biomarker.
        </p>
      </div>
    </div>
  </section>
  
</div>

</div>
        

    </div>
  )
}

export default Achievement