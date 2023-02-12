// selectors

const temperature = document.querySelector('.temperature-section');
const city = document.querySelector('.city');
const inputVal = document.getElementById('user-val');
const searchBtn = document.querySelector('.btn');
const weatherIcon = document.querySelector('.weather-icon');
const weatherCondition = document.querySelector('.weather-condition');
const apptime = document.querySelector('.time');

let APIKEY = "82b15f2517c446ffb6f152928231202"

const fetchData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${inputVal.value}&aqi=no`)
    .then(res => res.json())
    .then(data => displayData(data));
}

const displayData = (data) => {
   city.innerHTML = `${data.location.name}`
   temperature.innerHTML = `${data.current.temp_c}°`
   weatherCondition.innerHTML = `${data.current.condition.text}`
   weatherIcon.src = `${data.current.condition.icon}`

   const date = new Date().toLocaleDateString();
   const time = new Date().toLocaleTimeString();
   
   apptime.innerHTML = `${time} -  ${date}`

 
}
searchBtn.addEventListener("click", fetchData);


