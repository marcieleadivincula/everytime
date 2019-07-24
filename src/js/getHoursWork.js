
function getDate() {
    let date = new Date;
    let horas = date.getHours();
    let min = date.getMinutes();
    let segundos = date.getSeconds();
    let horaFinal = horas + ":" + min;
  
    // console.log(horaFinal)
  
    if (horas < 10) {
      horaFinal = horas + '0' + ":" + min;
    }
    else if (min < 10) {
      horaFinal = horas + ":" + '0' + min;
    }
    else if (horas < 10 && min < 10) {
      horaFinal = horas + '0' + ":" + '0' + min;
      
    }

  
    // const horario = {
    //   date,
    //   horas,
    //   min,
    //   segundos,
    //   horaFinal
    // }
    return horaFinal;
  }