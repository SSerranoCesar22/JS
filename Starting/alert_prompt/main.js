function mostrarAlertaPersonalizada() {
    const nombre = prompt("Añade tu nombre:");
    if (nombre !== null && nombre !== "") {
        alert(`Hola, ${nombre}!`);
    } else {
        alert("No ingresaste un nombre.");
    }
}