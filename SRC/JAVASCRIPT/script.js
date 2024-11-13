
document.addEventListener("DOMContentLoaded", async () => {
    // Carregar dados de Porto Alegre ao iniciar
    await loadWeatherData("Porto Alegre");
});




document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city_name').value;

    if (!cityName) {
        Swal.fire({
            
            text: "Você precisa digitar uma cidade!",
            icon: "warning"
          });
        return;
        
    }

    await loadWeatherData(cityName);
});

async function loadWeatherData(cityName) {
    const api = '3afeb284954c8955c926203ff7f0cc99';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${api}&units=metric&lang=pt_br`;
    const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(cityName)}&appid=${api}&units=metric&lang=pt_br`;

    const results = await fetch(apiUrl);
    const json = await results.json();

    if (json.cod === 200) {
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,
        });

        // Exibir previsão do dia atual
        const forecastResults = await fetch(apiUrlForecast);
        const forecastJson = await forecastResults.json();
        showCurrentDayForecast(forecastJson);
    } else {
        Swal.fire({
            
            text: "Cidade não encontrada! Tente novamente.",
            icon: "warning"
          });
        return;
    }
}

function showInfo(json) {
    document.querySelector("#weather").classList.add('show');
    document.querySelector('#title').innerHTML = `${json.city}, ${json.country}`;
    document.querySelector('#temp_value').innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')} <sup>°C</sup>`;
    document.querySelector('#temp_description').innerHTML = `${json.description}`;
    document.querySelector('#temp_img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('#humidity').innerHTML = `${json.humidity}%`;
    document.querySelector('#wind').innerHTML = `${(json.windSpeed * 3.6).toFixed(1)} km/h`;
}

function showCurrentDayForecast(forecastJson) {
    const forecastContainer = document.querySelector("#forecast");
    forecastContainer.innerHTML = "";

    const times = ["06:00:00", "12:00:00", "18:00:00"];
    const today = new Date().getDate();

    forecastJson.list.forEach((item) => {
        const forecastDate = new Date(item.dt * 1000);
        if (forecastDate.getDate() === today && times.includes(forecastDate.toTimeString().split(" ")[0])) {
            const forecastItem = document.createElement("div");
            forecastItem.className = "forecast-item";
            forecastItem.innerHTML = `
                <p>${forecastDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p>${item.main.temp.toFixed(1)}°C</p>
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="${item.weather[0].description}">
            `;
            forecastContainer.appendChild(forecastItem);
        }
    });
}

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}
document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const cityName = document.querySelector('#city_name').value || 'Porto Alegre';
    
    // Armazena o nome da cidade no Local Storage
    localStorage.setItem('selectedCity', cityName);
    
    // Código para buscar e exibir o clima atual...
});
