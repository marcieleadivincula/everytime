const database = firebase.database();
let listEmployees = document.querySelector(".listEmployees")
const dataEmployee = document.querySelector(".dataEmployee")
let valueSelect = "";

listEmployees.addEventListener('change', function () {
  valueSelect = listEmployees.value;
  listEmployee(valueSelect)
})

window.onload = () => {
  getListEmployees();
}

function listEmployee() {
  console.log(valueSelect)
  database.ref('/users/' + valueSelect).once('value')
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        console.log(childKey, childData);
      });
      // templateString();
    });
}

function getListEmployees() {
  let employees = "";
  database.ref('/users/').once('value')
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let childKey = childSnapshot.key;
        let childData = childSnapshot.val();
        console.log(childKey, childData);
        if (childData.profile === 'employee') {
          employees += `<option value='${childKey}'>${childData.username}</option>`;
        }
      });
      lististEmployees(employees)
    });
}

function lististEmployees(employees) {
  listEmployees.innerHTML = employees;
}

function addPostToDB(newtext, postType, like) {
  console.log("addPostToDB")
  return database.ref("schedules/" + uid ).push({
    text: newtext,
    postType: postType,
    like: like
  });
}

function templateString() {
  const template = ` <div>
  <ul>
   <li>

  </ul>
  </div>`
}


