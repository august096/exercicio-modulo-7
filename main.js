function validaForm(e) {
    e.preventDefault();
    let primeiroNumero = document.getElementById('numberA').value;
    let segundoNumero = document.getElementById('numberB').value;

    if(parseInt(segundoNumero) > (parseInt(primeiroNumero))) {
        alert('Esta correto')
    } else {
        alert('O numero campo B tem que ser maior que o A')
    }
}

const form = document.getElementById('formulario')

form.addEventListener('submit', validaForm)