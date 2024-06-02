import React, { useState  } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  



  

 




  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0bd7383f746dd200ae68dc485012ab53`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation(" ");
    }
  };

  const getWeatherImage = (WeatherData) => {
    if (WeatherData.includes("cloud")) {
      return "src/assets/clouud.png";
    } else if (WeatherData.includes("sunny")) {
      return "src/assets/sunshine.png";
    } else if (WeatherData.includes("rain")) {
      return "";
    } else if (WeatherData.includes("snow")) {
      return "src/assets/snow.png-removebg-preview.png";
    }
    else if (WeatherData.includes("clear")) {
      return "src/assets/sunshine.png";
    }
   
   else{
    return "";
   }
  };
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.4)" }} className="App">
       
      <div className="text-center p-4">
     
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location "
          type="text"
          className="py-3 px-3 font-light rounded-lg placeholder:text-white "
          style={{
            border: "1px solid rgba(255,255,255,0.8)",
            background: "rgba(255,255,255,0.1)",
          }}
        />
      </div>
     
      <div
        style={{ top: "10%" }}
        className="m-w-[700px h-[700px] m-auto px-0 py-4 relative  flex flex-col justify-between"
      >
        <div className="w-full mx-4 my-auto">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="tempt">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? (
              <img
                src={getWeatherImage(data.weather[0].description.toLowerCase())}
                alt="weather"
                className="w-24"
              />
            ) : null}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            className="flex justify-evenly text-center w-full mx-4 my-auto p-4  rounded-md "
          >
            <div className="feel">
              {data.main ? (
                <p className="font-bold">{data.main.feels_like.toFixed()}˚F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="font-bold">{data.main.humidity}%</p>
              ) : null}
              <p>humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="font-bold"> {data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>WindSpeed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

