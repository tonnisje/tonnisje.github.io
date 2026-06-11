function displayTime() {
    document.getElementById('digit-clock').innerHTML = "Current Time: " + new Date();
}

if (document.cookie.indexOf("username") <0 ){
    alert('Welcome to my homepage for the first time!');
    document.cookie = "username=tonnisje";
}else
    alert("Welcome back! Your last visit was " + displayTime);