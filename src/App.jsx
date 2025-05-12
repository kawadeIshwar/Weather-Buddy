
import './App.css'
import WeatherApp from './WeatherApp'

export default function App () {
  return (
   <> 
    <div >
      <video autoPlay muted loop id="bg-video">
        <source src="/158384-816637349.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <p className="fancy"><WeatherApp /></p>
   </>
  );
}

     
   
     
    


