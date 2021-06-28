import { render, extractProvince, dayWeek, hourGenerator, conditionalRendering } from './functions.js'

export async function renderingPerHour (data) {
    
    let province = extractProvince(data.timezone) 
    const informationHour = new Date(data.data[0].timestamp_local)
    const cityDate = document.querySelector('.city-date')
    const mainClimate = document.querySelector('#main-climate')
    const selectorHour = document.querySelector('#selector-hour')
    const locationInfo = document.querySelector('#location-info')

    const render1 = `${province}, ${data.city_name} <span id="temperature-header">
                        ${Math.trunc(data.data[0].temp)}</span>°C`

    const render2 = `${data.city_name}, ${province}
                    <span id="info-city" class="small-letter">
                        ${dayWeek(informationHour.getDate())}, ${informationHour.getHours()}:00, 
                        ${data.data[0].weather.description}
                    </span>`

    const render3 = `<input list="tickmarks" type="range" id="temperature-hourly" step="1" 
                        min="${informationHour.getHours()}" max="24" value="${informationHour.getHours()}">

                    <datalist id="tickmarks" class="small-letter">
                        ${hourGenerator(informationHour.getHours())}
                    </datalist>`                    

    const render4 = `<div class="inside-main-climate">
                    <div class="flex-container">
                        <img id="icon-hour-selected" src="./img/icons/${data.data[0].weather.icon}.png" 
                            alt="icon climate">
                        <div class="temperature">
                            <span id="number">${Math.trunc(data.data[0].temp)}</span>
                            <span id="unit">°C|°F</span>
                        </div>
                    </div>

                    <div class="weather conditions">
                        <div  class="small-letter">
                            Precipitaciones: <span id="precipitation">${data.data[0].pop}</span>
                            <span class="percentage">%</span>
                        </div>
                            <div class="small-letter">
                            Humedad: <span id="humidity">${data.data[0].rh}</span>
                            <span class="percentage">%</span>
                        </div>
                        <div class="small-letter">
                            Viento: a <span id="wind">${Math.trunc((data.data[0].wind_spd)*3.6)}</span>km/h.
                        </div>
                    </div>
                </div>`

    try{
        await render(locationInfo,render1)
        await render(cityDate,render2)
        await render(selectorHour,render3)
        await render(mainClimate,render4)

        const changingObjects = {
            temperatureHeaderHourSelected: document.querySelector('#temperature-header'),
            infoCityHourSelected: document.querySelector('#info-city'),
            iconHourSelected: document.querySelector('#icon-hour-selected'),
            temperatureHourSelected: document.querySelector('#number'),
            precipitationHourSelected: document.querySelector('#precipitation'),
            humidityHourSelected: document.querySelector('#humidity'),
            windHourSelected: document.querySelector('#wind'),
        }

        document.querySelector('#temperature-hourly').addEventListener("change", (event) => {
            const positionOption = event.target.value - informationHour.getHours()
            conditionalRendering(changingObjects,positionOption,data)
        })

    }
    catch(error){
        console.log(console.error(error))
    }   
}