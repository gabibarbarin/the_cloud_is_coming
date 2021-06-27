//Funcion que renderiza informacion en los archivos HTML
export const render = (obj, info) => obj.innerHTML += (`${info}`)

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