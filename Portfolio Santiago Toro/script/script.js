function enviar() {
    let nombre = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("message").value.trim();
    let mensajeAlerta = document.getElementById("formMessage");

    if (nombre === "" || email === "" || mensaje === "") {
        mensajeAlerta.textContent = "⚠️ Por favor, completa todos los campos.";
        mensajeAlerta.style.color = "red";
        return;
    }

    alert("Se ha enviado el correo correctamente.");
    document.getElementById("contactForm").reset();
    mensajeAlerta.textContent = "";
}
