"use strict";

var readJSON = (JSONUrl, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', JSONUrl, true);

    xhr.onreadystatechange = function(data) {
        if (xhr.readyState == 4 && xhr.status == "200") {
            callback(JSON.parse(xhr.responseText));
        }
    }

    xhr.send();
}