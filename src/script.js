function formatDate(timestamp) {
    let date = new Date(timestamp);
    
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour<10) {
        hour = `0${hour}`;
    }

    if (minute<10) {
        minute = `0${minute}`;
    }
    return `${day} ${hour}:${minute}`;
    
}

function displayInfo (response) {
    let cityElement = document.querySelector("#city")
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind");
    let temperatureElement = document.querySelector("#temperature");
    let humidityElement = document.querySelector("#humidity");
    let dateElement = document.querySelector("#date")
    let iconElement = document.querySelector("#icon")

    celsiusTemp = response.data.main.temp

    cityElement.innerHTML = response.data.name;
    dateElement.innerHTML = formatDate (response.data.dt*1000);
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    temperatureElement.innerHTML = Math.round(celsiusTemp);
    humidityElement.innerHTML = Math.round(response.data.main.humidity);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city){
let apiKey = "e4c991b27b566dc4b5b311b6f8d9ac5c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayInfo);

}
function handleSubmit(event){
    event.preventDefault();
    let inputCityElement = document.querySelector("#city-input");
    search(inputCityElement.value);
}

function displayFahrenheitTemp(event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round((celsiusTemp * 9/5) + 32);
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");

}

function displayCelsiusTemp (event){
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemp);
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");

}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let celsiusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemp);

search("Brighton"); 

