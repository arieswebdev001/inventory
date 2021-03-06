var XHRCatcher = function(error){
    console.log(error);
    if(error.status === 500){
        if(error.response !== undefined){
            toastr.error(error.response.statusText);
            return false;
        }

        toastr.error("Internal Server Error: 500");
        return false;
    }

    var response_data;
    if(error.responseJSON === undefined){
        response_data = error.response.data.errors;
    }
    else{
        response_data = error.responseJSON.errors;
    }
    toastr.error("An error occurs: "+response_data);

    if(typeof(response_data) !== 'object'){
        if(response_data.search('token') !== -1 ){
            $.removeCookie('login_cookie');
            window.location.href='/../../login';
        }
    }
};


var SweetConfirmation = function(text, confirm_callback){
    swal({
            title:"Confirmation",
            text: text,
            showCancelButton:true,
            closeOnCancel: true,
            cancelButtonClass:'btn-sm red',
            confirmButtonClass:'btn-sm blue',
            confirmButtonText:'YES',
            cancelButtonText:'NO'
        },
        function(t){
            if(t){
                confirm_callback();
            }
        });
};