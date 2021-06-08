$(document).on('click' , '#enviar' , () => {
    let rut = $('#txtidentificacion').val();
    let rutValidador = new RutValidador()

    if (rutValidador.esValido){
        $('#error').text('')
        return;
    }

    $('#error').text('Rut ingresado no es valido')
})