import { renderingPerHour } from './renderingPerHour.js';

const options = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
};

fetch('https://api.weatherbit.io/v2.0/forecast/hourly?city=Mar del Plata&lang=es&key=837cb209c6b04badae9d3785f6bafa14&hours=24', options)
    .then(reponse => reponse.json())
    .then((data) => {
        renderingPerHour(data);
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    })

export * from '../script.js'