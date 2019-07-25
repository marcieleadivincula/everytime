document.querySelector(".check-in-style").addEventListener('click', () => {
    const moment = checkIn();
    return document.querySelector(".check-in-hour").innerHTML = moment;
})

document.querySelector(".check-in-lunch-style").addEventListener('click', () => {
    const moment = checkOutForLunch();
    return document.querySelector(".check-in-lunch-hour").innerHTML = moment;
})

document.querySelector(".check-out-lunch-style").addEventListener('click', () => {
    const moment = checkInFromLunch();
    return document.querySelector(".check-out-lunch-hour").innerHTML = moment;
})

document.querySelector(".check-out-style").addEventListener('click', () => {
    const moment = checkOut();
    return document.querySelector(".check-out-hour").innerHTML = moment;
})
