const toText = document.querySelector('#toText');
const bodyText = document.querySelector('#bodyText');
const resetBtn = document.querySelector('#reset');
const autoCopyBtn = document.querySelector('#autoCopy');
const copyBtn = document.querySelector('#copy');
const tmpArea = document.querySelector('#tmp');

const saveData = {
	prc: {
		to: '',
		message: '',
		autoCopy: false,
		useCustomTemplate: false,
		customTemplate: '{TO}\n{MESSAGE}\n{PR_TITLE}\n{PR_URL}'
	}
};

chrome.storage.local.get('prc', function(result) {
	if (!Object.keys(result).length) {
		result = saveData;
	}

	toText.value = result.prc.to;
	bodyText.value = result.prc.message;
	tmpArea.value = result.prc.customTemplate;
	autoCopyBtn.checked = result.prc.autoCopy;
});

document.querySelector('#save').addEventListener('click', () => {
	const toData = toText.value;
	const bodyData = bodyText.value;
	const tmpData = tmpArea.value;
	const autoCopyFlg = autoCopyBtn.checked;

	const saveData = {
		prc: {
			to: toData,
			message: bodyData,
			autoCopy: autoCopyFlg,
			customTemplate: tmpData
		}
	};
	console.log('saved=', saveData);

	chrome.storage.local.set(saveData);
});

resetBtn.addEventListener('click', () => {
	chrome.storage.local.remove('prc');
	chrome.storage.local.set(saveData);
});

copyBtn.addEventListener('click', () => {
	console.log(tmpArea.value);
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			to: toText.value,
			message: bodyText.value,
			customTemplate: tmpArea.value
		});
	});
});
