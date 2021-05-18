function validar() {
    var form = document.form;

    if (form.nombre.value == 0) {
        alert("El campo nombre esta vacio");
        form.nombre.value = "";
        form.nombre.focus();
        return false;
    }

    if (form.asunto.value == 0) {
        alert("El campo asunto esta vacio");
        form.asunto.value = "";
        form.asunto.focus();
        return false;
    }

    if (form.correo.value == 0) {
        alert("El campo correo esta vacio");
        form.correo.value = "";
        form.correo.focus();
        return false;
    }

    if (form.mensaje.value == 0) {
        alert("El campo mensaje esta vacio");
        form.mensaje.value = "";
        form.mensaje.focus();
        return false;
    }

    form.submit();
}