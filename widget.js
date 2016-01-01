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

var widget = '';
widget += '<img src="http://ghchart.rshah.org/'+username+'" alt="ikuwow\'s Github chart" />';

var doc = iframe.contentWindow.document;
doc.open();
doc.write(widget);
doc.close();

})();
