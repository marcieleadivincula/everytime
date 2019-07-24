const database = firebase.database();
let email = document.querySelector("#email");
let password = document.querySelector('#password');
let btnSignIn = document.querySelector('#sign-in');
let btnSignUp = document.querySelector('#sign-up');

window.onload = () => {
	btnSignIn.addEventListener('click', (e) => {
		e.preventDefault();
		email = email.value;
		password = password.value;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((res) => {
				window.location = 'employee-tracker.html';
			})
			.catch((error) => {
				signInError(error);
			})
	});
}

let validateForm = () => {
	if (!email || !password) {
		alert('Todos os campos devem ser preenchidos');
		return;
	}
}

let getUser = (id) => {
	const doc = database.collection("users").doc(id).get();
	const user = doc.data();
	return user;
};

let identifyUser = () => {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			console.log(user);
		}
	});
}