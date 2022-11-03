function Login(){
    

    login_name = document.getElementById('input#username').value;

    login_pass = document.getElementById('input#password').value;

    console.log(login_name)
    console.log(login_pass)

    if(login_name === "admin" && login_pass == "admin"){

        window.location.href = "game.html";
    }
    /*for(let i = 0; i < user_data.length; i++) {
       
        

        if(login_name === user_data[i].username && login_pass == user_data[i].password){

            window.location.href = "game.html";
            let current_user_name = localStorage.setItem("Current User Name", login_name)
        } 

        


    }*/

    username.value = "";
    password.value = "";

}