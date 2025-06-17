const apikey = "1a3bec63e53cee566b5154a2712efe70";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon");
const backgroundColor = document.querySelector(".card");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function weatherCheck(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
      backgroundColor.style.background =
        "linear-gradient(to bottom, #bdc3c7, #2c3e50)";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
      backgroundColor.style.background =
        "linear-gradient(to bottom, #fceabb, #f8b500)";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
      backgroundColor.style.background =
        "linear-gradient(to bottom, #314755, #26a0da)";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      backgroundColor.style.background =
        "linear-gradient(to bottom, #89f7fe, #66a6ff)";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
      backgroundColor.style.background =
        "linear-gradient(to bottom, #c9d6ff, #e2e2e2)";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "images/snow.png";
      backgroundColor.style.background =
        "linear-gradient(to bottom, #e0f7fa, #81d4fa)";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  weatherCheck(searchBox.value);
});
