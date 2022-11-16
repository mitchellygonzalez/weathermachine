var searchInput = document.getElementById("search")

var searchBtn = document.getElementById("searchButton")

var APIKey = "da3e8fd8db033d14a5f1f9a72efe483d"

function getWeather () {
    var cityName = searchInput.value
    var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIKey}`

    fetch(currentWeatherApi)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    document.getElementById("cityName").textContent = cityName
    document.getElementById("temp").textContent = data.main.temp
    document.getElementById("wind").textContent = data.wind.speed
    document.getElementById("humidity").textContent = data.main.humidity

    getForecast()
    })
}

function getForecast () {
    var cityName = searchInput.value
    var forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${APIKey}`

    fetch(forecastApi)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    document.getElementById("temp1").textContent = data.list[0].main.temp
    document.getElementById("wind1").textContent = data.list[0].wind.speed
    document.getElementById("humidity1").textContent = data.list[0].main.humidity

    document.getElementById("temp2").textContent = data.list[8].main.temp
    document.getElementById("wind2").textContent = data.list[8].wind.speed
    document.getElementById("humidity2").textContent = data.list[8].main.humidity

    document.getElementById("temp3").textContent = data.list[17].main.temp
    document.getElementById("wind3").textContent = data.list[17].wind.speed
    document.getElementById("humidity3").textContent = data.list[17].main.humidity

    document.getElementById("temp4").textContent = data.list[26].main.temp
    document.getElementById("wind4").textContent = data.list[26].wind.speed
    document.getElementById("humidity4").textContent = data.list[26].main.humidity

    document.getElementById("temp5").textContent = data.list[36].main.temp
    document.getElementById("wind5").textContent = data.list[36].wind.speed
    document.getElementById("humidity5").textContent = data.list[36].main.humidity
    })
}

searchBtn.addEventListener("click", getWeather)


















//localStorage.getItem


//var APIKey = "da3e8fd8db033d14a5f1f9a72efe483d"

/* var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=" + da3e8fd8db033d14a5f1f9a72efe483d;

fetch(queryURL)*/

// var startButton=document.getElementById("start")
// var input=document.getElementById("input")
// console.log(startButton)
// startButton.addEventListener("click",function(){
//     console.log(input.value)
// })



// var api = "http://api.openweathermap.org/geo/1.0/direct?q=seattle&limit=1&appid=da3e8fd8db033d14a5f1f9a72efe483d"
// fetch(api)
// .then ((response)=>{
// //console.log(response)
// return response.json()
// })
// .then((data)=>{
// console.log(data)
// })

