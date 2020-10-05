$(document).ready(function(){
    $('#btnSend').click(function(){
        var errores ='';

        if($('#names').val()==''){
            errores += '<p>*Escriba un nombre</p>';
            $('#names').css("border-bottom-color","#f14b4b")
        }
        else{
            $('#names').css("border-bottom-color","#d1d1d1")
        }

        if($('#phone').val()==''){
            errores += '<p>*Escriba un telefono</p>';
            $('#phone').css("border-bottom-color","#f14b4b")
        }
        else{
            $('#names').css("border-bottom-color","#d1d1d1")
        }

        if($('#email').val()==''){
            errores += '<p>*Escriba un correo</p>';
            $('#email').css("border-bottom-color","#f14b4b")
        }
        else{
            $('#names').css("border-bottom-color","#d1d1d1")
        }

        if($('#mensaje').val()==''){
            errores += '<p>*Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color","#f14b4b")
        }
        else{
            $('#names').css("border-bottom-color","#d1d1d1")
        }

        if(errores == '' == false){
            var mensajeModal = '<div class="modal-wrap">'+
                                    '<div class="mensaje-modal">'+
                                        '<h3>*Errores Encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);
        }

        $('#btnClose').click(function(){
            $('.modal-wrap').remove();
        })
    })
})