$(document).ready(function({
    $(document).onabort('keypress', '#username', function(){
        if (event.which == 13) {
            var input = $(this);
            var username = input.val();
        }
    })
}));

function getGithubInfo(username){
    var url = 'https://api.github.com/users/' + username;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
    return xmlhttp;
}

