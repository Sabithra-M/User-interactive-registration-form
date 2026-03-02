function Login()
{
    var Email = document.getElementById("mail").value;
    var Password = document.getElementById("password").value;

    if(Email == ""){
        document.getElementById("E-email").innerHTML="Enter your Email";
        document.getElementById("mail-icon").style.top= "20%";
        return false;
    }
    if(!Email.includes("@")){
        document.getElementById("E-email").innerHTML="Please enter a valid email address.";
        document.getElementById("E-email").style.color="darkgreen";
        document.getElementById("mail-icon").style.top= "20%";
        return false;

    }
    else{
        document.getElementById("E-email").innerHTML="";
    }
    if(Password == ""){
        document.getElementById("E-password").innerHTML="Enter your Password";
        document.getElementById("password-icon").style.top="20%";
        return false;
    }
    if(isNaN(Password)){
        document.getElementById("E-password").innerHTML="Password must contain numbers only!.";
        document.getElementById("E-password").style.color="darkgreen";
        document.getElementById("password-icon").style.top="20%";
        return false;
    }
    if(Password.length < 6){
        document.getElementById("E-password").innerHTML="Password must be at least 6 characters long.";
        document.getElementById("E-password").style.color="darkgreen";
        document.getElementById("password-icon").style.top="20%";
        return false;
    }
    else{
        document.getElementById("E-password").innerHTML="";
    }
    alert("Login successful! Welcome back.");
    return true;
}
