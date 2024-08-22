const apikey="bb4af8c384f262a287989234fc81e9c6";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search Button");
    const weatherIcon=document.querySelector(".weather-icon");


    async function checkweather(city){
        const response = await fetch(apiurl + city +`&appid=${apikey}`);
        if(response.status == 404){
             document.querySelector(".error").style.display="block";
             document.querySelector(".weather").style.display="none";
        }
        else {
            var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
            if(data.weather[0].main=="clouds"){
            weatherIcon.src="images/clouds.png";
            }
            if(data.weather[0].main=="clear"){
                weatherIcon.src="images/clear.png";
            }
            if(data.weather[0].main=="Rain"){
                weatherIcon.src="images/rain.png";
            }
            if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="images/drizzle.png";
            }
            if(data.weather[0].main=="Mist"){
                weatherIcon.src="images/mist.png";
            }
            document.querySelector(".weather").style.display= "block";
            document.querySelector(".error").style.display="none";

        }

    }
 searchBtn.addEventListener("click" , ()=>{
    checkweather(searchBox.value);
 })