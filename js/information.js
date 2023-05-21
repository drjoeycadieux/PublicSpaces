window.addEventListener('load', init, false);
function init(e) {
    document.getElementById('btn')
    addEventListener('click', documentLoader, false)
}

function reqListener() {
    var obj = JSON.parse(this.responseText);

    // display our data from json file
    document.getElementById("").innerHTML = obj.info_title;
    document.getElementById("").innerHTML = obj.dev_title;
    document.getElementById("").innerHTML = obj.website_author;
}

function documentLoader() {
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('get', '/data/information.json', true)
    oReq.send();
}