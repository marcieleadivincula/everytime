document.querySelector(".employee-tracker").addEventListener('click', () => {
    document.querySelector(".employee-tracker").classList.add('active');
    document.querySelector(".employee-history").classList.remove('active');
    document.querySelector(".employee-tracker-option").classList.remove('hide');
    document.querySelector(".employee-history-option").classList.add('hide');
})

document.querySelector(".employee-history").addEventListener('click', () => {
    document.querySelector(".employee-tracker").classList.remove('active');
    document.querySelector(".employee-history").classList.add('active');
    document.querySelector(".employee-tracker-option").classList.add('hide');
    document.querySelector(".employee-history-option").classList.remove('hide');
})