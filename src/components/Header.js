import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
   const [menu, setMenu] = useState(false);
   
   const menuButton = ()=>{
     setMenu(!menu);
   }

    return (
      <nav className="bg-black fixed w-full" id="test">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={()=>menuButton()} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
         
              <svg className={menu === true ? 'hidden h-6 w-6': 'block h-6 w-6'}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
             
              <svg className={menu === true ? 'block h-6 w-6': 'hidden h-6 w-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            
              <Link to="/">
              <div className="flex-shrink-0 text-white">
              ASTROSPACE
            </div>
              </Link>
            
            <div className="hidden sm:block sm:ml-10">
              <div className="flex">
                <Link to="/planets"  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Planets</Link>
                <Link to="/landsat/earth" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">LandSat</Link>
                <Link to="/planet/mars" className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-gray-300 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Mars Rover</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className={menu === true? 'block sm:block': 'hidden sm:hidden'}>
        <div className="px-2 pt-2 pb-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Dashboard</Link>
          <Link to="/" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Teams</Link>
          <Link to="/" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</Link>
          <Link to="/" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Calendar</Link>
        </div>
      </div>
    </nav>
    
      
    )
}

export default Header
