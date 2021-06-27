import { dayWeek } from './functions.js';

export function renderingPerDay (data) {
    for(let i=0 ; i<=5 ; i++){
        document.querySelector('.next-days').innerHTML += (
            `<div class="flex-container">
            <span class="day">${dayWeek(data.data[i].datetime)}</span>
            <img class="icon-climate-small" src="./img/icons/${data.data[i].weather.icon}.png" alt="icon climate">
            <div class="flex-container">
                <span class="small-letter" id="max-temp">${data.data[i].max_temp}</span>
                <span class="small-letter-simbol color-text-black">°</span>
            </div>
            <div class="flex-container">
                <span class="small-letter" id="min-temp">${data.data[i].min_temp}</span>
                <span class="small-letter-simbol">°</span>
            </div>
            </div>`
        )
    }
}