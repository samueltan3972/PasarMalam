$(document).ready(function() {
        
    $("form#loginForm").submit(function() {
        if(typeof(Storage)!=="undefined")
        {
            var login_username= $('#username').val();
            var login_password =$('#password').val();
            
       
        
        var members_informations=JSON.parse(localStorage.getItem('members_informations'));
        for(i=0;i<members_informations.length;i++)
        {
            //case 1 : both username and password wrong
            if(members_informations[i].name!=login_username&&members_informations[i].password!=login_password)
            {
                alert("You do not have create an account with this username and password before!");
                return;
            }
            
            //case 2 : username exist but password wrong
            else if(members_informations[i].name==login_username&&members_informations[i].password!=login_password)
            {
                alert("Password that you have entry is wrong!");
                return;
            }
            //case 3 : username and password correct and back to the main page
            else if(members_informations[i].name==login_username&&members_informations[i].password==login_password)
            {
                alert("Welcome back !" +members_informations[i].name);
                window.location.reload();
                window.open("https://itburger.azurewebsites.net/home.html",'_self');
                return false;
            }
        }
        
 }
    });
});
