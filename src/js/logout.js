const signOut = document.querySelector ('#logoutBtn');
const database = firebase.database();

signOut.addEventListener('click', (event) => {
  event.preventDefault();
  firebase.auth().signOut().then(() => {
      window.location = 'index.html'
  }).catch(function (error) {
      alert('Ocorreu um erro, tente novamente.')
  });
})