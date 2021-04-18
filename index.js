$(document).ready(function () {
    $("#submit").validate({
        rules: {
            Name: {
                required: true,
                minlength: 4,
            },
            Place:{
                required:true,
                
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
        }
    })
})
