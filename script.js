let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = async (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80096a270cmsh420cf868e07cb7fp1acc79jsnbb8aa0a94967",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  const data = await getWeatherData(city);
  showWeatherData(data);
  // CODE GOES HERE
};
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.querySelector("#city-name").textContent = weatherData.name;
  document.querySelector("#weather-type").textContent =
    weatherData.weather[0].main;
  document.querySelector("#temp").textContent = weatherData.main.temp;
  document.querySelector("#min-temp").textContent = weatherData.main.temp_min;
  document.querySelector("#max-temp").textContent = weatherData.main.temp_max;
  console.log(weatherData);
};
