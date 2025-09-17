
var params = new URLSearchParams(window.location.search);

function sendTo(url){
    // Przekierowania na konkretne pliki HTML
    if(url === 'documents') {
        location.href = 'documents.html' + window.location.search;
    } else if(url === 'qr') {
        location.href = 'qr.html' + window.location.search;
    } else if(url === 'services') {
        location.href = 'services.html' + window.location.search;
    } else if(url === 'more') {
        location.href = 'more.html' + window.location.search;
    } else if(url === 'home') {
        location.href = 'home.html' + window.location.search;
    } else {
        location.href = url + '.html' + window.location.search;
    }
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
  }
  
  if (getMobileOperatingSystem() == 2){
      document.querySelector(".bottom_bar").style.height = "70px"
}
