(function(){

'use strict';

var atag = document.getElementsByClassName('gh-contributions');
atag[0].style.display = 'none';

var username = atag[0].dataset.ghUsername;

var iframe = document.createElement('iframe');
iframe.scrolling = 'no';
iframe.frameBorder = 0;
iframe.marginWidth = 0;
iframe.marginHeight = 0;
iframe.width = '100%';
iframe.height = '180px';
// iframe.style.position = 'absolute';
iframe.width = '100%';
iframe.height = '100%';

iframe.id = 'gh-contributions-widget';

var widgetBox = document.createElement('div');
widgetBox.className = 'gh-contributions-widget-box';
widgetBox.style.overflow = 'hidden';
widgetBox.style.position = 'relative';
widgetBox.style.height = '180px';
widgetBox.style.width = '100%';
widgetBox.appendChild(iframe);
atag[0].parentNode.insertBefore(widgetBox,atag[0]);

var widget = '<div class="cbox">';
widget += '<div class="ctitle">';
widget += '<img src="https://avatars.githubusercontent.com/'+username+'?s=40"/>'+username+'\'s Contributions';
widget += '</div>';
widget += '<div class="cbody">';
widget += '<img src="http://ghchart.rshah.org/'+username+'" alt="'+username+'\'s Github chart" />';
widget += '<a href="https://github.com/'+username+'" target="_blank">See on GitHub</a>';
widget += '</div>';

widget += '</div>';

widget += (function(){/*
<style>
* {
    font: 13px / 1.4 Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.cbox {
    max-width: 728px;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    background: #fff;
    overflow: hidden;
}
.ctitle {
    background-color: #f5f5f5;
    border-bottom: 1px solid #d8d8d8;
    padding: 6px 10px 8px;
    font-size: 14px;
    line-height: 17px;
    font-weight: bold;
}
.ctitle img {
    height: 20px;
    width: 20px;
    margin-top 2px;
    margin-right: 4px;
}
.cbody {
    padding: 4px;
    overflow: hidden;
}
.cbody img {
    float: right;
    margin-right: 4px;
}
.cbody a {
    color: #4078c0;
    text-decoration: none;
    font-size: 11px;
    float: right;
    padding: 4px 10px 4px;
}
</style>
*/}).toString().replace(/(\n)/g, '').split('/*')[1].split('*/')[0];

var doc = iframe.contentWindow.document;
doc.open();
doc.write(widget);
doc.close();


})();

