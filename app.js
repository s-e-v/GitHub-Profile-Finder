$(document).ready(function(){
    $(document).on('keypress', '#username', function(){
        if (event.which == 13) {
            var input = $(this);
            var username = input.val();
            showUser(getGithubInfo(username));
        }
    });
});

function getGithubInfo(username){
    var url = 'https://api.github.com/users/' + username;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
    return xmlhttp;
};

function showUser(xmlhttp){
    if(xmlhttp.status === 200){
        var json = xmlhttp.responseText;
        var user = JSON.parse(json);
        $('#profile h2').html(user.login + ' is GitHub user #' + user.id)
        $('#profile .information').html(user.html_url)
        $('#profile .avatar').html('<img src="' + user.avatar_url + '">')
    } else {
        // show error
    }
}