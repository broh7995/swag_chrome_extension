chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        chrome.tabs.sendMessage(tabId, {
            message: 'urlChanged',
            url: changeInfo.url
        });
    }
);
