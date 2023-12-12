/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import { Link } from "react-router-dom";
import domic from "../images/unrecognizable-elderly-man-being-assisted-walk-with-mobility-walker-nursing-home.jpg"
import { Helmet } from 'react-helmet-async';
import paliat from '../images/happy-nurse-serving-elderly-senior-man-breakfast-bed-bedroom-nursing-home-thumb-up.jpg'
import respite from '../images/side-view-nurse-pushing-disabled-patient-wheel-chair.jpg'
import supported from '../images/social-worker-taking-care-senior-woman.jpg'
/* import serv from '../images/24-hours.gif' */
import vide from '../images/pexels-kampus-production-7517699 (720p).mp4'
function Home() {
  return (
    <div >
 {/* 'bluetheme':'rgb(245 208 254)', */}
        <Helmet>
            <title>Home </title>
            <meta name="description" content=" Enroute Care Ltd, the home of love and care."/>
            <link rel="canonical" href="/" />
        </Helmet>
       <section>
        <section class="container bg-cover bg-center bg-no-repeat bg-hero_pattern bg-gray-400 bg-blend-multiply ">
            
          <video class="video-fluid" controls autoPlay muted loop   >
            <source src={vide} type="video/mp4" />
             
          </video>
          <div class=" overlay px-4 mx-auto max-w-screen-xl text-center sm:py-16  lg:py-40">
                <h1 class=" text-4xl font-extrabold  tracking-tight leading-none text-sky-800 md:text-5xl lg:text-6xl">Enroute Care Ltd,</h1>
                <p class=" text-2xl font-bold text-sky-800  lg:text-4xl sm:px-16 lg:px-48">
                the home of quality care.
                    
                </p>
                <div class="flex flex-col space-y-4 rounded-lg border-solid border-navcolour sm:flex-row sm:justify-center pt-5 sm:space-y-0 sm:space-x-4">
                    
                   <p className='text-white  py-3 px-3 rounded-lg font-bold  border-navcolour text-1xl lg:text-3xl md:w-1/2'>
                   An affordable service which prioritises the comfort and wellbeing of clients.
                   </p>      
                </div> 

                
            </div>
        </section>
        {/* <div className=' text-center italic text-xs'><a  href=' https://www.pexels.com/video/a-woman-instructing-the-elderly-man-to-the-medicine-7517699/'>  Video by Kampus Production</a></div> */}

        <section>
            <div class=" px-4 mx-auto max-w-screen-xl text-center pt-4">

                <div class="px-4 mx-auto max-w-screen-xl text-center pt-6 flex ">
                    <h4 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-3xl">
                        The services we offer include:
                    </h4>

                    {/* <div className="mb-4 rounded-lg overflow-hidden sm:w-16 lg:mt-0 mt-0 sm:mt-0">
                        <img src={serv} alt="Residential Care" className="w-full lg:h-full h-12 object-cover" />
                    </div> */}
                </div> 

                <div class=" lg:flex grid  lg:grid-cols-2 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 item-stretch ">

                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-blue-100 col-span-1 rounded-lg bg-bluetheme  md:w-1/2 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-lg" src={domic} alt="old man sitting on a wheelchair" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p>
                            Domiciliary Care
                            </p>
                        </h5>
                        <p className=" text-sm md:text-lg text-darkbluetheme dark:text-blue-500 pt-4">
                            <p class='text-left'>
                                We help people maintain their quality of life and independence by providing a  
                                helping hand with household chores, personal care, medication or a companionship visit

                        
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-darkbluetheme ">
                                    Learn more
                                </Link>
                        </p>
                    </div>
                    

                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6  hover:scale-110 duration-300 hover:bg-blue-100 col-span-1 rounded-lg bg-bluetheme lg:w-1/2 md:w-1/2 mt-8 sm:items-center sm:justify-center">
                    
                        <img class="rounded-lg" src={paliat} alt="end of life care of a man with terminal illness" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p>
                            End-of-life Care
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            We provide physical, emotional, social, and spiritual support for patients and their families 
                            during defining moments of life.
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-10 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-darkbluetheme ">
                                    Learn more
                            </Link>
                        </p>
                        
                    </div>
                
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-blue-100 col-span-1 lg:w-1/2 rounded-lg bg-bluetheme md:w-1/3 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={respite} alt="young-doctor-helping-one-guy-stand-up" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p>
                            Respite Care
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                            <p class='text-left'>
                                We help family members get some relief in order to re-energise at peace by providing
                                temporary care services to their loved ones being looked after.
                           
                            </p>

                            <Link to="services" 
                                class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-darkbluetheme ">
                                    Learn more
                            </Link>
                        </p>
                    </div>

                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-blue-100 col-span-1 rounded-lg bg-bluetheme lg:w-1/2 md:w-1/3 mt-8 sm:items-center sm:justify-center">
                        <img class="rounded-t-lg" src={supported} alt="male-social-worker-taking-care-old-woman" />
                        <h5 className="md:text-2xl text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                            <p >
                            Supported Living
                            </p>
                        </h5>
                        <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                            <p class='text-left'>
                            Our Supported Living services enable people to live independently and manage their own tenancies, with support 
                            designed around their needs and goals.
                            </p>

                            <Link to="services" 
                                 class="inline-flex justify-center hover:text-gray-900 items-center mt-2 md:py-3 md:mt-3 py-2 px-5 text-white font-medium text-sm md:text-lg text-center
                                 text-blue rounded-lg border border-green hover:bg-green-300 focus:ring-4 focus:ring-green-400  bg-darkbluetheme ">
                                     Learn more
                                </Link>
                        </p>
                    </div>

                </div>
            </div>

        </section>
</section> 
    </div>
  )
}

export default Home