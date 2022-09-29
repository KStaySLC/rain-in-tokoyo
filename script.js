let weather = {
    apiKey: "6593d96a817d8cc22fef69919644344e",
    getWeather: function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid="
        + this.apiKey
        )
        .then((res) => res.json()).then((data) => this.displayWeather(data));
        console.log('step one');
    },
    
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description} = data.weather[3];
        const { temp, humidity } = data.main[0, 5];
        const { speed } = data.wind[0];
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed;
        console.log('step two')
},
search: function() {
    console.log('here')
    this.getWeather(document.getElementById("search-bar").value);
}
};
document.getElementById("search-button").addEventListener("click", function() {
    weather.search();
})