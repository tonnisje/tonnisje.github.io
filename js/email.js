var shown = false;
function showhideEmail(){
    if (shown){
        document.getElementById('email').innerHTML = "Show my email";
        shown = false;
    }else{
        var myemail = "<a href='mailto:tonnisje" + "@" + "mail.uc.edu'>tonnisje" + "@" + "mail.uc.edu</a>" + "  (Hide my email)";
        document.getElementById('email').innerHTML= myemail;
        shown = true;
    }
}