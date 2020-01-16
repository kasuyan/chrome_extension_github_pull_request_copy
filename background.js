function copy(str) {
	var d = document;
	var cf = d.createElement('textarea');
	cf.textContent = str;
	d.body.appendChild(cf);
	cf.select();

	document.execCommand('copy');
	d.body.removeChild(cf);
	console.log('copy str', str);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log('background addListener');
	copy(request.text);
});
