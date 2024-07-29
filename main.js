const weatherDisplay = document.querySelector('.weather')
const weatherForm = document.querySelector('#weather-form')
const cityInput = document.querySelector('#city-input')

// Fetch weather data from API
const fetchWeather =  async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97d2115e45d758966be44f66867bf9b1`

    const res = await fetch(url)
    const data = await res.json()

    if(data.cod === '404'){
        popUpMessage(`Cidade não encontrada`)
        cityInput.value = ''
        return
    }

    const displayData = {
        city: data.name,
        temp: kelvinToCelsius(data.main.temp),
    }

    addWeatherToDOM(displayData)    
}

const addWeatherToDOM = (data) => {
    weatherDisplay.innerHTML = `
        <h1>Clima em ${data.city}</h1>
        <h2>${data.temp} &deg;C</h2>
    `

    cityInput.value = ''
}

function kelvinToCelsius(kelvin){
    if(typeof kelvin !== 'number' || kelvin < 0){
        return 'Temperatura Invalida' // Throw new Error
    }

    return Math.ceil(kelvin - 273.15)
}

const popupCloseBtn = document.querySelector('.close_btn')
const popupContainer = document.querySelector('#popup')

popupCloseBtn.addEventListener('click', ()=>{
    popupContainer.style.top = '-11vh'
})

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(cityInput.value === ''){
        popUpMessage('Porfavor, Digite um valor válido !')
    }else{
        fetchWeather(cityInput.value)
    }
})

function popUpMessage(str){
    popupContainer.style.top = '5vh'
    console.log(popupContainer.children[0])
    popupContainer.children[0].innerHTML = str
}

// Initial fetch
fetchWeather('Guapimirim')