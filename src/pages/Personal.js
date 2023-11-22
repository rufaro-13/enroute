import React from 'react'
import personal from '../images/adult-male-waiting-recovery-session-start.jpg'
import { Helmet } from 'react-helmet-async'
function Personal() {
  return (
    <div>

        <Helmet>
            <title>Personal Care</title>
            <meta name="description" content="See our detailed personal care services"/>
            <link rel="canonical" href="/personal" />
        </Helmet>
         <section>
        <section class=" bg-cover bg-center bg-no-repeat bg-gray-200  bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-16 lg:py-20">
                <h1 class="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-darkbluetheme md:text-5xl lg:text-6xl">
                Personal Care</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-5 ">
                                <div class="md:w-1/2 col-span-1 px-2 ">
                                    <img class="rounded-lg md:h-92" src={personal}  alt="" />
                                </div>
                                <div class="md:w-1/2  sm:82 rounded-lg  border-2 border-bluetheme bg-bluetheme text-darkbluetheme sm:items-center sm:justify-center  mx-2 ">      
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                                        <p>
                                        Personal Care
                                        </p>
                                    </h5>
                                    <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                                        <p className='rounded-lg text-left '>
                                        
                                    
                                        <ul class="list-disc ml-6">
                                            <li>Help with getting up.</li>
                                            <li>Help with going to bed.</li>
                                            <li>Assistance with incontinence.</li>
                                            <li>Assistance with medication.</li>
                                            <li>Meal preparation, preparing hot /cold drinks and helping you to meet any dietary, religious or cultural requirements.</li>
                                            
                                        </ul>
                                        </p>

                                        
                                    </p>
                                </div>
                               
                            </div>
        </section>
        
        

        </section>

        


        </section>
    </div>
  )
}

export default Personal