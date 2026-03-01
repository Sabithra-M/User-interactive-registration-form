function Submit()
{
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
    var Email = document.getElementById("email").value;

    if(Username == ""){
        document.getElementById("e-name").innerHTML="Kindly Enter UserName";
        document.getElementById("user-icon").style.transform = "translateY(-100%)";
        return false;
    }
    else{
        document.getElementById("e-name").innerHTML="";
    }

    if(Email == ""){
        document.getElementById("e-mail").innerHTML="Kindly Enter Email";
        document.getElementById("mail-icon").style.transform = "translateY(-100%)";
        return false;
    }
    if(!Email.includes("@")){
        document.getElementById("e-mail").innerHTML="Please enter a valid email address.";
        document.getElementById("mail-icon").style.transform = "translateY(-100%)";
        document.getElementById("e-mail").style.color="darkgreen";
        return false;
    }
    else{
        document.getElementById("e-mail").innerHTML="";
    }

    if(Password == ""){
        document.getElementById("e-password").innerHTML="Kindly Enter Password";
        document.getElementById("password-icon").style.transform = "translateY(-100%)";
        return false;
    }
    if(Password.length < 6){
        document.getElementById("e-password").innerHTML="Password must be at least 6 charectors long.";
        document.getElementById("password-icon").style.transform = "translateY(-100%)";
        document.getElementById("e-password").style.color="darkgreen";
        return false;
    }
    else{
        document.getElementById("e-password").innerHTML="";
    }
    
    alert("Account created successfully!");
    return true;
}
