import React, { Fragment } from 'react'

const Uranus = () => {
    return (
        <Fragment>

          <div className="flex flex-col items-center md:flex-row my-32">
             <div className="my-2 w-1/2">
                    <h3 className="text-3xl">Uranus Overveiw</h3>
                    <p>The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.</p><br />
                    <p>The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.</p><br />
                    <p>William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.</p>
                </div>
                <img src={require('../../assets/planets/Uranus/uranus-1.jpg')} alt="uranus" className="my-2 w-2/3 lg:w-1/2 ml-10" /> 
             </div>

             <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Size & Distance</h3>
                      <div className="mb-10">
                      <p>With a radius of 15,759.2 miles (25,362 kilometers), Uranus is 4 times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball.</p><br/>
                      <p>From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is 19.8 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus.</p> 
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Orbit & Rotation</h3>
                      <div className="mb-10">
                      <p>One day on Uranus takes about 17 hours (the time it takes for Uranus to rotate or spin once). And Uranus makes a complete orbit around the Sun (a year in Uranian time) in about 84 Earth years (30,687 Earth days).</p><br/>
                      <p>Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees—possibly the result of a collision with an Earth-sized object long ago. This unique tilt causes the most extreme seasons in the solar system. For nearly a quarter of each Uranian year, the Sun shines directly over each pole, plunging the other half of the planet into a 21-year-long, dark winter.</p><br />
                      <p>Uranus is also one of just two planets that rotate in the opposite direction than most of the planets (Venus is the other one), from east to west.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Structure</h3>
                      <div className="mb-10">
                      <p>Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80 percent or more) of the planet's mass is made up of a hot dense fluid of "icy" materials—water, methane and ammonia—above a small rocky core. Near the core, it heats up to 9,000 degrees Fahrenheit (4,982 degrees Celsius).</p><br/>
                      <p>Uranus is slightly larger in diameter than its neighbor Neptune, yet smaller in mass. It is the second least dense planet; Saturn is the least dense of all.</p><br />
                      <p>Uranus gets its blue-green color from methane gas in the atmosphere. Sunlight passes through the atmosphere and is reflected back out by Uranus' cloud tops. Methane gas absorbs the red portion of the light, resulting in a blue-green color.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Formation</h3>
                      <div className="mb-10">
                      <p>Uranus took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this ice giant. Like its neighbor Neptune, Uranus likely formed closer to the Sun and moved to the outer solar system about 4 billion years ago, where it is the seventh planet from the Sun.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Surface</h3>
                      <div className="mb-10">
                      <p>As an ice giant, Uranus doesn’t have a true surface. The planet is mostly swirling fluids. While a spacecraft would have nowhere to land on Uranus, it wouldn’t be able to fly through its atmosphere unscathed either. The extreme pressures and temperatures would destroy a metal spacecraft.</p><br />
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Atmosphere</h3>
                      <div className="mb-10">
                      <p>Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue color.​</p><br /> 
                      <div className="my-2 w-2/3 lg:w-1/2 m-auto">
                      <img src={require('../../assets/planets/Uranus/uranus-2.jpg')} alt="uranus" /> 
                        </div>
                      <p>​While Voyager 2 saw only a few discrete clouds, a Great Dark Spot and a small dark spot during its flyby in 1986, more recent observations reveal that Uranus exhibits dynamic clouds as it approaches equinox, including rapidly changing bright features.</p> <br />  
                      <p>Wind speeds can reach up to 560 miles per hour (900 kilometers per hour) on Uranus. Winds are retrograde at the equator, blowing in the reverse direction of the planet’s rotation. But closer to the poles, winds shift to a prograde direction, flowing with Uranus' rotation.</p>         
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Magnetosphere</h3>
                      <div className="mb-10">
                      <p>Uranus has an unusual, irregularly shaped magnetosphere. Magnetic fields are typically in alignment with a planet's rotation, but Uranus' magnetic field is tipped over: the magnetic axis is tilted nearly 60 degrees from the planet's axis of rotation, and is also offset from the center of the planet by one-third of the planet's radius.​</p><br /> 
                      <p>Auroras on Uranus are not in line with the poles (like they are on Earth, Jupiter and Saturn) due to the lopsided magnetic field.​</p><br />
                      <p>The magnetosphere tail behind Uranus opposite the Sun extends into space for millions of miles. Its magnetic field lines are twisted by Uranus’ sideways rotation into a long corkscrew shape.</p>               
                      </div>
                </div>


        </Fragment>
    )
}

export default Uranus
