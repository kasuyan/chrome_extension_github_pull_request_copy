
chrome.runtime.onMessage.addListener(function (request) {

  const _str = request.text;
  const _d = document;
  const _cf = document.createElement('textarea');

  _cf.textContent = _str;
  d.body.appendChild(cf);
  _cf.select();
  // copied
  _d.execCommand('copy');
  _d.body.removeChild(cf);
});