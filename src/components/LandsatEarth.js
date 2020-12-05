import React, { useState, useEffect } from 'react'
import axios from 'axios';
//import { KEY } from '../nasaKey.js';
import Spinner from './Helpers/Spinner';



const LandsatEarth = () => {
  useEffect(()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}, [])

    const [lat, setLat] = useState(37.351601); // San Jose
    const [long, setLong] = useState(-121.926956);
    const [satImg, setSatImg] = useState("");
    const [loading, setLoading] = useState(false);


        const date = new Date();
        const today = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const current = `${year}-${month + 1}-${today}`

       
    
    const earthHandler = async(e)=>{
      e.preventDefault();
      setSatImg("");
      setLoading(true);
      const response = await axios.get(`https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=2018-01-01&dim=0.15&api_key=${process.env.KEY}`);
      console.log(response)
      setSatImg(response.config.url);
      setTimeout(()=>{
       setLoading(false);
      }, 6000)
   }
 
    
 
        const renderSatImg = ()=>{
        if(satImg !== ""){
            return (
            <div className="h-full">
              <img src={satImg} alt="birds eye snapshot" className="my-2 w-3/4 md:w-1/2  m-auto"/>
              </div>
            )
        }
    }

        const renderLoader = ()=>{
            if(loading){
                return <Spinner />
            }
        }



    return (
       <div className="h-screen">
         <div className="m-auto max-w-xs container mt-32">
            <div className="my-12">
                <p>Landsat imagery is provided to the public as a joint project between NASA and USGS.</p>
                <h2>Enter in coordinates for a satellite snapshot</h2>
            </div>
         <div className="w-full ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={earthHandler}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
       Latitude
      </label>
      <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="latitude"
       type="number"
       step="any"
       placeholder="Latitude"
       value={lat}
       onChange={(e)=> setLat(e.target.value)}
        />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
        Longitude
      </label>
      <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
       id="longitude" 
       type="Number" 
       step="any"
       placeholder="longitude"
       value={long}
       onChange={(e)=> setLong(e.target.value)}
       />
    </div>

    <div className="text-center">
      <button className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="submit">
        Submit
        </button>
      </div>
    </form>
   </div>
  </div>
{renderLoader()}
{renderSatImg()}
</div>
        
        
    )
}

export default LandsatEarth
