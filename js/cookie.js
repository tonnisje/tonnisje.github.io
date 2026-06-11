function displayTime() {
    document.getElementById('digit-clock').innerHTML = "Current Time: " + new Date();
}

if (document.cookie.indexOf("username") <0 ){
    alert('Welcome to my homepage for the first time!');
}else
    alert("Welcome back! Your last visit was " + displayTime);

var lastVisit = getCookie("lastVisit");

if (lastVisit == ""){
    alert('Welcome to my homepage for the first time!');
}else
    alert("Welcome back! Your last visit was " + document.cookie);

document.cookie = "lastVisit=" + new Date().toString() + ";path=/";

// function getCookie(name) {
//     let cookieName = name + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let cookies = decodedCookie.split(';');

//     for (let i = 0; i < cookies.length; i++) {
//         let c = cookies[i];

//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }

//         if (c.indexOf(cookieName) == 0) {
//             return c.substring(cookieName.length, c.length);
//         }
//     }

//     return "";
// }