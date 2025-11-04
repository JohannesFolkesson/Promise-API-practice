const API_KEY = "37cf80aeb0724a5f8bd81720250311";

const searchBtn = document.querySelector('#searchBtn')
const input = document.querySelector('.search input')
const weatherIcon = document.querySelector('.weather-icon')
const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')

function checkWeather(query) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(query)}&aqi=no`

    fetch(apiUrl)
    .then(res => {
        if(!res.ok) {
            throw new Error('Nätverksfel')
        }
        return res.json();
    })
    .then(data => {
        console.log(data)

        city.textContent = `${data.location.name}, ${data.location.country}`;
        wind.textContent = `${data.current.wind_kph}km/h`;
        temp.textContent = `${data.current.temp_c}°C`;
        humidity.textContent = `${data.current.humidity}%`;
    }).catch(error => {
        console.log('Fel:', error.message)
    })
}

searchBtn.addEventListener("click", () => {
    const query = input.value.trim() || "Stockholm";
    checkWeather(query);
})

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const query = input.value.trim() || "Stockholm";
        checkWeather(query);
    }
})

checkWeather("Stockholm");