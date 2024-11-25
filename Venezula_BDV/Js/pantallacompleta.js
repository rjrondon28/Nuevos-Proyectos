function launchIntoFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { 
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { 
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { 
        element.msRequestFullscreen();
    }
}
window.onload = function() {
    const body = document.body;
    launchIntoFullscreen(body);
};
