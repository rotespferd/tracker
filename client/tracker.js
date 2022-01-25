document.addEventListener("DOMContentLoaded", function () {
    let timestamp = Date.now();
    let host = window.location.hostname;
    let path = window.location.pathname;
    let useragent = window.navigator.userAgent;

    let requestBody = {
        "timestamp": timestamp,
        "host": host,
        "path": path,
        "useragent": useragent
    }

    fetch('http://localhost:9099', {
        method: 'POST',
        body: requestBody,
        headers: {
            "Content-Type": "application/json"
        }
    })
});
