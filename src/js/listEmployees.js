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
  const template = 
  `
  <section class="employee-history align-history">
                    <ul class="align-ul-data">
                        <li class="align-data history-calendar">
                            <i class="far fa-calendar-alt"></i>
                            <span class="span-hour AQUI TRAZ OS HORÁRIOS"></span>
                        </li>
                        <li class="align-data history-clock">
                            <i class="far fa-clock"></i>
                            <span class="span-hour AQUI TRAZ OS HORÁRIOS"></span>
                        </li>
                    </ul>
                    <ul class="align-ul-data hours">
                        <li class="align-data history-check-in">
                            <p>Entrada <span class="span-hour AQUI TRAZ OS HORARIOS"></span> </p>
                            <i class="fas fa-hourglass-start fas-size"></i>
                        </li>
                        <li class="align-data history-check-in-lunch">
                            <p>Almoço <span class="span-hour AQUI TRAZ OS HORARIOS"></span> </p>
                            <i class="fas fa-utensils fas-size"></i>
                        </li>
                        <li class="align-data history-check-out-lunch">
                            <p>Retorno <span class="span-hour AQUI TRAZ OS HORARIOS"></span> </p>
                            <i class="fas fa-utensils fas-size"></i>
                        </li>
                        <li class="align-data history-check-out">
                            <p>Saída <span class="span-hour AQUI TRAZ OS HORARIOS"></span> </p>
                            <i class="fas fa-hourglass-end fas-size"></i>
                        </li>
                    </ul>
                </section>
   `
}


