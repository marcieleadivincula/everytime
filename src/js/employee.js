const database = firebase.database();
let signUpBtn = document.querySelector(".register-btn");
let emailInput = document.querySelector(".signUpEmail");
let passwordInput = document.querySelector(".signUpPassword");
let profileInput = document.querySelector("#profileInput");
let valueSelect = "";

profileInput.addEventListener('change', function () {
    valueSelect = profileInput.value;
    return valueSelect;
})


signUpBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    email = emailInput.value;
    password = passwordInput.value;
    console.log(email, password, valueSelect)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            saveUserInfos(email, password, valueSelect, res.user.uid);
            console.log('entrou');
            // window.location = 'page.html';
        })
        .catch((error) => {
            console.log(error.code);
        })
});

let saveUserInfos = (email, password, select, uid) => {
    database.ref('users/' + uid)
        .set({
            email: email,
            pass: password,
            profile: select
        });
}
