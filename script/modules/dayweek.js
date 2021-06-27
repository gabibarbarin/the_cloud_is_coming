export function dayweek (fecha){
    let days = ['Lun','Mar','Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    let aux = new Date(fecha)
    return (days[aux.getUTCDay()])
}