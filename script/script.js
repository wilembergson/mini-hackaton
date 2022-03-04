var x = document.getElementById("demo");

let lat = undefined
let lon = undefined

let URL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b70eaafaedf8e3b2e5222bd3b12c39f`

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(populateVars);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function populateVars(position){
    lat = position.coords.latitude
    lon = position.coords.longitude
}

function showPosition() {
    x.innerHTML = "Latitude: " + lat + 
    "<br>Longitude: " + lon;
}

function getDataWeather(){
    let promesse = axios.get(URL).then(call)
    
}

function call(answer){
    let weatherData = answer.data
    console.log(weatherData)
}