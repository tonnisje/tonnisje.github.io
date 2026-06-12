function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let c = cookieArr[i].trim();

        if (c.indexOf(name + "=") == 0) {
            return c.substring(name.length + 1, c.length);
        }
    }
    return "";
}

let lastVisit = getCookie("lastVisit");

if (lastVisit == "") {
    alert("Welcome to my homepage for the first time!");
} else {
    alert("Welcome back! Your last visit was " + lastVisit);
}

// store current visit time
document.cookie = "lastVisit=" + new Date().toString() + ";path=/";