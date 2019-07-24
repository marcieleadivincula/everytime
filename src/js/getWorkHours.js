
function checkIn() {
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
    
    const horario = {
      date,
      horas,
      min,
      segundos,
      horaFinal
    }
    checkInCalc(horario)
    return horario.horaFinal
  }
  const checkInCalc = (horario) => {
    // console.log(horario.horas)
    // console.log(horario.min)
    let checkIn = []
    checkIn.push(horario.horas, horario.min)
    console.log(checkIn)
  
  }

  
function checkOutForLunch() {
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
    
    const horario = {
      date,
      horas,
      min,
      segundos,
      horaFinal
    }
    checkOutForLunchCalc(horario)
    return horario.horaFinal
  }
  const checkOutForLunchCalc = (horario) => {
    // console.log(horario.horas)
    // console.log(horario.min)
    let checkOutForLunch = []
    checkOutForLunch.push(horario.horas, horario.min)
    console.log(checkOutForLunch)
  
  }

  
function checkInFromLunch() {
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
    
    const horario = {
      date,
      horas,
      min,
      segundos,
      horaFinal
    }
    checkInFromLunchCalc(horario)
    return horario.horaFinal
  }
  const checkInFromLunchCalc = (horario) => {
    // console.log(horario.horas)
    // console.log(horario.min)
    let checkInFromLunch = []
    checkInFromLunch.push(horario.horas, horario.min)
    console.log(checkInFromLunch)
  
  }

  
function checkOut() {
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
    
    const horario = {
      date,
      horas,
      min,
      segundos,
      horaFinal
    }
    checkOutCalc(horario)
    return horario.horaFinal
  }
  const checkOutCalc = (horario) => {
    // console.log(horario.horas)
    // console.log(horario.min)
    let checkOut = []
    checkOut.push(horario.horas, horario.min)
    console.log(checkOut)
  
  }