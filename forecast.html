document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = '3afeb284954c8955c926203ff7f0cc99';
    const cityName = localStorage.getItem('selectedCity') || 'Porto Alegre';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`;

    const results = await fetch(apiUrl);
    const json = await results.json();

    if (json.cod === '200') {
        displayForecast(json.list);
    } else {
        document.querySelector('#forecast').innerHTML = `<p>Não foi possível carregar os dados para ${cityName}.</p>`;
    }
});

function displayForecast(forecastList) {
    const forecastContainer = document.querySelector('#forecast');
    forecastContainer.innerHTML = '';

    const daysForecast = {};
    
    // Organiza os itens por dia da semana e horário
    forecastList.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('pt-BR', { weekday: 'long' });
        const hour = date.getHours();

        // Somente horários 06:00, 12:00 e 18:00
        if ([6, 12, 18].includes(hour)) {
            if (!daysForecast[day]) {
                daysForecast[day] = [];
            }
            daysForecast[day].push(item);
        }
    });

    // Renderiza os dados de previsão para cada dia
    Object.keys(daysForecast).forEach((day) => {
        const dayContainer = document.createElement('div');
        dayContainer.classList.add('day-forecast');

        // Obtém a data correspondente ao primeiro item do dia
        const firstItemDate = new Date(daysForecast[day][0].dt * 1000);
        const formattedDate = firstItemDate.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit'
        }); // Sem o ano

        const dayTitle = document.createElement('h3');
        dayTitle.textContent = `${day.toUpperCase()} - ${formattedDate}`; // Adiciona a data sem o ano
        dayContainer.appendChild(dayTitle);

        const itemsContainer = document.createElement('div');
        itemsContainer.classList.add('forecast-items-container');

        daysForecast[day].forEach((item) => {
            const time = new Date(item.dt * 1000).toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
            });

            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            forecastItem.innerHTML = `
                <p>${time}</p>
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="${item.weather[0].description}">
                <p>${item.main.temp.toFixed(1)}°C</p>
                <p>${item.weather[0].description}</p> <!-- Alt exibido abaixo da imagem -->
            `;
            itemsContainer.appendChild(forecastItem);
        });

        dayContainer.appendChild(itemsContainer);
        forecastContainer.appendChild(dayContainer);
    });
}
