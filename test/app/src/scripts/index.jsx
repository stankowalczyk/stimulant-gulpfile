import url from "url";

let pre = document.createElement("pre");
pre.innerHTML = JSON.stringify(url.parse(window.location.href));
document.body.appendChild(pre);
