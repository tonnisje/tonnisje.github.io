function getJoke() {
    $.get(
        "https://v2.jokeapi.dev/joke/Any?type=single",
        function(result){
            $("#joke").html("A new joke every minute: " + result.joke);
        }
    );
}

getJoke();
setInterval(getJoke,60000);