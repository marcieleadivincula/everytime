const database = firebase.database();
const signOut = document.querySelector('#logoutBtn');

window.onload = () => {
  signOut.addEventListener('click', () => {
    console.log('ok')
    firebase.auth().signOut().then(() => {
      window.location = 'index.html'
    }).catch(function (error) {
      alert('Ocorreu um erro, tente novamente.')
    });
  })
}