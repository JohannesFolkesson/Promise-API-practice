const API_KEY = "37cf80aeb0724a5f8bd81720250311";

const searchBtn = document.querySelector('#searchBtn')
const input = document.querySelector('.search input')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')

function checkWeather(query) {
    return new Promise((resolve, reject) => {
         const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(query)}&aqi=no`;

         fetch(apiUrl)
         .then(res => {
            if(!res.ok) {
                throw new Error('Nätverksfel')
            }
            return res.json()
         })
         .then(data => {
                city.textContent = `${data.location.name}, ${data.location.country}`;
                temp.textContent = `${data.current.temp_c}°C`;
                wind.textContent = `${data.current.wind_kph} km/h`;
                humidity.textContent = `${data.current.humidity}%`;

                resolve(data)
         })
         .catch(error => {
            reject(error);
         })
    })
} 
