import React, { Fragment } from 'react';


const Saturn = () => {
    return (
        <Fragment>
         <div className="flex flex-col items-center md:flex-row my-32">
             <div className="my-2 w-1/2">
                    <h3 className="text-3xl">Saturn Overveiw</h3>
                    <p>Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.</p><br />
                    <p>Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.</p><br />
                    <p>The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter.</p>
                </div>
                <img src={require('../../assets/planets/Saturn/saturn-1.jpg')} alt="saturn" className="my-2 w-2/3 lg:w-1/2 ml-10" /> 
             </div>

             <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Size & Distance</h3>
                      <div className="mb-10">
                      <p>With a radius of 36,183.7 miles (58,232 kilometers), Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball.</p><br/>
                      <p>From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn.</p> 
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Orbit & Rotation</h3>
                      <div className="mb-10">
                      <p>Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).</p><br/>
                      <p>Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's 23.5-degree tilt. This means that, like Earth, Saturn experiences seasons.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Formation</h3>
                      <div className="mb-10">
                      <p>Saturn took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this gas giant. About 4 billion years ago, Saturn settled into its current position in the outer solar system, where it is the sixth planet from the Sun. Like Jupiter, Saturn is mostly made of hydrogen and helium, the same two main components that make up the Sun.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Surface</h3>
                      <div className="mb-10">
                      <p>As a gas giant, Saturn doesn’t have a true surface. The planet is mostly swirling gases and liquids deeper down. While a spacecraft would have nowhere to land on Saturn, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt and vaporize spacecraft trying to fly into the planet.</p><br />
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Atmosphere</h3>
                      <div className="mb-10">
                      <p>Saturn is blanketed with clouds that appear as faint stripes, jet streams and storms. The planet is many different shades of yellow, brown and grey.​</p><br /> 
                      <div className="my-2 w-2/3 lg:w-1/2 m-auto">
                      <img src={require('../../assets/planets/Saturn/saturn-2.jpg')} alt="saturn breakdown" /> 
                        </div>
                      <p>​Winds in the upper atmosphere reach 1,600 feet per second (500 meters per second) in the equatorial region. In contrast, the strongest hurricane-force winds on Earth top out at about 360 feet per second (110 meters per second). And the pressure—the same kind you feel when you dive deep underwater—is so powerful it squeezes gas into liquid.</p> <br />  
                      <p>Saturn's north pole has an interesting atmospheric feature—a six-sided jet stream. This hexagon-shaped pattern was first noticed in images from the Voyager I spacecraft and has been more closely observed by the Cassini spacecraft since. Spanning about 20,000 miles (30,000 kilometers) across, the hexagon is a wavy jet stream of 200-mile-per-hour winds (about 322 kilometers per hour) with a massive, rotating storm at the center. There is no weather feature like it anywhere else in the solar system.</p>         
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Magnetosphere</h3>
                      <div className="mb-10">
                      <p>Saturn's magnetic field is smaller than Jupiter's but still 578 times as powerful as Earth's. Saturn, the rings, and many of the satellites lie totally within Saturn's enormous magnetosphere, the region of space in which the behavior of electrically charged particles is influenced more by Saturn's magnetic field than by the solar wind.​</p><br /> 
                      <p>Aurorae occur when charged particles spiral into a planet's atmosphere along magnetic field lines. On Earth, these charged particles come from the solar wind. Cassini showed that at least some of Saturn's aurorae are like Jupiter's and are largely unaffected by the solar wind. Instead, these aurorae are caused by a combination of particles ejected from Saturn's moons and Saturn's magnetic field's rapid rotation rate. But these "non-solar-originating" aurorae are not completely understood yet.​</p>                
                      </div>
                </div>
        </Fragment>
            
    )
}

export default Saturn
