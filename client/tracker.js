document.addEventListener("DOMContentLoaded", function () {
    const timestamp = Date.now();
    const host = window.location.hostname;
    const path = window.location.pathname;
    const useragent = window.navigator.userAgent;

    const requestBody = {
        "timestamp": timestamp,
        "host": host,
        "path": path,
        "useragent": useragent
    }

    fetch('http://localhost:9099', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
        }
    })
});
