document.addEventListener('DOMContentLoaded', () => {
	const startPrankButton = document.getElementById('startPrankButton');

	startPrankButton.addEventListener('click', () => {
		const selectedPrank = document.getElementById('prankSelector').value;

		// Get the active tab and inject the content script, then send a message to it
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const tabId = tabs[0].id;

			// Inject the content script if not already injected
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ['contentScript.js']
			}, () => {
				// Once the content script is injected, send a message to it
				chrome.tabs.sendMessage(tabId, { action: selectedPrank }, (response) => {
					if (chrome.runtime.lastError) {
						console.error(chrome.runtime.lastError);
					} else {
						console.log('Response from content script:', response);
					}
				});
			});
		});
	});
});
