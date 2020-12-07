import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import GoBackButton from './Helpers/GoBackButton';


const PlanetList = () => {
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, [])


    return (
        <Fragment>
         <GoBackButton />
          <div className="text-center  my-32" id="planets">
            <h2 className="text-2xl mb-5">View details of each planet:</h2>
           <Link className="text-lg" to="/planet/mecury">Mecury</Link>
           <Link className="text-lg" to="/planet/venus">Venus</Link>
           <Link className="text-lg" to="/planet/earth">Earth</Link>
           <Link className="text-lg" to="/planet/mars">Mars</Link>
           <Link className="text-lg" to="/planet/jupiter">Jupiter</Link>
          </div>
        </Fragment>
       
    )
}

export default PlanetList
