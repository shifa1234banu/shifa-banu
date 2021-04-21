$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
        Name:{
            required:true,
            minlength:4
        },
        Place:{
            required:true,
            minlength:4

        },
        Email:{
            required:true,
            email:true
        },
        Phone:{
            required:true,
            number:true,
            minlength:10,
            maxlength:10
        }

    },
    messages:{
        
}

    })
})