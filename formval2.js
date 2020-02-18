function validate(){       
        let pass = document.getElementById("pass").value;
        let confirmPass = document.getElementById("confirmPass").value;
        
        if (confirmPass !== pass){
                document.getElementById("passmatch").innerHTML = 'Passwords do not match!';
        }else{
                document.getElementById("passmatch").innerHTML = 'Passwords Match.';
            }
        }