import React from 'react'
import logo from '../images/veemu_png.png'
import {Link} from 'react-router-dom'
import excellent from '../images/excellence.png'
import equal from '../images/no-equal-to.png'
import amazing from '../images/care.png'

function Footer() {
  return (
    <div class='mt-5'>
        <section className='lg:pt-16'>

<div className='bg-gray-200'>
    <div className="sm:item-center bg-gray-200 sm:justify-center text-center ">

        <h1 className='sm:tetx-2xl md:text-4xl text-darkbluetheme font-extrabold'>Why Choose Us</h1>
    </div>

    <div className='lg:flex grid  lg:grid-cols-3 lg:gap-4 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 pt-8 px-2 md:px-5 '>

          <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
            <center><img src={excellent} alt='excellence'  class=" sm:items-center sm:justify-center mx-1   
            my-6"/>
            <h5 className="md:text-2xl text-lg font-bold tracking-tight text-darkbluetheme dark:text-white pt-2">
                <p>
                We Are Reliable
                </p>
            </h5></center>
            <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                <p class='text-left'>
                
                We offer 24 hour services. Anytime you request our services, we show up before you know it. 
                Our team is prepared to work according to personal schedule. We also make at-home care easy for loved ones.<br/>

                </p>

                
            </p>
          </div>

          <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
            <center><img src={amazing} alt='excellence'  class=" sm:items-center sm:justify-center mx-1   my-6"/>
            <h5 className="md:text-2xl text-lg font-bold tracking-tight text-darkbluetheme dark:text-white pt-2">
                <p>
                We Care
                </p>
            </h5></center>
            <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                <p class='text-left'>
                We have a team of dedicated, passionate and knowledgable caregivers who provide great care. We work with families to find the most suitable caregiver
                for everyone who uses our services.<br/><br/>
                </p>

                
            </p>
          </div>

          <div className="lg:px-8 px-4 col-span-1 lg:w-full md:w-1/2 sm:items-center sm:justify-center">
            <center><img src={equal} alt='excellence'  class=" sm:items-center sm:justify-center mx-1   my-6"/>
            <h5 className="md:text-2xl text-lg font-bold tracking-tight text-darkbluetheme dark:text-white pt-2">
                <p>
                We are Professionals
                </p>
            </h5></center>
            <p className="font-normal text-sm md:text-lg text-darkbluetheme dark:text-gray-400 pt-4">
                <p class='text-left'>
                    Our staff members are well trained and equiped for care work to ensure we deliver the best services
                    that align with care standards.
                </p>

                
            </p>
          </div>

</div>
</div>



</section>
<footer class="bg-navcolour   shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto py-5 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://enroutecare.co.uk/" class="flex items-center mb-4 sm:mb-0">
                <img src={logo} class="h-8 md:h-16 mr-3" alt="VEEMU Logo" />
                <span class="self-center text-yellowtheme md:text-2xl text-1xl font-bold whitespace-nowrap dark:text-white">Enroute Care Ltd</span>
            </a>
            <ul class="flex flex-wrap text-lg text-sm  pt-6 text-base font-medium text-white sm:mb-0 dark:text-gray-400">
                <p className='text-yellowtheme text-lg font-bold md:px-6 px-4'>
                    About<br/>
                    <ul class="list-disc ml-6 text-sm font-bold">
                             <li><Link to='/about'><u>Mission</u></Link></li>
                            <li><Link to='/about'><u>Vision</u></Link></li>
                            <li><Link to='/about'><u>Values</u></Link></li>
                             
                            
                    </ul>
                </p>
                <p  className='text-yellowtheme text-lg font-bold md:px-8 px-4'>
                    Services<br/>
                    <ul class="list-disc ml-6 text-sm font-bold">
                             <li><Link to='/services'><u>Domiciliary Care</u></Link></li>
                            <li><Link to='/personal'><u>Supported living</u></Link></li>
                            <li><Link to='/services'><u>Respite Care</u></Link></li>
                             <li><Link to='/services'><u>Palliative Care</u></Link></li>
                            
                            </ul>
                </p>
                
                <Link to="/contact" className='text-yellowtheme text-lg font-bold md:px-8 px-4'>
                    Contact
                </Link>
            </ul>
        </div>
        <hr class="my-6 border-yellowtheme sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between ml-3">
        <span class="block text-sm text-yellowtheme sm:text-center dark:text-gray-400 col-span-1">© 2023 
            <a href="https://enroutecare.co.uk/" class="hover:underline text-yellowtheme">
                Enroute Care™
            </a>. 
            All Rights Reserved.
        </span>

        <span class="md:mr-3 block text-sm text-yellowtheme sm:text-center dark:text-gray-400 col-span-1 "> 
            <a href="mailto:rufarochiuta@gmail.com" class="hover:underline">
                Developed by Rufaro Chiuta
            </a><br/>
            
        </span>

        </div>
    </div>
</footer>


            
            
    </div>
  )
}

export default Footer