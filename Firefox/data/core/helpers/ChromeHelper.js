var ChromeHelper = function (argument) {

};

ChromeHelper.getFilePath = function(filename) {
	return chrome.extension.getURL(filename);
};

ChromeHelper.showPageAction = function(cb) {
	chrome.runtime.sendMessage({showPageAction: 'True'}, cb);
};

var Helper = ChromeHelper;