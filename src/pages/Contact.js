import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';
import { HiMail } from 'react-icons/hi'
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText, FaLocationDot, FaMobileScreenButton  } from 'react-icons/fa6';
import {Helmet} from 'react-helmet-async'
//import  Map from '../components/Map'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1o8tg9l', 'template_9usimln', form.current, 'zsXeHFcXHb9-lLsjg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
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
                      You can also enquire about our services. Simply leave your contact information using the form below and we will 
                      get back to you as soon as possible.
                  </p>
                  <br/>
            
                </div>
                

                <div className='md:mx-4 lg:flex'>
                  <div className='lg:w-3/5 '> 
                    <div class=" grid lg:grid-cols-2 lg:gap-12  md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 md:px-2 pt-4 items-center sm:items-center sm:justify-center mx-4  lg:mx-2 mt-1">
                    
                    <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                        <IconContext.Provider value={{ color: '#ff0000', size: '50px', padding:'5px 2px' }}>
                            <a href="mailto:enrouteltd@gmail.com"><div class="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center  mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black text-2xl font-bold"><a href="mailto:enrouteltd@gmail.com" className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                            enrouteltd@gmail.com

                            </p>
                          </div>
                    </div>

                    <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                        <IconContext.Provider value={{ color: '#ff0000', size: '50px', padding:'5px 2px' }}>
                            <a href="mailto:admin@enroutecare.co.uk"><div class="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center  mt-1">
                            <p class=" text-1xl font-normal">
                            <div>
                              <span class="text-black text-2xl font-bold">
                                <a href="mailto:admin@enroutecare.co.uk" 
                                className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 
                                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour 
                                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                            admin@enroutecare.co.uk

                            </p>
                          </div>
                    </div>

                    <div class="lg:px-1 px-4  col-span-1 max-w-max  md:w-1/2 sm:items-start sm:justify-start">

                          <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:07401220999"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black text-2xl font-bold  "><a href="tel:0795 419 2764" 
                            className="block py-2  underline text-black rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call Us</a></span></div>
                            Mobile: 07401220999
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

                          <IconContext.Provider value={{ color: '#89cff0', size: '50px', padding:'5px 2px' }}>
                            <a href="https://www.google.com/maps/place/27+Allesley+Old+Rd,+Chapel+Fields,+Coventry+CV5+8BU,+UK/@52.4081204,-1.5319451,17z"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaLocationDot class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                              <div>
                                <span class="text-black text-2xl font-bold">
                                  <a href="https://www.google.com/maps/place/27+Allesley+Old+Rd,+Chapel+Fields,+Coventry+CV5+8BU,+UK/@52.4081204,-1.5319451,17z" 
                                      className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visit Us</a></span></div>
                                      EnrouteCare Ltd<br/>27 Allesley Old Road
                                      <br/>Chapel Fields
                                      <br/>Coventry
                                      <br/>CV58BU
                            </p>
                          </div>

                    </div>
                </div>
                </div>

                <div class=" lg:w-2/5 sm:w-screen">
                    <h1 className='font-bold md:text-2xl text-xl text-navcolour'>Enquiry Form</h1>
                  <div class="lg:px-0 px-2 pb-4  pt-5 mt-1 w-fit md:w-1/2 sm:items-start sm:justify-start">
                  <form class="  max-w-max " ref={form} onSubmit={sendEmail}>
                
                    <div class="mb-6 ">
                        <label for="name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="text" name="user_name" id="name" size="60" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: John Smith" required/>
                    </div>
                          
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input icon={HiMail} type="email"name="user_email" id="email"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: name@email.com" required/>
                    </div>
                    <div class="mb-6">
                        <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Telephone <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                        <input type="tel"name="user_telephone" id="telephone"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] lg:w-full py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: 0798 125 4567" required/>
                    </div> 
                    

                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Messsage <span class="text-gray text-1xl italic font-normal">(Required)</span></label>
                        <textarea id="message" name="message"rows="5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here....." required/>
                    </div>

                    {/* <div class="mb-6 sm:w-full lg:w-full md-w-full">
                        <p>
                        <span class=" text-1xl font-semibold">Terms & Conditions<span class="text-red text-1xl italic font-normal">(Required)</span><br/></span>
                        I agree to the Terms & Conditions and understand that stainmasterslimited.com has a legitimate interest to process the data that I have submitted.<Link
                        to="/terms_and_conditions"className=" underline text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        > See our Terms and Conditions and Privacy Policy </Link>for more information.
                        This site is protected by reCAPTCHA and the Google <a class="text-blue-700"href="https://policies.google.com/privacy">Privacy Policy </a>and <a class="text-blue-700" href="https://policies.google.com/terms">Terms of Service</a> apply.
                        
                        </p>
                    </div> */}
                        {/* <div class="max-w-full sm:82 rounded-lg sm:flex flex mx-6 mb-6">
                            <div class="ml-5 flex items-center h-5">
                            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:black">Yes I agree to the terms, conditions and privacy & cookie policy</label>
                        </div> */}
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    
            </form>
                  </div>
                  </div>
                </div>
                </div>

        </section>
    </div>
  )
}

export default Contact