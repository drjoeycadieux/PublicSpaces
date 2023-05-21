/* 
ISC License

Copyright (c) 2023 Joey Cadieux

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

*/

window.addEventListener('load', init, false);
function init(e) {
    document.getElementById('btn')
    addEventListener('click', documentLoader, false)
}

function reqListener() {
    var obj = JSON.parse(this.responseText);

    // display our data from json file
    document.getElementById("info_title").innerHTML = obj.info_title;
    document.getElementById("dev_title").innerHTML = obj.dev_title;
    document.getElementById("website_author").innerHTML = obj.website_author;
}

function documentLoader() {
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open('get', '/data/information.json', true)
    oReq.send();
}