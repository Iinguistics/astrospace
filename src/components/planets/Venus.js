import React, { Fragment } from 'react'



const Venus = () => {
    return (
         <Fragment>
             <div className="flex flex-col items-center md:flex-row my-32">
             <div className="my-2 w-1/2">
                    <h3 className="text-3xl">Venus Overveiw</h3>
                    <p>Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.</p>
                    <p>Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the Ancient Greeks.</p><br />
                </div>
                <img src={require('../../assets/planets/Venus/venus-1.jpg')} alt="venus" className="my-2 w-1/2 ml-10" /> 
             </div>
                
                <div className="m-auto text-left w-2/3 mb-10">
                      <h3 className="text-3xl mb-5">Size & Distance</h3>
                      <div className="mb-5">
                      <p>With a radius of 3,760 miles (6,052 kilometers), Venus is roughly the same size as Earth — just slightly smaller.</p>
                      <p>From an average distance of 67 million miles (108 million kilometers), Venus is 0.7 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. It takes sunlight 6 minutes to travel from the Sun to Venus.</p>
                      </div>
                      <div className="my-2 w-1/2 m-auto">
                      <img src={require('../../assets/planets/Venus/venus-2.jpg')} alt="venus" /> 
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Orbit & Rotation</h3>
                      <div className="mb-10">
                      <p>Venus' rotation and orbit are unusual in several ways. Venus is one of just two planets that rotate from east to west. Only Venus and Uranus have this "backwards" rotation. It completes one rotation in 243 Earth days — the longest day of any planet in our solar system, even longer than a whole year on Venus. But the Sun doesn't rise and set each "day" on Venus like it does on most other planets. On Venus, one day-night cycle takes 117 Earth days because Venus rotates in the direction opposite of its orbital revolution around the Sun.</p><br/>
                      <p>Venus makes a complete orbit around the Sun (a year in Venusian time) in 225 Earth days or slightly less than two Venusian day-night cycles. Its orbit around the Sun is the most circular of any planet — nearly a perfect circle. Other planet's orbits are more elliptical, or oval-shaped.</p>
                      <p>With an axial tilt of just 3 degrees, Venus spins nearly upright, and so does not experience noticeable seasons.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Structure</h3>
                      <div className="mb-10">
                      <p>Venus is in many ways similar to Earth in its structure. It has an iron core that is approximately 2,000 miles (3,200 kilometers) in radius. Above that is a mantle made of hot rock slowly churning due to the planet's interior heat. The surface is a thin crust of rock that bulges and moves as Venus' mantle shifts and creates volcanoes.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Formation</h3>
                      <div className="mb-10">
                      <p>When the solar system settled into its current layout about 4.5 billion years ago, Venus formed when gravity pulled swirling gas and dust together to form the second planet from the Sun. Like its fellow terrestrial planets, Venus has a central core, a rocky mantle and a solid crust.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Surface</h3>
                      <div className="mb-10">
                      <p>From space, Venus is bright white because it is covered with clouds that reflect and scatter sunlight. At the surface, the rocks are different shades of grey, like rocks on Earth, but the thick atmosphere filters the sunlight so that everything would look orange if you were standing on Venus.</p><br />
                      <p>Venus has mountains, valleys, and tens of thousands of volcanoes. The highest mountain on Venus, Maxwell Montes, is 20,000 feet high (8.8 kilometers), similar to the highest mountain on Earth, Mount Everest. The landscape is dusty, and surface temperatures reach a scalding 880 degrees Fahrenheit (471 degrees Celsius).</p> <br />
                      <p>It is thought that Venus was completely resurfaced by volcanic activity 300 to 500 million years ago. Venus has two large highland areas: Ishtar Terra, about the size of Australia, in the north polar region; and Aphrodite Terra, about the size of South America, straddling the equator and extending for almost 6,000 miles (10,000 kilometers).</p><br />
                      <div className="my-2 w-1/2 m-auto">
                      <img src={require('../../assets/planets/Venus/venus-surface.jpg')} alt="venus" /> 
                      </div>
                      <p>Venus is covered in craters, but none are smaller than 0.9 to 1.2 miles (1.5 to 2 kilometers) across. Small meteoroids burn up in the dense atmosphere, so only large meteoroids reach the surface and create impact craters.</p>
                      <p>Almost all the surface features of Venus are named for noteworthy Earth women — both mythological and real. A volcanic crater is named for Sacajawea, the Native American woman who guided Lewis and Clark's exploration. A deep canyon is named for Diana, Roman goddess of the hunt.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Atmosphere</h3>
                      <div className="mb-10">
                      <p>Venus' atmosphere consists mainly of carbon dioxide, with clouds of sulfuric acid droplets. The thick atmosphere traps the Sun's heat, resulting in surface temperatures higher than 880 degrees Fahrenheit (470 degrees Celsius). The atmosphere has many layers with different temperatures. At the level where the clouds are, about 30 miles up from the surface, it's about the same temperature as on the surface of the Earth.</p><br />
                      <p>As Venus moves forward in its solar orbit while slowly rotating backwards on its axis, the top level of clouds zips around the planet every four Earth days, driven by hurricane-force winds traveling at about 224 miles (360 kilometers) per hour. Atmospheric lightning bursts light up these quick-moving clouds. Speeds within the clouds decrease with cloud height, and at the surface are estimated to be just a few miles per hour.</p> <br />
                      <p>On the ground, it would look like a very hazy, overcast day on Earth. And the atmosphere is so heavy it would feel like you were 1 mile (1.6 kilometers) deep underwater.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Magnetosphere</h3>
                      <div className="mb-10">
                      <p>Even though Venus is similar in size to the Earth and has a similarly-sized iron core, Venus' magnetic field is much weaker than the Earth's due to Venus' slow rotation. ​</p><br />                 
                      </div>
                </div>
            </Fragment>
    )
}

export default Venus
