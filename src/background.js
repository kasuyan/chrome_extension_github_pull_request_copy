chrome.runtime.onMessage.addListener(function(request) {
	const _str = request.text;
	const _d = document;
	const _cf = document.createElement('textarea');

	_cf.textContent = _str;
	_d.body.appendChild(_cf);
	_cf.select();
	_d.execCommand('copy');
	_d.body.removeChild(_cf);
});
