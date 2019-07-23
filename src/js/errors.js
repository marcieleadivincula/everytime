let signInError = (error) => {
	switch (error.code) {
		case 'auth/wrong-password':
			alert('Senha inválida.')
			break;
		case 'auth/user-not-found':
			alert('Email não cadastrado.')
			break;
		default:
			alert(`Erro desconhecido: ${error.code}: ${error.message}`);
			break;
	}
};