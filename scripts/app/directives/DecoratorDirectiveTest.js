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

app.directive('validateField',function(){
    return {
        restrict: 'A',
        link: function(scope, el, attr){
            var manageErrorFields = function(){
                //Removing success property
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().children('.glyphicon-ok').remove();
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().children($(el).prop("tagName")).css('border','1px solid black');

                //Adding danger property
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().append('<span class="glyphicon form-control-feedback glyphicon-remove" aria-hidden="true"></span>');
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().children('.glyphicon-remove').css('color','#a94442');
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().children($(el).prop("tagName")).css('border','1px solid #a94442');
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().append('<div class="help-block with-errors">'+attr.errorMessage+'</div>');
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().children('.with-errors').css('color','#a94442');
            };

            var manageSuccessFields = function(){
                //Removing danger property
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().children('.glyphicon-remove').remove();
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().children('.with-errors').remove();
                
                //Adding success property
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().append('<span class="glyphicon form-control-feedback glyphicon-ok" aria-hidden="true"></span>');
                $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").parent().children($(el).prop("tagName")).css('border','1px solid #3c763d');
            };

            $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").focusout(function(){
                if(attr.required){
                    //Gathering its value
                    var val = $("["+attr.validateUsing+"='"+attr[attr.validateUsing]+"']").val();

                    //Check if the form field is of type text
                    if(attr.type === 'text'){
                        if(val === '' || typeof val === 'undefined' || val == null){ //On failier
                            manageErrorFields();
                        }else{ //On success
                            manageSuccessFields();
                        }
                    }else if(attr.type === 'dropbox'){
                        if(val === '' || typeof val === 'undefined' || val == null){ //On failier
                            manageErrorFields();
                        }else{ //On success
                            manageSuccessFields();
                        }
                    }else{
                        console.log('Choose other fields');
                    } 

                }else{
                    console.log(attr.name + ' field is not required.');
                }
            });
        }
    };
});