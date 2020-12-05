import React, { Fragment } from 'react'




const Jupiter = () => {
    return (
        <Fragment>
            <div className="flex flex-col items-center md:flex-row my-32">
             <div className="my-2 w-1/2">
                    <h3 className="text-3xl">Jupiter Overveiw</h3>
                    <p>Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.</p><br />
                    <p>Jupiter is surrounded by dozens of moons. Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice.</p>
                </div>
                <img src={require('../../assets/planets/Jupiter/jupiter-1.jpg')} alt="jupiter" className="my-2 w-1/2 ml-10" /> 
             </div>

             <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Size & Distance</h3>
                      <div className="mb-10">
                      <p>With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11 times wider than Earth. If Earth were the size of a nickel, Jupiter would be about as big as a basketball.</p><br/>
                      <p>From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes Sunlight 43 minutes to travel from the Sun to Jupiter.</p> 
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Orbit & Rotation</h3>
                      <div className="mb-10">
                      <p>Jupiter has the shortest day in the solar system. One day on Jupiter takes only about 10 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun (a year in Jovian time) in about 12 Earth years (4,333 Earth days).</p><br/>
                      <p>Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Structure</h3>
                      <div className="mb-10">
                      <p>The composition of Jupiter is similar to that of the Sun—mostly hydrogen and helium. Deep in the atmosphere, pressure and temperature increase, compressing the hydrogen gas into a liquid. This gives Jupiter the largest ocean in the solar system—an ocean made of hydrogen instead of water. Scientists think that, at depths perhaps halfway to the planet's center, the pressure becomes so great that electrons are squeezed off the hydrogen atoms, making the liquid electrically conducting like metal.</p><br />
                      <p>Jupiter's fast rotation is thought to drive electrical currents in this region, generating the planet's powerful magnetic field. It is still unclear if, deeper down, Jupiter has a central core of solid material or if it may be a thick, super-hot and dense soup. It could be up to 90,032 degrees Fahrenheit (50,000 degrees Celsius) down there, made mostly of iron and silicate minerals (similar to quartz).</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Formation</h3>
                      <div className="mb-10">
                      <p>Jupiter took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this gas giant. Jupiter took most of the mass left over after the formation of the Sun, ending up with more than twice the combined material of the other bodies in the solar system. In fact, Jupiter has the same ingredients as a star, but it did not grow massive enough to ignite.</p><br />
                      <p>About 4 billion years ago, Jupiter settled into its current position in the outer solar system, where it is the fifth planet from the Sun.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Surface</h3>
                      <div className="mb-10">
                      <p>As a gas giant, Jupiter doesn’t have a true surface. The planet is mostly swirling gases and liquids. While a spacecraft would have nowhere to land on Jupiter, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet crush, melt and vaporize spacecraft trying to fly into the planet.</p><br />
                      <div className="my-2 w-1/2 m-auto">
                      <img src={require('../../assets/planets/Jupiter/jupiter-2.jpg')} alt="jupiter's gas" /> 
                        </div>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Atmosphere</h3>
                      <div className="mb-10">
                      <p>Jupiter's appearance is a tapestry of colorful cloud bands and spots. The gas planet likely has three distinct cloud layers in its "skies" that, taken together, span about 44 miles (71 kilometers). The top cloud is probably made of ammonia ice, while the middle layer is likely made of ammonium hydrosulfide crystals. The innermost layer may be made of water ice and vapor.​</p><br /> 
                      <p>The vivid colors you see in thick bands across Jupiter may be plumes of sulfur and phosphorus-containing gases rising from the planet's warmer interior. Jupiter's fast rotation—spinning once every 10 hours—creates strong jet streams, separating its clouds into dark belts and bright zones across long stretches.​</p> <br />  
                      <p>With no solid surface to slow them down, Jupiter's spots can persist for many years. Stormy Jupiter is swept by over a dozen prevailing winds, some reaching up to 335 miles per hour (539 kilometers per hour) at the equator. The Great Red Spot, a swirling oval of clouds twice as wide as Earth, has been observed on the giant planet for more than 300 years. More recently, three smaller ovals merged to form the Little Red Spot, about half the size of its larger cousin. Scientists do not yet know if these ovals and planet-circling bands are shallow or deeply rooted to the interior.</p>         
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Magnetosphere</h3>
                      <div className="mb-10">
                      <p>The Jovian magnetosphere is the region of space influenced by Jupiter's powerful magnetic field. It balloons 600,000 to 2 million miles (1 to 3 million kilometers) toward the Sun (seven to 21 times the diameter or Jupiter itself) and tapers into a tadpole-shaped tail extending more than 600 million miles (1 billion kilometers) behind Jupiter, as far as Saturn's orbit. Jupiter's enormous magnetic field is 16 to 54 times as powerful as that of the Earth. It rotates with the planet and sweeps up particles that have an electric charge. Near the planet, the magnetic field traps swarms of charged particles and accelerates them to very high energies, creating intense radiation that bombards the innermost moons and can damage spacecraft.​</p><br /> 
                      <p>Jupiter's magnetic field also causes some of the solar system's most spectacular aurorae at the planet's poles.​</p>                
                      </div>
                </div>

        </Fragment>
    )
}

export default Jupiter
