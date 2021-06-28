//Funcion que renderiza informacion en los archivos HTML
export const render = (obj, info) => obj.innerHTML += (`${info}`)

//funcion que renderiza el clima segun el horario seleccionado
export const conditionalRendering = (changingObjects, hourSelected, info) => {
    const informationHour = new Date(info.data[hourSelected].timestamp_local)
    changingObjects.temperatureHeaderHourSelected.innerHTML = `${Math.trunc(info.data[hourSelected].temp)}`
    changingObjects.infoCityHourSelected.innerHTML = `
        ${dayWeek(informationHour.getDate())}, ${informationHour.getHours()}:00, 
        ${info.data[hourSelected].weather.description}`
    changingObjects.iconHourSelected.innerHTML = `${info.data[hourSelected].weather.icon}`
    changingObjects.temperatureHourSelected.innerHTML = `${Math.trunc(info.data[hourSelected].temp)}`
    changingObjects.precipitationHourSelected.innerHTML = `${Math.trunc(info.data[hourSelected].pop)}`
    changingObjects.humidityHourSelected.innerHTML = `${Math.trunc(info.data[hourSelected].rh)}`
    changingObjects.windHourSelected.innerHTML = `${Math.trunc((info.data[hourSelected].wind_spd)*3.6)}`
}

//Funcion que extrae la provincia del dato de zona horaria
export const extractProvince = zonaHoraria =>{
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

//funcion que dada una fecha te devuelve a que dia de la semana corresponde
export const dayWeek = fecha => {
    let days = ['Lun','Mar','Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    let aux = new Date(fecha)
    return (days[aux.getUTCDay()])
}

//funcion que genera el render de los option (input range)
export const hourGenerator = currentTime => {
    
    let result = ''
    for(let i = currentTime ; i <= 24 ; i++){
        result += `<option value=${i}>`
    }

    return result
}