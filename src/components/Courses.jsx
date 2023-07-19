import React from 'react'

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
  ]
  };

  return (
    <div className='w-full bg-[#FBF2DE] py-20'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='text-center'>
            <h1 class="mb-4 text-5xl font-light">Natural ways to reduce ApoB</h1>
            </div>
            
<div class="container my-24 mx-auto md:px-6">
 
  <section class="mb-32">
    <div class="flex flex-wrap items-center">
      <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-5 lg:mb-0 lg:w-3/12">
        <div class="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://thumbs.dreamstime.com/z/seasonal-fruit-vegetables-greens-over-wooden-background-vertical-composition-summer-food-flat-lay-white-top-view-copy-space-127309298.jpg?w=576" class="w-full" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
              <div class="flex h-full items-center justify-center">
                <div class="px-6 py-12 text-center text-white md:px-12">
                  <h3 class="mb-6 text-2xl font-bold uppercase">
                    The future is
                    <u class="text-[hsl(197,12%,80%)]"> now</u>
                  </h3>
                  <p class="font-normal">
                  Reducing ApoB (apolipoprotein B) levels is important for maintaining heart health and preventing cardiovascular diseases. Here are some natural ways to help lower ApoB levels:
                  </p>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              </div>
            </div>
          </a>
        </div>
      </div>
    
      <div class="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-6/12 ">
        <div class="mb-12 flex">
          <div class="shrink-0">
            <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(90,73%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
          </div>
          
          <div class="ml-4 grow ">
            <p class="mb-2 font-bold">Reduce foods high in saturated fats:
            </p>
            <p class="text-neutral-500 dark:text-neutral-900">
            Reduce foods high in saturated fat: Eating foods high in saturated fat is associated with elevated ApoB levels. Aim to reduce intake of red and processed meats to support ApoB levels.
            </p>
          </div>
        </div>

        <div class="mb-12 flex">
          <div class="shrink-0">
            <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(90,73%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" fill="#3878F6" />
              </svg>
            </div>
          </div>
          <div class="ml-4 grow">
            <p class="mb-1 font-bold">Opt for sources of unsaturated fats</p>
            <p class="text-neutral-500 dark:text-neutral-900">
            Unsaturated fats, also known as “healthy fats” support optimal cholesterol and ApoB levels. Aim to incorporate unsaturated fats like olive oil, avocados, and flaxseed to support ApoB levels.
            </p>
          </div>
        </div>

        <div class="mb-12 flex">
          <div class="shrink-0">
            <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(90,73%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
          </div>
          <div class="ml-4 grow">
            <p class="mb-1 font-bold">Eat fiber-rich foods</p>
            <p class="text-neutral-500 dark:text-neutral-900">
            Eat fiber-rich foods: Fiber is an important nutrient that contributes to optimal cholesterol levels and is critical in supporting ApoB levels. Oats and beans are two excellent food sources of soluble fiber—and research suggests that regular consumption of these foods is effective at lowering ApoB levels.
            </p>
          </div>
        </div>

        <div class="flex">
          <div class="shrink-0">
            <div class="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(90,73%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
          </div>
          <div class="ml-4 grow">
            <p class="mb-1 font-bold">Try out a new supplement</p>
            <p class="text-neutral-500 dark:text-neutral-900">
            Certain supplements can also benefit your ApoB levels. Studies show that taking a psyllium husk or plant sterol supplement can reduce elevated ApoB levels. Other supplements like artichoke extract and spirulina are also studied for their impact on ApoB. [10, 11] Always consult with a healthcare professional before adding a new supplement to your routine.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</div>

            
        </div>

    </div>
  )
}

export default Courses