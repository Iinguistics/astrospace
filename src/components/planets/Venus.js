import React, { Fragment } from 'react'



const Venus = () => {
    return (
         <Fragment>
             <div className="flex flex-col items-center md:flex-row my-24">
             <div className="my-2 w-1/2">
                    <h3 className="text-3xl">Venus Overveiw</h3>
                    <p>Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.</p>
                    <p>Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the Ancient Greeks.</p><br />
                </div>
                <img src={require('../../assets/planets/Venus/venus-1.jpg')} alt="venus" className="my-2 w-1/2 ml-10" /> 
             </div>
                
                <section className="">
                      <h3 className="text-3xl text-center">Ten Facts About Venus</h3>
                     <div className="flex flex-row items-center justify-evenly my-16 flex-wrap text-left">
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> Mercury is the smallest planet in our solar system, only slightly larger than Earth's Moon. </li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> It is the closest planet to the Sun at a distance of about 36 million miles (58 million kilometers) or 0.39 AU.</li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> One day on Mercury (the time it takes for Mercury to rotate or spin once with respect to the stars) takes 59 Earth days. One day-night cycle on Mercury takes 175.97 Earth days. Mercury makes a complete orbit around the Sun (a year in Mercury time) in just 88 Earth days.</li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> Mercury is a rocky planet, also known as a terrestrial planet. Mercury has a solid, cratered surface, much like the Earth's moon.</li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> Mercury's thin atmosphere, or exosphere, is composed mostly of oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and potassium (K). Atoms that are blasted off the surface by the solar wind and micrometeoroid impacts create Mercury's exosphere.</li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> No evidence for life has been found on Mercury. Daytime Temperatures can reach 430 degrees Celsius (800 degrees Fahrenheit) and drop to -180 degrees Celsius (-290 degrees Fahrenheit) at night. It is unlikely life (as we know it) could survive on this planet.</li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> Mercury has no moons.</li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> Standing on Mercury's surface at its closest approach to the Sun, our star would appear more than three times larger than it does on Earth.</li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> The two spacecraft of ESA-JAXA's BepiColombo are en route to Mercury. NASA's Mariner 10 was the first mission to explore Mercury. NASA's MESSENGER was the first to orbit the innermost planet.</li>
                      <li className="w-1/2 md:w-1/3 my-12 p-4"><i class="fas fa-satellite-dish"></i> There are no rings around Mercury. </li>
                  </div>
                </section>
            </Fragment>
    )
}

export default Venus
