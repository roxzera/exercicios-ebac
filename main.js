$(document).ready(function (){
    if (grecaptcha.getResponse() != '') return true;

    alert('aaa')

    $('form').on('submit', function(e) {
        e.preventDefault();

        $('#cpf').val('')
        $('#cep').val('')
        $('#phone').val('')
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '425.321.534-23'
    })
    $('#cep').mask('00000-000', {
        placeholder: '42342-289'
    })
    $('#phone').mask('(00) 00000-0000', {
        placeholder: '(11) 99144-4324'
    })
})