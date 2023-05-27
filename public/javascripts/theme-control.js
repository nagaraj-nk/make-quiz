

$(document).ready(() => {
    if (isDarkTheme()) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

function isDarkTheme() { 
    return localStorage.theme == 'dark';
}

function setDarkTheme() {
    $("#theme-css").attr("href","/stylesheets/style-dark.css");
    localStorage.theme = 'dark';
    $("#theme-label").text('Light');
}

function setLightTheme() {
    $("#theme-css").attr("href","/stylesheets/style-light.css");
    localStorage.theme = 'light';
    $("#theme-label").text('Dark');
}

function changeTheme() {
    if (isDarkTheme()) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}