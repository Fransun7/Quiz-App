// Accessing the neccessary elements through id's
document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const cityTemperature = document.getElementById("temperature");
    const cityDescription = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    // API KEY gotten from open weather app
    const API_KEY = "21a7ad13471c2971ba56fda0e425fc86"

    // adding evenlistener to the button that request the weather data whenever it is clicked
    getWeatherBtn.addEventListener("click", async() => {
    const city = cityInput.value.trim();
    if (!city) {
        return
    } 

    try {
        const weatherData = await fetchWeatherData(city)
        displayWeatherData(weatherData)
        
    } catch (error) {
        displayError()
    }
})

async function fetchWeatherData(city) {
    // gets the data 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE:", response)
    if (!response.ok) {
        throw new Error("City not found");
    }

const data = await response.json();
return data 
}

function displayWeatherData(data) {
    // displays the data
    const {name, main, weather} = data;
    cityName.textContent = name;

    // Removing the classlist hidden to show the weather info
    weatherInfo.classList.remove("hidden");
    // Adding the classList hidden to hide the error message 
    errorMessage.classList.add("hidden");
    // Displaying the temperature and description
    cityTemperature.textContent = `Temperature: ${main.temp}`;
    cityDescription.textContent = `Description: ${weather[0].description}`;
}

function displayError(error) {
    // displays the error
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
}
});
