function getJoke() {
    $.get(
        "https://v2.jokeapi.dev/joke/Any?type=single",
        function(result){
            $("#joke").html(result.joke);
        }
    );
}

getJoke();
setInterval(getJoke,60000);