const database = firebase.firestore();

window.onload = () => {
  getListEmployees();
}

function getListEmployees() {
  let employees = [];

  database.ref("users/").once('value')
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        console.log(childKey, childData );
      });
    });
}