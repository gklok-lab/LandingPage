import React from 'react'

import { pic1,pack, arrow, dash, wear1} from '../assets'

const CTA = () => {
  return (
    <div className='w-full bg-[#FBF2DE] py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-1 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
    <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
    <h3 class="mb-6 text-5xl font-bold">17 included biomarkers</h3>
    <p class="mb-6 pb-2 md:mb-12 md:pb-0">
    Our at-home test kit contains the biomarkers you need to provide you with the best overall snapshot of your health
    </p>
  </div>
   
<div class="container my-1 mx-auto md:px-9">
  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.66),0_10px_20px_-2px_rgba(0,0,0,0.55)] bg-[#E9F8F3B2]">
      <div class="flex flex-wrap items-center">
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src={pic1} 
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-4xl font-bold">
            Is a few drops of blood really enough?
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-600">
            That's right! A few drops of blood is all we need to test 17 biomarkers. Sounds too good to be true? Far from it...
             Our sample collection card, the ADX100[1], is an alternative collection method, similar to an SST tube.
            </p>
            <p class="text-neutral-500 dark:text-neutral-600">
            Red blood cells are separated without a centrifuge, enabling the laboratory to perform tests on dry blood.
             Are results accurate? Yes! We process samples in a 3rd party CLIA-certified lab. The test results have been cross-validated against standard finger prick and venous draws.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="mx-auto text-center md:max-w-xl lg:max-w-2xl">
    <p class="mb-6 pb-12 md:mb-12 md:pb-1"> <img src={arrow}/>
   </p>
  </div>
<div class="container my-2 mx-auto md:px-9">
  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.66),0_10px_20px_-2px_rgba(0,0,0,0.55)] bg-[#E9F8F3B2]">
      <div class="flex flex-wrap items-center">
        
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-4xl font-bold">
            Can I really collect my own sample?
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-600">
            Each kit contains a sample collection card, three adjustable lancets, band-aids, sterile gauze, an alcohol pad, and instructions.
            Drawing your blood sounds scary at first. Especially if it's your first time doing it. We've taken the time to make the instructions as easy to follow as possible.
            </p>
            <p class="text-neutral-500 dark:text-neutral-600">
            Not only that, every customer can schedule a live one-on-one session with our certified phlebotomist for FREE (a person trained in collecting blood samples).
            </p>
          </div>
        </div>
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src={pack} 
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
          </div>
      </div>
      
    </div>
  </section>
 
</div>
<div class="mx-auto text-center md:max-w-xl lg:max-w-2xl">
    <p class="mb-6 pb-12 md:mb-12 md:pb-1"> <img src={arrow}/>
   </p>
  </div>
<div class="container my-1 mx-auto md:px-9">
  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.66),0_10px_20px_-2px_rgba(0,0,0,0.55)] bg-[#E9F8F3B2]">
      <div class="flex flex-wrap items-center">
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src={dash} 
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-4xl font-bold">
            Ok, my results are in. What now?
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-600">
            This is the best part! After processing your sample, we create a complete report for each of your 17 biomarkers.
            You can then access your reports from your personal reports dashboard. Each report comes with an easy-to-understand graph and personalized insights you can use to improve each biomarker.
            </p>
            <p class="text-neutral-500 dark:text-neutral-600 ">
            The dashboard lets you connect your favorite wearables to make your reports even more insightful. Improved sleep and activity scores are highly correlated with improved hormonal balance and lower inflammation in our user base.</p>
          </div>
          <button class="bg-[#E9F8F3B2] hover:bg-green-500 text-black-700 font-semibold hover:text-black md-4 py-3 px-32 border border-green-500 hover:border-transparent rounded">
               TRACK AND IMPROVE SLEEP,ACTIVITY, AND BLOOD MARKERS IN A SINGLE DASHBOARD
          </button>
        </div>
      </div>
    </div>
  </section>

  <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
  <p class="mb-6 pb-2 md:mb-2 md:pb-0">
    CORRELATE YOUR DATA
    </p>
    <h3 class="mb-6 text-5xl font-bold">Include your wearable</h3>
  </div>
</div>

<div class="container my-2 mx-auto md:px-9">
  <section class="mb-32">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.66),0_10px_20px_-2px_rgba(0,0,0,0.55)] bg-[#E9F8F3B2]">
      <div class="flex flex-wrap items-center">
        
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-4xl font-bold">
            </h2>
            <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-600">
            Having apps included in wearable smartwatches offers numerous benefits that enhance our health and well-being. Firstly, these apps provide real-time health monitoring, enabling users to track vital signs like heart rate, blood pressure, and sleep patterns on the go. This continuous monitoring allows for early detection of potential health issues and empowers individuals to take proactive measures to improve their overall health. Secondly, apps on smartwatches can facilitate telemedicine and remote patient monitoring, enabling healthcare professionals to remotely monitor patients and provide timely interventions, especially in critical situations. Additionally, these apps can deliver personalized health insights and recommendations, promoting healthier habits and lifestyles. Overall, the integration of apps into smartwatches brings convenience, accessibility, and improved healthcare management right to our wrists, ultimately leading to better health outcomes for users.
          </p>
            <p class="text-neutral-500 dark:text-neutral-600">
           
            </p>
          </div>
        </div>
        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/13 xl:w-4/12">
          <img src={wear1} 
            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
          </div>
      </div>
      
    </div>
  </section>



<div class="container my-24 mx-auto md:px-6 xl:px-24">

  <section class="mb-32">
    <h2 class="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>
    <div id="accordionFlushExample">
      <div class="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingOne">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
            type="button" data-te-collapse-init data-te-target="#flush-collapseOne" aria-expanded="false"
            aria-controls="flush-collapseOne">
           Is the SiPhox Health blood test kit equivalent to standard labs?
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseOne" class="!visible border-0" data-te-collapse-item data-te-collapse-show
          aria-labelledby="flush-headingOne" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-neutral-500 dark:text-neutral-700">
          Yes, we work with a CLIA/CAP accredited lab that performs extensive validation on each assay to meet federal CLIA requirements.
          </div>
        </div>
      </div>
      <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingTwo">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
            aria-expanded="false" aria-controls="flush-collapseTwo">
           Which biomarkers are being tested?
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseTwo" class="!visible hidden border-0" data-te-collapse-item
          aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
          </div>
        </div>
      </div>
      <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingTwo">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
            aria-expanded="false" aria-controls="flush-collapseTwo">
              Why should I use a wearable with SiPhox Health?
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseTwo" class="!visible hidden border-0" data-te-collapse-item
          aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
          </div>
        </div>
      </div>
      <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingTwo">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
            aria-expanded="false" aria-controls="flush-collapseTwo">
            What are the different types of subscriptions?
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseTwo" class="!visible hidden border-0" data-te-collapse-item
          aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
          </div>
        </div>
      </div>
      <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingTwo">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
            aria-expanded="false" aria-controls="flush-collapseTwo">
            What wearable devices are compatible with SiPhox Health?
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseTwo" class="!visible hidden border-0" data-te-collapse-item
          aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
          </div>
        </div>
      </div>
      <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
        <h2 class="mb-0" id="flush-headingTwo">
          <button
            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
            aria-expanded="false" aria-controls="flush-collapseTwo">
            How do I view my test results?
            <span
              class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </button>
        </h2>
        <div id="flush-collapseTwo" class="!visible hidden border-0" data-te-collapse-item
          aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
          <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
          </div>
        </div>
      </div>
    </div>
    
  </section>
  
</div>

 
</div>




    </div>
    

</div>
  )
}

export default CTA