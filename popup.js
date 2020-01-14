document.getElementById('black').addEventListener('click', () => {
	console.log('black1');
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			color: 'black'
		});
	});
});

document.getElementById('red').addEventListener('click', () => {
	console.log('red1');

	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			color: 'red'
		});
	});
});
