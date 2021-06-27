import { render,extractProvince, dayWeek } from './functions.js'

export async function renderingPerHour (data) {
    
    let province = extractProvince(data.timezone) 
    const informationHour = new Date(data.data[0].timestamp_local)
    const cityDate = document.querySelector('.city-date')
    const mainClimate = document.querySelector('#main-climate')
    const locationInfo = document.querySelector('#location-info')

    const render1 = `${province}, ${data.city_name} ${Math.trunc(data.data[0].temp)}°C</span>`

    const render2 = `${data.city_name}, ${province}
                    <span class="small-letter">
                        ${dayWeek(informationHour.getDate())}, ${informationHour.getHours()}:00, 
                        ${data.data[0].weather.description}
                    </span>`

    const render3 = `<div class="inside-main-climate">
                    <div class="flex-container">
                        <img src="./img/icons/${data.data[0].weather.icon}.png" alt="icon climate">
                        <div class="temperature">
                            <span id="number">${Math.trunc(data.data[0].temp)}</span>
                            <span id="unit">°C|°F</span>
                        </div>
                    </div>

                    <div class="weather conditions">
                        <div class="small-letter">Precipitaciones: ${data.data[0].pop}
                            <span class="percentage">%</span>
                        </div>
                            <div class="small-letter">Humedad: ${data.data[0].rh}<span class="percentage">%</span>
                        </div>
                        <div class="small-letter">Viento: a ${Math.trunc((data.data[0].wind_spd)*3.6)}km/h.</div>
                    </div>
                </div>`

    try{
        await render(locationInfo,render1)
        await render(cityDate,render2)
        render(mainClimate,render3)
    }
    catch(error){
        console.log(console.error(error))
    }   
}