const database = firebase.database();
let signUpBtn = document.querySelector(".register-btn");
let btnCancel = document.querySelector(".btnCancel");
let emailInput = document.querySelector(".signUpEmail");
let passwordInput = document.querySelector(".signUpPassword");
let usernameInput = document.querySelector(".signUpName");
let profileInput = document.querySelector("#profileInput");
let valueSelect = "";

profileInput.addEventListener('change', function () {
    valueSelect = profileInput.value;
    return valueSelect;
})

// btnCancel.addEventListener('click', (evt) => {
    
// })
signUpBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    email = emailInput.value;
    password = passwordInput.value;
    username = usernameInput.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            saveUserInfos(email, username, valueSelect, res.user.uid);
            console.log('entrou');
        })
        .catch((error) => {
            console.log(error.code);
        })
});

let saveUserInfos = (email, username, select, uid) => {
    database.ref('users/' + uid)
        .set({
            email: email,
            username: username,
            profile: select
        });
}
