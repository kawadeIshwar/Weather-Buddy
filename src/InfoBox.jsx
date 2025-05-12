import "./InfoBox.css"
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1663774718003-14c125ac0d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D"
  const HOT_URL = "https://images.unsplash.com/photo-1610557013547-dc7a52d44709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwVEVNUEVSQVRVUkV8ZW58MHx8MHx8fDA%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1548184187-b0b21e7b5dce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const RAIN_URL = "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox" style={{ fontFamily: "Montserrat" }}>
      <div className="cardContainer">

        <div className='temp'> <h3>Temperature ={info.temp}&deg;C</h3></div>
        <div className='cityName'><h1><SunnyIcon/> {info.city}</h1></div>
        <div className='Humidity'> <h3> Humidity = {info.humidity}</h3> </div>
        <div className='Min-Temp'> <h3> Min Temp = {info.tempMin}&deg;C</h3> </div>
        <div className='feels-like'> <h3> The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</h3></div>
        <div className='Max-Temp'> <h3> Max Temp = {info.tempMax}&deg;C</h3> </div>
      </div>
    </div>
  );
}


