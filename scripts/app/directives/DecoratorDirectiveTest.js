//For this directive name field and bootstrp 3.3.7 is required
app.directive('isRequired',function(){
    return {
        restrict: 'A',
        link: function(scope,  el, attr){
            //Selecting focuse out for field.
            $("[name='"+attr.name+"']").focusout(function(){
                if(attr.required){
                    //Gathering its value
                    var val = $("[name='"+attr.name+"']").val();

                    //Check if the form field is of type text
                    if(attr.type === 'text'){
                        if(val === '' || typeof val === 'undefined' || val == null){ //On failier
                            //Removing success property
                            $("[name='"+attr.name+"']").parent().children('.glyphicon-ok').remove();
                            $("[name='"+attr.name+"']").parent().children($(el).prop("tagName")).css('border','1px solid black');

                            //Adding danger property
                            $("[name='"+attr.name+"']").parent().append('<span class="glyphicon form-control-feedback glyphicon-remove" aria-hidden="true"></span>');
                            $("[name='"+attr.name+"']").parent().children('.glyphicon-remove').css('color','#a94442');
                            $("[name='"+attr.name+"']").parent().children($(el).prop("tagName")).css('border','1px solid #a94442');
                            $("[name='"+attr.name+"']").parent().append('<div class="help-block with-errors">'+attr.errorMessage+'</div>');
                            $("[name='"+attr.name+"']").parent().children('.with-errors').css('color','#a94442');
                            console.log(attr.name);
                        }else{ //On success
                            //Removing danger property
                            $("[name='"+attr.name+"']").parent().children('.glyphicon-remove').remove();
                            $("[name='"+attr.name+"']").parent().children('.with-errors').remove();
                            
                            //Adding success property
                            $("[name='"+attr.name+"']").parent().append('<span class="glyphicon form-control-feedback glyphicon-ok" aria-hidden="true"></span>');
                            $("[name='"+attr.name+"']").parent().children($(el).prop("tagName")).css('border','1px solid #3c763d');
                        }
                    }else{
                        console.log('Choose other fields');
                    }

                }else{
                    console.log('The field is not required.');
                }
            });
        }
    };
});