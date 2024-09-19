# WeatherNow 🌦️

**WeatherNow** is a web app that allows users to view real-time weather data for various cities based on country selection. Additionally, it features a tool to compare the weather between two places. The app leverages the OpenWeatherMap API to fetch current weather details and displays them in a visually appealing format.

## Features

- **Real-Time Weather Data**: View the latest weather details like temperature, humidity, and wind speed for selected cities.
- **Responsive Grid Layout**: Weather data is displayed in a dynamic, responsive grid format.
- **Country-Based Search**: Enter a country name to get weather information from major cities within that country.
- **Weather Comparison Tool**: Compare the weather between two different cities or countries.
- **Dynamic DOM Manipulation**: The weather data is updated and displayed dynamically using JavaScript.
- **Custom Icons**: Weather icons are customized based on conditions (sunny, rainy, cloudy, etc.).
- **Smooth User Interface**: A clean and minimalistic interface designed with a green color scheme, with clear separation between search and comparison sections.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Development Process](#development-process)
- [Challenges](#challenges)
- [Learnings](#learnings)
- [License](#license)

## Technologies

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: None (API calls using JavaScript)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Libraries**: jQuery, Bootstrap (for layout and responsiveness)
- **Version Control**: Git & GitHub

## Installation

1. Clone the repository:

   `git clone https://github.com/YourUsername/WeatherNow.git` <!-- bash -->

2. Navigate to the project directory:

   `cd WeatherNow` <!-- bash -->

3. Install dependencies:

   No external dependencies are required. The project only relies on static frontend technologies.

4. Open `index.html` in your preferred browser to run the app.

## Usage

1. Enter a country name in the search bar to get weather data for major cities in that country.
2. The weather information will be dynamically displayed in a grid layout.
3. Use the comparison tool to compare weather between two different places and view the differences in a clean, visual format.

## API Integration

This project uses the **OpenWeatherMap API** to fetch weather data. Here’s a breakdown of how it works:

- **API Endpoint**:

  `https://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={API_KEY}&units=metric` <!-- bash -->

- Replace `{city}`, `{country}`, and `{API_KEY}` with the actual city name, country, and your API key from OpenWeatherMap.

- The API response contains weather details like temperature, humidity, and wind speed, which are parsed and displayed dynamically on the web app.

## Development Process

1. **Setup Project Structure**: Created an organized folder structure with `index.html`, `style.css`, and `app.js` as main files.
2. **HTML Layout**: Developed the base structure of the page with a search form, results grid, and comparison tool section.
3. **Styling with CSS**: Applied a responsive, clean design using custom CSS and Bootstrap for layout and grid alignment.
4. **OpenWeatherMap API Integration**: Wrote JavaScript functions to fetch real-time weather data based on user input (country).
5. **Dynamic DOM Manipulation**: Used JavaScript to dynamically update the weather data on the page.
6. **Comparison Tool**: Developed a separate comparison section to show differences between the weather of two locations.
7. **Testing & Debugging**: Thoroughly tested the app for responsiveness, API calls, and data accuracy.

## Challenges

- Handling API errors and missing city data.
- Optimizing DOM manipulation for real-time updates.
- Ensuring smooth responsiveness on different devices.

## Learnings

- Gained experience in integrating third-party APIs and handling dynamic data.
- Learned how to optimize frontend performance for real-time data display.
- Improved skills in responsive web design using CSS and Bootstrap.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
