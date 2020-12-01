import React from 'react'
import { Link } from 'react-router-dom';

const PlanetList = () => {
    return (
        <div className="text-center h-screen my-32">
            <h2 className="text-2xl mb-5">Learn more about the solar system:</h2>
           <Link className="text-lg" to="/planet/mecury"><li>Mecury</li></Link>
           <Link className="text-lg" to="/planet/venus"><li>Venus</li></Link>
           <Link className="text-lg" to="/planet/earth"><li>Earth</li></Link>
           <Link className="text-lg" to="/planet/mars"><li>Mars</li></Link>
           <Link className="text-lg" to="/planet/saturn"><li>Saturn</li></Link>
        </div>
    )
}

export default PlanetList
