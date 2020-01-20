chrome.storage.local.get('prc', function (result) {
  if (result.prc && result.prc.autoCopy) {
    const text = createCopyText(result.prc);
    chrome.runtime.sendMessage({
      text: text
    });
    copied();
  }
});

chrome.runtime.onMessage.addListener(function (msg) {
  const text = createCopyText(msg);
  chrome.runtime.sendMessage({
    text: text
  });
});

const createCopyText = (prc) => {
  const pageTitle = getPRTitle();
  const pageUrl = getPRUrl();
  let _tmp = prc.customTemplate;
  const TO = prc.to !== '' ? '{TO}' : '{TO}\n';
  const MESSAGE = prc.message !== '' ? '{MESSAGE}' : '{MESSAGE}\n';
  const replacedText = _tmp
    .replace(TO, prc.to)
    .replace(MESSAGE, prc.message)
    .replace('{PR_TITLE}', pageTitle)
    .replace('{PR_URL}', pageUrl);
  return replacedText;
};

const getPRTitle = () => {
  return document.querySelector('.js-issue-title').textContent.replace(/^\s+|\s+$/g, '');
};

const getPRUrl = () => {
  return location.href;
};

const copied = () => {
  let div = document.createElement('div');
  div.innerHTML = 'COPIED';
  document.body.appendChild(div);
  div.style.position = 'absolute';
  div.style.top = 0;
  div.style.right = 0;
  div.style.padding = '0.5rem';
  div.style.backgroundColor = '#73c56e';
  div.style.color = '#fff';
  div.style.zIndex = 10000;
  setTimeout(() => {
    document.body.removeChild(div);
  }, 1000);
};
