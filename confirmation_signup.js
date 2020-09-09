$(document).ready(function() {
    // jQuery code
    $("form#signupForm").submit(function(){

            if(typeof(Storage)!=="undefined")
            {
                
                var sign_username        = $('#username').val(); // get username
                var sign_email           = $('#email').val();
                var sign_password        = $('#password').val(); // get password
                var sign_confirm_password = $('#confirm_password').val();

                if(sign_password!=sign_confirm_password)
                {
                    alert("Please entry same value in password and confirm password ! ");
                    return;
                }
                var information=
                {
                    "name" : sign_username,
                    "email" : sign_email,
                    "password" : sign_password,
                    "confirm_password" : sign_confirm_password

                }
                if(localStorage.getItem('members_informations')==null)
                {
                    members_informations=[];
                    members_informations.push(information);
                }
                else
                {
                    var members_informations=JSON.parse(localStorage.getItem('members_informations'));
                for(i=0;i<members_informations.length;i++)
                {
                    if(members_informations[i].email==sign_email){
                        alert("There has existing account with the emmail");
                        return;
                    }
                }
                    localStorage.setItem('members_indormations',JSON.stringify(members_informations));
                    members_informations=JSON.parse(localStorage.getItem('members_informations'));
                    members_informations.push(information);
                }
                
                
                localStorage.setItem('members_informations',JSON.stringify(members_informations));
                
                
                
               
                alert("Success")
                
                console.log("Succuss sign up");
                window.location.reload();
                window.open("https://itburger.azurewebsites.net/home.html",'_self');
                return false;
                
                
                
            }

        });
}); 




    

