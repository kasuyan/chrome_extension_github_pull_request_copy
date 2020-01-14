chrome.runtime.onMessage.addListener(function(msg) {
	var body = document.querySelector('body');
	body.style.backgroundColor = msg.color;
});

console.log('start');
var d = document;
var s1 = d.getElementsByClassName('js-issue-title');
console.log('s1=', s1);
var s2 = location.href;
var txt = s1[0].innerText + '\n' + s2;
var cf = d.createElement('textarea');
cf.textContent = txt;
var be = d.getElementsByTagName('body')[0];
be.appendChild(cf);
cf.select();

console.log('copy');
document.execCommand('copy');
console.log(document.execCommand('copy'));
setTimeout(function() {
	// be.removeChild(cf);
}, 100);
console.log('done');
