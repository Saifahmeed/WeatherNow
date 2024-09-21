const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const weathergrid = document.getElementById("weathergrid");
const errorMsg = document.querySelector(".error-msg");
const compareBtn = document.getElementById("compareBtn");
const comparisonresults = document.getElementById("comparisonresults");
const apiKey = "3982ed770020adb14c5d4f367890ae80";

// Function to get weather data for a country or city
async function getCountryWeather(country) {
  try {
    // Clear previous weather data
    weathergrid.innerHTML = "";

    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`
    );
    const data = await result.json();

    if (data.cod !== 200) {
      showError("Country or City not found. Please try again.");
      return;
    }

    hideError();
    updateWeathergrid(data);
  } catch (error) {
    showError("An unexpected error occurred.");
  }
}

// Function to update the weather grid with data
function updateWeathergrid(data) {
  weathergrid.innerHTML += `
    <div class="weather-card">
      <h3 class="city-name">${data.name}, ${data.sys.country}</h3>
      <div class="weather-icon-container">
        <img src="./images/${getWeatherIcon(
          data.weather[0].main
        )}" alt="weather" class="weather-icon" />
      </div>
      <p class="temperature">${Math.round(data.main.temp)}°C</p>
      <p class="humidity">Humidity: ${data.main.humidity}%</p>
      <p class="wind">Wind: ${Math.round(data.wind.speed)} km/h</p>
    </div>
  `;
}
// Function to compare two places
compareBtn.addEventListener("click", async () => {
  const place1 = document.getElementById("place1Input").value.trim();
  const place2 = document.getElementById("place2Input").value.trim();

  if (place1 && place2) {
    try {
      const [data1, data2] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${place1}&appid=${apiKey}&units=metric`
        ).then((res) => res.json()),
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${place2}&appid=${apiKey}&units=metric`
        ).then((res) => res.json()),
      ]);

      if (data1.cod === 200 && data2.cod === 200) {
        const tempDiff = Math.abs(data1.main.temp - data2.main.temp).toFixed(1);
        const humidityDiff = Math.abs(
          data1.main.humidity - data2.main.humidity
        );
        const windDiff = Math.abs(data1.wind.speed - data2.wind.speed).toFixed(
          1
        );

        comparisonresults.innerHTML = `
          <div class="comparison-card">
            <h4>${place1}</h4>
            <p>Temperature: ${Math.round(data1.main.temp)}°C</p>
            <p>Humidity: ${data1.main.humidity}%</p>
            <p>Wind Speed: ${Math.round(data1.wind.speed)} km/h</p>
          </div>
          <div class="comparison-card">
            <h4>${place2}</h4>
            <p>Temperature: ${Math.round(data2.main.temp)}°C</p>
            <p>Humidity: ${data2.main.humidity}%</p>
            <p>Wind Speed: ${Math.round(data2.wind.speed)} km/h</p>
          </div>
          <div class="comparison-card">
            <h4>Comparison Results</h4>
            <p>Temperature Difference: ${tempDiff}°C</p>
            <p>Humidity Difference: ${humidityDiff}%</p>
            <p>Wind Speed Difference: ${windDiff} km/h</p>
          </div>
        `;
      } else {
        showError("Invalid places entered. Please try again.");
      }
    } catch (error) {
      showError("An error occurred while comparing places.");
    }
  } else {
    showError("Please enter both places.");
  }
});
// function to show error messages
function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}

// Function to hide error messages
function hideError() {
  errorMsg.style.display = "none";
}

// Function to get the correct weather icon
function getWeatherIcon(weather) {
  const iconMap = {
    Clear: "clear.png",
    Clouds: "clouds.png",
    Rain: "rain.png",
    Drizzle: "drizzle.png",
    Thunderstorm: "thunderstorm.png",
    Snow: "snow.png",
    Mist: "mist.png",
  };
  return iconMap[weather] || "default.png";
}

// Function for search button
searchBtn.addEventListener("click", () => {
  const country = countryInput.value.trim();
  if (country) {
    getCountryWeather(country);
  } else {
    showError("Please enter a country or city.");
  }
});
