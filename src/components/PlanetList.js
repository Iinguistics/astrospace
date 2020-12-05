import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const PlanetList = () => {
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, [])


    return (
        <div className="text-center h-screen my-32" id="planets">
            <h2 className="text-2xl mb-5">View details of each planet:</h2>
           <Link className="text-lg" to="/planet/mecury">Mecury</Link>
           <Link className="text-lg" to="/planet/venus">Venus</Link>
           <Link className="text-lg" to="/planet/earth">Earth</Link>
           <Link className="text-lg" to="/planet/mars">Mars</Link>
        </div>
    )
}

export default PlanetList
