function formatDate(timestamp) {
    let date = new Date(timestamp);
     
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours<10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes<10) {
        hours = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;

}

function displayInfo(response) {    
    
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind");
    let humidityElement = document.querySelector("#humidity");
    let dateElement = document.querySelector("#date");
  
    celsiusTemp = response.data.main.temp
    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(celsiusTemp);
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    humidityElement.innerHTML = response.data.main.humidity;
    dateElement.innerHTML = formatDate (response.data.dt*1000);

    
    let iconElement = document.querySelector("#icon");
    let icon = response.data.weather[0].icon;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function displayFahrenheitTemp(event){
    event.preventDefault();
    let fahrenheitTemp = (celsiusTemp*9)/ 5+32;
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

function displaycelsiusTemp(event){
    event.preventDefault();
    fahrenheitLink.classList.remove("active");
    celsiusLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemp);
    
}

function handleSubmit(event) {
event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
search(cityInputElement.value);
}

function search (city) {
let apiKey = "e4c991b27b566dc4b5b311b6f8d9ac5c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayInfo);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displaycelsiusTemp);

let celsiusTemp = null;

search("Brighton");