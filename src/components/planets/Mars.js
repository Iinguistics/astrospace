import React, { useState, Fragment } from 'react';
import axios from 'axios';


const Mars = ({ match }) => {
    const [marsPhotos, setMarsPhotos] = useState([]);
    const [marsRover, setMarsRover] = useState({});

    
   
    const marsRoverPics = async()=>{
            const  KEY = 'edz1IInEZpnZubV09AMVZYN1746qxWQtvhMHZ72T';
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${KEY}`);
        
            setMarsPhotos(response.data.photos);
            setMarsRover(response.data.photos[0].rover);
            }
    


    const marsRoverButton = ()=>{
        
            return (
                <div className="my-3 text-center">
                 <button  
                type="submit"
                className= "bg-black hover:bg-blue-900 text-white font-bold py-2 px-4"
                onClick={()=> marsRoverPics()}>
                View mar's rover photo's
                </button>
                </div>
            )
    }


    const renderMarsRover = ()=>{
        if(marsPhotos !== null){
            return marsPhotos.map((photo)=>{
                return (
                    <Fragment key={photo.id}>
                        <img src={`${photo.img_src}`} alt="planet mars" className="my-2 w-1/2 p-2 md:w-1/3" />
                    </Fragment>
                )
            });
        }     
      };


      const renderMarsRoverInfo = ()=>{
        if(marsRover.name){
            return (
                <Fragment>
                    <li>Rover Name: {marsRover.name}</li>
                    <li>Launch Date: {marsRover.launch_date}</li>
                    <li>Landing Date: {marsRover.landing_date}</li>
                    <li>Status: {marsRover.status}</li>
                </Fragment>
            )
        }     
      };





    return (
        <div className="container mx-auto h-full my-24">
            {marsRoverButton()}
            {renderMarsRoverInfo()}
            <div className="flex flex-row flex-wrap justify-between my-2">
                  {renderMarsRover()}
            </div>
            <div className="flex flex-col items-center md:flex-row my-24">
             <div className="my-2 w-1/2">
                    <h3 className="text-3xl">Mars Overveiw</h3>
                    <p>Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute; for example, the Egyptians called it "Her Desher," meaning "the red one." Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.</p><br />
                </div>
                <img src={require('../../assets/planets/Mars/mars-1.jpg')} alt="mars" className="my-2 w-2/3 lg:w-1/2 ml-10" /> 
             </div>

             <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Exploration</h3>
                      <div className="mb-10">
                      <p>No planet beyond Earth has been studied as intensely as Mars. Recorded observations of Mars date as far back as the era of ancient Egypt over 4,000 years ago, when they charted the planet's movements in the sky. Today, a science fleet of robotic spacecraft study Mars from all angles.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Size & Distance</h3>
                      <div className="mb-10">
                      <p>With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.</p><br />
                      <p>From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Orbit & Rotation</h3>
                      <div className="mb-10">
                      <p>As Mars orbits the Sun, it completes one rotation every 24.6 hours, which is very similar to one day on Earth (23.9 hours). Martian days are called sols—short for "solar day." A year on Mars lasts 669.6 sols, which is the same as 687 Earth days.</p><br />
                      <p>Mars' axis of rotation is tilted 25 degrees with respect to the plane of its orbit around the Sun. This is another similarity with Earth, which has an axial tilt of 23.4 degrees. Like Earth, Mars has distinct seasons, but they last longer than seasons here on Earth since Mars takes longer to orbit the Sun (because it's farther away). And while here on Earth the seasons are evenly spread over the year, lasting 3 months (or one quarter of a year), on Mars the seasons vary in length because of Mars' elliptical, egg-shaped orbit around the Sun.</p><br />
                      <p>Spring in the northern hemisphere (autumn in the southern) is the longest season at 194 sols. Autumn in the northern hemisphere (spring in the southern) is the shortest at 142 days. Northern winter/southern summer is 154 sols, and northern summer/southern winter is 178 sols.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Structure</h3>
                      <div className="mb-10">
                      <p>Mars has a dense core at its center between 930 and 1,300 miles (1,500 to 2,100 kilometers) in radius. It's made of iron, nickel and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above that, a crust made of iron, magnesium, aluminum, calcium and potassium. This crust is between 6 and 30 miles (10 to 50 kilometers) deep.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Surface</h3>
                      <div className="mb-10">
                      <p>The Red Planet is actually many colors. At the surface we see colors such as brown, gold and tan. The reason Mars looks reddish is due to oxidization—or rusting—of iron in the rocks, regolith (Martian “soil”), and dust of Mars. This dust gets kicked up into the atmosphere and from a distance makes the planet appear mostly red.</p><br />
                      <p>Interestingly, while Mars is about half the diameter of Earth, its surface has nearly the same area as Earth’s dry land. Its volcanoes, impact craters, crustal movement, and atmospheric conditions such as dust storms have altered the landscape of Mars over many years, creating some of the solar system's most interesting topographical features.</p><br />
                      <p>A large canyon system called Valles Marineris is long enough to stretch from California to New York—more than 3,000 miles (4,800 kilometers). This Martian canyon is 200 miles (320 kilometers) at its widest and 4.3 miles (7 kilometers) at its deepest. That's about 10 times the size of Earth's Grand Canyon.</p>
                      <div className="my-2 w-2/3 lg:w-1/2 m-auto">
                      <img src={require('../../assets/planets/Mars/mars-2.jpg')} alt="mars" /> 
                      </div>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Atmosphere</h3>
                      <div className="mb-10">
                      <p>Mars has a thin atmosphere made up mostly of carbon dioxide, nitrogen and argon gases. To our eyes, the sky would be hazy and red because of suspended dust instead of the familiar blue tint we see on Earth. Mars' sparse atmosphere doesn't offer much protection from impacts by such objects as meteorites, asteroids and comets.</p><br />
                      <p>The temperature on Mars can be as high as 70 degrees Fahrenheit (20 degrees Celsius) or as low as about -225 degrees Fahrenheit (-153 degrees Celsius). And because the atmosphere is so thin, heat from the Sun easily escapes this planet. If you were to stand on the surface of Mars on the equator at noon, it would feel like spring at your feet (75 degrees Fahrenheit or 24 degrees Celsius) and winter at your head (32 degrees Fahrenheit or 0 degrees Celsius).</p><br />
                      <p>Occasionally, winds on Mars are strong enough to create dust storms that cover much of the planet. After such storms, it can be months before all of the dust settles.</p>
                      </div>
                </div>

                <div className="m-auto text-left w-2/3">
                      <h3 className="text-3xl mb-5">Magnetosphere</h3>
                      <div className="mb-10">
                      <p>Mars has no global magnetic field today, but areas of the Martian crust in the southern hemisphere are highly magnetized, indicating traces of a magnetic field from 4 billion years ago.​</p>
                      </div>
                </div>
        </div>
    )
}

export default Mars
