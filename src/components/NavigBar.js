'use client';

import {Dropdown,  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/veemu_png.png'
export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      
      className="bg-navcolour"
    >
      <Navbar.Brand >
        <Link
          
          to="/"
        >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-12 sm:h-24"
          src={logo}
        /></Link>
        <span className="self-center whitespace-nowrap text-yellowtheme text-xl font-bold dark:text-white">
          Enroute Care Ltd
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/" className=' hover:bg-bluetheme hover:text-darkbluetheme active:bg-bluetheme focus:outline-none  text-yellowtheme font-bold md:text-lg'
        >
          
            Home
        
        </Link>
        <Link  to="/about" className=' hover:bg-bluetheme hover:text-darkbluetheme active:bg-bluetheme focus:outline-none  text-yellowtheme font-bold md:text-lg'>
          About
        </Link>
        <div className='text-yellowtheme font-bold md:text-lg'><Dropdown
          inline
          label="Domiciliary"
          className='text-yellowtheme font-bold md:text-lg'
        >
        <Dropdown.Header className='bg-navcolour'>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
        <Link to="/social" className='hover:bg-bluetheme hover:text-darkbluetheme active:bg-bluetheme focus:outline-none text-yellowtheme font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Social Inclusion
        </Link><br/>
        <Link to="/personal" className='hover:bg-bluetheme hover:text-darkbluetheme active:bg-bluetheme focus:outline-none text-yellowtheme font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Personal Care
        </Link><br/>
        <Link to="/sitting" className='hover:bg-bluetheme hover:text-darkbluetheme active:bg-bluetheme focus:outline-none text-yellowtheme font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Sitting Call
        </Link><br/>
                </ul>
          </Dropdown.Header>
          
        </Dropdown></div>
        <Link to="/services" className='hover:bg-bluetheme hover:text-darkbluetheme active:bg-bluetheme focus:outline-none text-yellowtheme font-bold md:text-lg'>
          Services
        </Link>
        
        <Link to="/contact" className='hover:bg-bluetheme hover:text-darkbluetheme active:bg-bluetheme focus:outline-none text-yellowtheme font-bold md:text-lg'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


