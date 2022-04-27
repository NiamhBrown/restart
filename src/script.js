function formatDate(timestamp) {
    let date = new Date(timestamp);
    console.log(date);
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
   console.log(response);

    let cityElement = document.querySelector("#city")
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind");
    let temperatureElement = document.querySelector("#temperature");
    let humidityElement = document.querySelector("#humidity");
    let dateElement = document.querySelector("#date")

    cityElement.innerHTML = response.data.name;
    dateElement.innerHTML = formatDate (response.data.dt*1000);
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    humidityElement.innerHTML = Math.round(response.data.main.humidity);
    
    
}

let city= "Brighton"
let apiKey = "e4c991b27b566dc4b5b311b6f8d9ac5c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayInfo);