$(document).ready(function () {

    $("form#loginForm").submit(function (event) {
        event.preventDefault();

        if (typeof (Storage) !== "undefined") {
            var login_username = $('#username').val();
            var login_password = $('#password').val();
            var members_informations = JSON.parse(localStorage.getItem('members_informations'));

            if(!members_informations || members_informations.length == 0){
                alert("Incorrect username or password!")
                return;
            }

            var flag = false;
            
            try{
                if (members_informations[login_username].name == login_username && members_informations[login_username].password == login_password) {
                    // TODO: change alert to web push
                    alert("Welcome back, " + members_informations[login_username].name) + "!";
    
                    sessionStorage.setItem("login_user", login_username);
                    sessionStorage.setItem("cart", members_informations[login_username].cart);
                    sessionStorage.setItem("order_history", members_informations[login_username].order_history);
                    window.location.reload();
                    window.open("/home.html", '_self');
                    return false;
                }
            }
            catch(err){

            }


            // display error message for all other case
            if(!flag)
                alert("Incorrect username or password!");
            
            return;
        }
    });
});
