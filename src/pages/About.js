import React from 'react'
import { Helmet } from 'react-helmet-async';
import {TbTargetArrow,TbStarFilled} from 'react-icons/tb'
import {HiLightBulb} from 'react-icons/hi'
import { IconContext } from "react-icons";

function About() {
  return (
    <div>

     <Helmet>
            <title>About Veemu HealthCare Ltd</title>
            <meta name="description" content="Providing person centred care and support to all our service users with a range of care and support needs.
                        "/>
            <link rel="canonical" href="/about" />
        </Helmet>
      <section>
            <div class=" px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-5xl">
                       About US
                    </h1>

                    
                </div>

                <div class="md:flex pt-4 pb-4 bg-bluetheme">

                    <div class="md:w-1/2  sm:82 rounded-lg   sm:items-center sm:justify-center   mx-2 ">
                        <div class='flex ml-4'>
                        <h5 class=" mb-4 text-2xl font-bold tracking-tight leading-none text-center text-titleblue md:text-3xl lg:text-4xl pt-2">
                           Our Mission <br/><br/>
                        </h5>
                        <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                            <div class="  sm:items-center sm:justify-center    mb-4">
                              <TbTargetArrow class="sm:items-center sm:justify-center  "/>
                            </div>
                          </IconContext.Provider>
                       </div>

                        <p class="pl-4 font-normal text-darkbluetheme text-sm md:text-lg">
                        
                        To provide a high standard of care and support to all our service users promoting their wellbeing.
                        Providing person centred care and support to all our service users with a range of care and support needs.
                         Our team of healthcare professionals is there to provide care and support 24/7.


                        <br/><br/>

                        </p>

                    </div>

                    <div class="md:w-1/2  sm:82 rounded-lg   sm:items-center sm:justify-center   mx-2 ">
                        <div class='flex ml-4'>
                        <h5 class=" mb-4 text-2xl font-bold tracking-tight leading-none text-center text-titleblue md:text-3xl lg:text-4xl pt-2">
                           Our Vision <br/><br/>
                        </h5>
                        <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                            <div class="  sm:items-center sm:justify-center    mb-4">
                              <HiLightBulb class="sm:items-center sm:justify-center  "/>
                            </div>
                          </IconContext.Provider>
                       </div>

                        <p class="pl-4 font-normal text-darkbluetheme text-sm md:text-lg">
                        
                        VEEMU will be a recognised leader in improving the quality of health care in the communities we serve .<br/>
                        To become providers of choice.


                        <br/><br/>

                        </p>

                    </div>

                </div>

                <div class="md:flex pt-4 pb-4">

                     

                    <div class="md:w-full  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-2 ">
                        <h5 class="mx-auto mb-4 text-2xl font-bold tracking-tight leading-none text-center text-darkbluetheme md:text-3xl lg:text-5xl pt-2">
                           Our Values <br/><br/>
                        </h5>
                        <div class="  grid  lg:grid-cols-2 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">
                       
                            <div class='flex col-span-1'>
                                <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-4">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            

                                <p class="pl-4 font-medium text-darkbluetheme text-sm md:text-lg">
                                
                                <b>Independence -</b> We prioritize our service users' independence.

                                <br/><br/>

                                </p>

                            </div>

                            <div class='flex col-span-1'>
                                <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-4">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="pl-4 font-medium text-darkbluetheme text-sm md:text-lg">
                                
                                <b>Individuality -</b> Each person is supported and taken care of according to their care needs, following their care and support plan.

                                <br/><br/>

                                </p>


                            </div>

                            <div class='flex col-span-1'>
                                <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-4">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="pl-4 font-medium text-darkbluetheme text-sm md:text-lg">
                                
                                <b>Person Centred Care -</b> VEEMU is flexible enough to be guided by the service user. We can work with each individual's 
                                care plan.

                                <br/><br/>

                                </p>

                            </div>

                            <div class='flex col-span-1'>
                                <IconContext.Provider value={{ color: '#9E8604', size: '50px', padding:'1px ' }}>
                                    <div class="  sm:items-center sm:justify-center    mb-4">
                                    <TbStarFilled class="sm:items-center sm:justify-center  "/>
                                    </div>
                                </IconContext.Provider>
                            
                                <p class="pl-4  text-darkbluetheme font-medium text-sm md:text-lg">
                                
                                <b>Choice -</b> At VEEMU HealthCare Limited we value everyone's hapiness and comfort. 
                                Service users are free to choose the services they want and how they want them .

                                <br/><br/>

                                </p>

                            </div>
                        </div>
                        
                    </div> 

                </div>

            </div>
      </section> 
    </div>
  )
}

export default About