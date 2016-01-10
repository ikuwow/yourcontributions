(function(){

var ptb = document.getElementsByClassName("form-preview")[0];
ptb.onclick = function() {
    var gh_username = document.getElementsByClassName("form-gh-username")[0].value;
    var preview = document.getElementById("preview-display");

    var aTag = document.createElement("a");
    aTag.href = "http://github.com/"+gh_username;
    aTag.className = "gh-contributions";
    aTag.dataset.ghUsername = gh_username;
    aTag.target="_blank";
    aTag.innerHTML = gh_username+"'s contributions";

    var scriptTag = document.createElement("script");
    scriptTag.src = "/widget.js";

    var child;
    while (child = preview.lastChild) {
        preview.removeChild(preview.firstChild);
    }
    preview.appendChild(aTag);
    preview.appendChild(scriptTag);
};

})();
