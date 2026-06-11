if (document.cookie.indexOf("username") <0 ){
    alert('Welcome to my homepage for the first time!');
}else
    alert("Welcome back! Your last visit was " + document.cookie);

document.cookie = "lastVisit=" + new Date().toString() + ";path=/";
