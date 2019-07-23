const database = firebase.database();
let email = document.querySelector("#email");
let password = document.querySelector('#password');
let btnSignIn = document.querySelector('#sign-in');
let btnSignUp = document.querySelector('#sign-up');

// btnSignUp.addEventListener('click', (evt) => {
// 	evt.preventDefault()
// 	email = email.value;
// 	password = password.value;

// 	firebase.auth().createUserWithEmailAndPassword(email, password)
// 		.then((res) => {
// 			saveUserInfos(email, password, res.user.uid);
// 			console.log('entrou');
// 			// window.location = 'page.html';
// 		})
// 		.catch((error) => {
// 			console.log(error.code);
// 		})
// });

// let saveUserInfos = (email, password, uid) => {
// 	database.ref('users/' + uid)
// 		.set({
// 			email: email,
// 			pass: password
// 		});
// }


btnSignIn.addEventListener('click', (e) => {
	e.preventDefault();
	email = email.value;
	password = password.value;
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then((res) => {
			window.location = 'admin.html';
		})
		.catch((error) => {
			signInError(error);
		})
});

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