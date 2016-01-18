(function(){

var getcode = document.getElementsByClassName('get-code')[0];

var preview = function() {
    var gh_username = document.getElementsByClassName("form-gh-username")[0].value;
    if (gh_username === "") {
        return;
    }
    var preview = document.getElementById("preview-display");

    var aTag = document.createElement("a");
    aTag.href = "http://github.com/"+gh_username;
    aTag.className = "gh-contributions";
    aTag.dataset.ghUsername = gh_username;
    aTag.target="_blank";
    aTag.innerHTML = gh_username+"'s contributions";

    var scriptTag = document.createElement("script");
    scriptTag.src = location.href.split('?')[0]+"widget.min.js";

    var child;
    while (child = preview.lastChild) {
        preview.removeChild(preview.firstChild);
    }
    preview.appendChild(aTag);
    preview.appendChild(scriptTag);

    getcode.textContent = aTag.outerHTML + scriptTag.outerHTML;
};

var ptb = document.getElementsByClassName("form-preview")[0];
var inputGitHubUsername = document.getElementsByClassName("form-gh-username")[0];
ptb.onclick = preview;
inputGitHubUsername.onkeypress = function() {
    if (window.event.keyCode === 13) {
        preview();
    }
};

// autofocus
getcode.onclick = function(){
    getcode.select();
};

})();
