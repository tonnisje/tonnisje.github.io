function getJoke() {
    $.get(
        "https://v2.jokeapi.dev/joke/Any?type=single",
        function(result){
            $("#joke").html("A programming joke of the day: " + result.joke);
        }
    );
}

getJoke();
setInterval(getJoke,60000);