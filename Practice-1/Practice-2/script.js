const API_KEY = "37cf80aeb0724a5f8bd81720250311";

const searchBtn = document.getElementById("searchBtn");
const input = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");
const cityInput = document.querySelector(".city");
const tempInput = document.querySelector(".temp");
const windInput = document.querySelector(".wind");
const humidityInput = document.querySelector(".humidity");

function checkWeather(query) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(query)}&aqi=no`;
    

        fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Nätverksfel');
            }
            return res.json();

    })

    .then(data => {
        console.log(data);

    cityInput.textContent = `${data.location.name}, ${data.location.country}`;
    tempInput.textContent = `${data.current.temp_c}°C`;
    windInput.textContent = `${data.current.wind_kph} km/h`;
    humidityInput.textContent = `${data.current.humidity}%`;

     const weatherCondition = data.current.condition.text.toLowerCase();
    if (weatherCondition.includes("rain")) weatherIcon.src = "images/rain.png";
    else if (weatherCondition.includes("cloud")) weatherIcon.src = "images/clouds.png";
    else if (weatherCondition.includes("snow")) weatherIcon.src = "images/snow.png";
    else if (weatherCondition.includes("mist") || weatherCondition.includes("fog")) weatherIcon.src = "images/mist.png";
    else weatherIcon.src = "images/clear.png";

    }).catch(error => {
        console.log('Fel:', error.message);
    })
   
  }

searchBtn.addEventListener("click", () => {
  const query = input.value.trim() || "Stockholm";
  checkWeather(query);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = input.value.trim() || "Stockholm";
    checkWeather(query);
  }
});

// initial load: Stockholm coords
checkWeather("Stockholm");