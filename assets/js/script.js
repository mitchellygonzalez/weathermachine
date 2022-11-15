//localStorage.getItem


//var APIKey = "da3e8fd8db033d14a5f1f9a72efe483d"

/* var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=" + da3e8fd8db033d14a5f1f9a72efe483d;

fetch(queryURL)*/

var startButton=document.getElementById("start")
var input=document.getElementById("input")
console.log(startButton)
startButton.addEventListener("click",function(){
    console.log(input.value)
})



var api = "http://api.openweathermap.org/geo/1.0/direct?q=seattle&limit=1&appid=da3e8fd8db033d14a5f1f9a72efe483d"
fetch(api)
.then ((response)=>{
//console.log(response)
return response.json()
})
.then((data)=>{
console.log(data)
})

