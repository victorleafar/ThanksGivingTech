// Función para revelar el mensaje oculto y mostrar solo la foto y el mensaje
function revealMessage() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    const card = document.querySelector('.card');
    hiddenMessage.style.display = 'block';
    card.classList.add('revealed');  // Oculta el contenido innecesario
}

// Función para volver al mensaje inicial
function goBack() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    const card = document.querySelector('.card');
    hiddenMessage.style.display = 'none';
    card.classList.remove('revealed');  // Muestra el contenido original
}
