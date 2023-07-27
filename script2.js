const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "610f4ff5b1msha122fca6904ce9ap10452djsn7975734d4aff",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      cloud_pct2.innerHTML = response.cloud_pct;
      temp2.innerHTML = response.temp;
      feels_like2.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      min_temp2.innerHTML = response.min_temp;
      max_temp2.innerHTML = response.max_temp;
      wind_speed2.innerHTML = response.wind_speed;
     // wind_degrees.innerHTML = response.wind_degrees;
      sunrise2.innerHTML = response.sunrise;
      sunset2.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));