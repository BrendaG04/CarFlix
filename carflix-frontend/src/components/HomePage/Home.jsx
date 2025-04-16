import React, {useEffect} from 'react';
import './Home.css';


function Home(){

   useEffect(() => { 
     
   },[]);


   return( 
      <>
         <div className="home-container">
            <img className="backgroundRoad" src="/public/homeBackground.avif" alt="BackgroundRoad" />
            <h1 className='title'>CarFlix</h1>
            <div className="car-container"> 
               <img className="pinkcar" src="/public/homeCar.webp" alt="PinkCar" />
            </div>
            <a href='/makes'>
               <button className="startbtn">Enter</button>
            </a>
         </div>
      </>
   );

}
export default Home
