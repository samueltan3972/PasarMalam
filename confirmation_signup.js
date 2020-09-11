$(document).ready(function () {
    // jQuery code
    $("form#signupForm").submit(function (event) {
        
        event.preventDefault();

        if (typeof (Storage) !== "undefined") {
            console.log("test")
            var sign_username = $('#username').val(); // get username
            var sign_password = $('#password').val(); // get password
            var sign_confirm_password = $('#confirm_password').val();

            if (sign_password != sign_confirm_password) {
                alert("Please entry same value in password and confirm password ! ");
                return;
            }

            var information =
            {
                "name": sign_username,
                "password": sign_password,
                "cart": JSON.stringify([]),
                "order_history": JSON.stringify([])
            }

            var members_informations;

            if (localStorage.getItem('members_informations') == null) {
                members_informations = {};
            }
            else {
                members_informations = JSON.parse(localStorage.getItem('members_informations'));

                if(members_informations[sign_username]){
                    alert("The username has been taken");
                        return;
                }
            }

            members_informations[sign_username] = information;
            localStorage.setItem('members_informations', JSON.stringify(members_informations));

            // TODO: change alert to web push
            alert("Success")

            console.log("Succuss sign up");
            window.location.reload();
            window.open("/login.html", '_self');
            return false;
        }

    });
});






