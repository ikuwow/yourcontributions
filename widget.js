(function(){

'use strict';

var atag = document.getElementsByClassName('gh-contributions');
atag[0].style.display = 'none';

var username = atag[0].dataset.ghUsername;

console.log(username);

var iframe = document.createElement('iframe');
iframe.scrolling = 'no';
iframe.frameBorder = 0;
iframe.marginWidth = 0;
iframe.marginHeight = 0;
iframe.width = '100%';
iframe.id = 'gh-contributions-widget';

atag[0].parentNode.insertBefore(iframe,atag[0]);

var widget;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    console.log('test');
    if (this.readyState==4 && this.status==200) {
        widget = this.response;
        console.log(widget);
    }
};

// xhr.responseType = '';
xhr.open('GET','https://github.com/users/'+username+'/contributions',true);
xhr.send();

var doc = iframe.contentWindow.document;
doc.open();
doc.write(widget);
doc.close();

})();
