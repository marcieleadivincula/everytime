const database = firebase.firestore();
const signUpBtn = document.querySelector(".register-btn");
const emailInput = document.querySelector("#signUpEmail");
const passwordInput = document.querySelector("#signUpPassword");

window.onload = () => {
  typing();
  signUpBtn.addEventListener('click', signUp);
}


function signUp(e) {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  createUser(email, password);
}

function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (response) {
      console.log(response.user);
      const userId = response.user.uid;
      database.collection('users/' + userId).set({
        email: email
      });
      // createProfile(userId);
    })
    .catch(function (error) {
      handleErrors(error)
    });
}

function handleErrors(error) {
  const errorMessage = error.message;
  alert(errorMessage);
}

function createProfile(userId) {
  window.location = `employee.html?id=${userId}`;
}