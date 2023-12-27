document.addEventListener('DOMContentLoaded', function () {
	const detectButton = document.getElementById('detect-button');
	const resultElement = document.getElementById('result');
  
	detectButton.addEventListener('click', function () {
	  const textInput = document.getElementById('text-input').value;
	  // Send the text to backend (content.js or background.js) for processing
	  chrome.runtime.sendMessage({ text: textInput }, function (response) {
		resultElement.textContent = response.result;
	  });
	});
  });
  