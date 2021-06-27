import { renderingPerDay } from './renderingPerDay.js';

const options = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
};

fetch('http://api.weatherbit.io/v2.0/forecast/daily?city=Mar del Plata&lang=es&days=6&key=837cb209c6b04badae9d3785f6bafa14', options)
    .then(reponse => reponse.json())
    .then((data) => {
        renderingPerDay(data);
    })
    .catch(err => {
        console.error("ERROR: ", err.message)
    })

export * from '../script.js'