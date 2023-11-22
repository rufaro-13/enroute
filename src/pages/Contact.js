import React from 'react'
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText, FaLocationDot, FaMobileScreenButton, FaPhone,  } from 'react-icons/fa6';
import {Helmet} from 'react-helmet-async'
//import  Map from '../components/Map'

function Contact() {

  /* const location={
    address: '40 Capmartin Road, Coventry CV6 3FY, UK',
    lat: 52.4279443,
    lng: -1.5136305, */
//}
  return (
    <div>

<Helmet>
            <title>Enroute Care Contacts</title>
            <meta name="description" content="Get in touch with us in the provided contact information"/>
            <link rel="canonical" href="/contact" />
        </Helmet>
        <section>
            <div class=" lg:px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="lg:px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-darkbluetheme md:text-3xl lg:text-3xl">
                    Contacting Enroute Care
                    </h4>
                </div> 

                <div class="sm:flex sm:items-center sm:justify-center lg:mx-8 mt-2 px-5">
                  <p class=" font-normal text-sm md:text-lg text-darkbluetheme">
                      To request more information, please give us a call or email us. We would love to speak to you regarding
                      our experienced support carers that can help you deliver excellent services to your business and clients.
                  
                  </p>
                  <br/>
            
                </div>

                <div className='md:mx-4 lg:flex'>
                  <div className='lg:w-full '> 
                    <div class=" grid lg:grid-cols-2 lg:gap-12  md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-2 pt-4 items-center sm:items-center sm:justify-center mx-4  lg:mx-2 mt-1">
                    
                    <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                        <IconContext.Provider value={{ color: '#ff0000', size: '50px', padding:'5px 2px' }}>
                            <a href="mailto:info@veemuhealthcare.co.uk"><div class="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center  mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black text-2xl font-bold"><a href="mailto:info@veemuhealthcare.co.uk" className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                            info@veemuhealthcare.co.uk

                            </p>
                          </div>
                    </div>

                    <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                          <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:07427494551"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black  "><a href="tel:0795 419 2764" 
                            className="block py-2  underline text-black rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mobile: 07427494551</a></span></div>
                            
                            </p>
                          </div>

                          

                    </div>

                    {/* <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:07463 372 8971"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          

                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black "><a href="tel:07463 372 8971" 
                            className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call Us</a></span></div>
                            Mobile: 07463 372 8971
                            </p>
                          </div>

                    </div> */}

                    <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                          <IconContext.Provider value={{ color: '#339933', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:0203 534 0955"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaPhone class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black "><a href="tel:02477981121" 
                            className="block py-2  underline text-black rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Landline:  0203 534 0955</a></span></div>
                          
                            </p>
                          </div>

                    </div>


                    <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                          <IconContext.Provider value={{ color: '#89cff0', size: '50px', padding:'5px 2px' }}>
                            <a href="https://www.google.com/maps/place/19+Albert+Square,+London+E15+1HJ,+UK/@51.6118925,0.0336148,11z"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaLocationDot class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                              <div>
                                <span class="text-black text-2xl font-bold">
                                  <a href="https://www.google.com/maps/place/19+Albert+Square,+London+E15+1HJ,+UK/@51.6118925,0.0336148,11z" 
                                      className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visit Us</a></span></div>
                                      VEEMU HealthCare Limited<br/>19 Albert Square<br/>
                                      Stratford 
                                      London
                                      <br/>E15 1HJ
                            </p>
                          </div>

                    </div>
                </div>
                </div>
                </div>

                

        
         
         <div>

         {/* <MapSection location={location} zoomLevel={17} /> */}
         </div>
            
          

            </div>
        </section>
    </div>
  )
}

export default Contact