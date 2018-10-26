app.directive('isRequired',function(){
    return {
        restrict: 'A',
        link: function(scope,  el, attr){
            // console.log(evt);
            // console.log(scope);
            // console.log($(el[0]).prop("tagName"));    
            //console.log(attr);
            
            $($(el).prop("tagName")).focusout(function(){
                console.log($(el).prop("tagName"));
                if(attr.required){
                    var val = $("[name='"+attr.name+"']").val();
                    if(attr.type === 'text'){
                        if(val === '' || typeof val === 'undefined' || val == null){
                            //alert(attr.errorMessage);
                            $(this).parent().children('.form-control-feedback').addClass('glyphicon-remove');
                            $(this).parent().children('.glyphicon-remove').css('color','#a94442');
                            $(this).parent().children('.with-errors').text(attr.errorMessage);
                            $(this).parent().children('input').css('border', '1px solid #a94442');
                            $(this).parent().children('.with-errors').css('color','#a94442');
                        }else{
                            $(this).parent().find('.glyphicon-remove').removeClass('glyphicon-remove');
                            $(this).parent().children('.form-control-feedback').addClass('glyphicon-ok');
                            $(this).parent().children('.glyphicon-ok').css('color','#3c763d');
                            $(this).parent().children('input').css('border', '1px solid #3c763d');
                            $(this).parent().children('.with-errors').remove();
                        }
                    }
                    //console.log('Present value is '+$("[name='"+attr.name+"']").val());;
                }else{
                    console.log('The field is not required.');
                }
            });
        }
    };
});