$(function() {
    $('#registration_form').validate({
        rules: {
            email: {
                required:true,
                email:true
            },

            name: {
                required:true,
                nowhitespace: true,
                lettersonly: true
            },

            message: {
                required:true,
            }
        },
        messages: {
            email: {
                required: 'Prosze podaj adres email',
                email: 'Prosze podaj ważny adres email'
            },
            name :{
                required: 'Prosze podaj imię',
                name: 'Prosze podaj imię'
            },

            message :{
                required: 'Proszę uzupełnij pole'
            }
        }
    })
})