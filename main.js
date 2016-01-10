(function(){

var ptb = document.getElementsByClassName("form-preview")[0];
ptb.onclick = function() {
    var gh_username = document.getElementsByClassName("form-gh-username")[0].value;
    var preview = document.getElementById("preview-display");
    preview.removeChild(preview.firstChild);
    var imgTag = document.createElement("img");
    imgTag.src = "http://ghchart.rshah.org/2016rshah/"+gh_username;
    imgTag.alt = gh_username + "'s GitHub Chart";
    preview.appendChild(imgTag);
};

})();
