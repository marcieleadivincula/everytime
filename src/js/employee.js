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

// window.onload = () => {
//     typing();
//     signUpBtn.addEventListener('click', signUp);
// }

// function manage(email, password) {
//     if (email.value !== '' && password.value !== '') {
//         signUpBtn.disabled = false;
//     } else {
//         signUpBtn.disabled = true;
//     }
// }

// function typing() {
//     let inputs = [emailInput, passwordInput];
//     inputs.forEach(function (el) {
//         el.addEventListener("keyup", function () {
//             manage(emailInput, passwordInput);
//         });
//     });
// }

// // function createUser() {
// //     const email = emailInput.value;
// //     console.log(email)
// //     const password = passwordInput.value;
// //     console.log(password)
// //     database.collection('users').set({
// //         email: email
// //     });
// //     createProfile(userId);
// // }

// function signUp(e) {
//     e.preventDefault();
//     const email = emailInput.value;
//     const password = passwordInput.value;
//     createUser(email, password);
// }

// function createUser(email, password) {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((response) => {
//             const userId = response.user.uid;
//             database.collection('users' + userId).set({
//                 username: name,
//                 email: email,
//                 // profile_picture: imageUrl
//             })
//             createProfile(userId);
//         })
//         .catch((error) => {
//             handleErrors(error)
//         });
// }


// function handleErrors(error) {
//     const errorMessage = error.message;
//     alert(errorMessage);
// }

// function createProfile(userId) {
//     window.location = `index.html?id=${userId}`;
// }