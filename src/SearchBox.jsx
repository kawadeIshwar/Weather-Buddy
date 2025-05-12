import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';
import "./index.css";

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8c83c746268fe5a48c4f4842aabd0d37";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    };

    let handlechange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {

            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <div className="SearchBox">
            <h3>Check The Weather In Your City</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px', maxWidth: '500px', marginLeft: '150px', background: 'transparent' }}>
                    <TextField
                        id="city"
                        label="City Name"
                        variant="outlined"
                        required
                        value={city}
                        onChange={handlechange}
                        fullWidth
                    />
                </div>

                <div>
                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        style={{marginRight: "15px"}}
                    >
                        Search
                    </Button>
                </div>

                {error && <p style={{ color: "red" }}>😔 No Such Place In Our API!</p>}
            </form>

        </div>
    )
}