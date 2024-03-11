function validarEmail() {
    let email = document.getElementById('notifyMe').value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = document.getElementById('emailError');

    if (regex.test(email)) {
      emailError.textContent = ''; // Limpiar el mensaje de error
      document.getElementById('notifyMe').style.border = '1px solid #ccc'; // Restaurar el color del borde
      alert('Correo electrónico válido. Gracias por suscribirte.');
    } else {
      emailError.textContent = 'Please provide a valid email address.';
      document.getElementById('notifyMe').style.border = '1px solid hsl(354, 100%, 66%)'; // Cambiar el color del borde a rojo
    }
}

  function checkEnter(e) {
    if (e.key === 'Enter') {
      validarEmail();
    }
  }