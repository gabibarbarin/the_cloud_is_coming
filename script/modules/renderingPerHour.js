import { dayweek } from './dayweek.js'

const render = (aux1, aux2) => aux1.innerHTML += (`${aux2}`)

let extractProvince = (zonaHoraria) =>{
    let flag = true
    let result = ''
    for(let i = 0 ; i < zonaHoraria.length ; i++){
        if (zonaHoraria[i] == '/'){
            flag = -flag
            while(flag == true && i < zonaHoraria.length-1){
                i++
                zonaHoraria[i] == '_' ? result += ' ' : result += zonaHoraria[i]
            }
        }
    }

    return result
}

export async function renderingPerHour (data) {
    
    let province = extractProvince(data.timezone) 
    const informationHour = new Date(data.data[0].timestamp_local)
    const cityDate = document.querySelector('.city-date')
    const mainClimate = document.querySelector('#main-climate')

    const render1 = `${data.city_name}, ${province}
                    <span class="small-letter">
                        ${dayweek(informationHour.getDate())}, ${informationHour.getHours()}:00, 
                        ${data.data[0].weather.description}
                    </span>`

    const render2 = `<div class="inside-main-climate">
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
        await render(cityDate,render1)
        render(mainClimate,render2)
    }
    catch(error){
        console.log(console.error(error))
    }   
}