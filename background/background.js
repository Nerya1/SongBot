chrome.tabs.onUpdated.addListener(
    async function(tabId, changeInfo, tabInfo) {
        let storage = await chrome.storage.session.get();

        if (tabId != storage.selected)
        {
            return;
        }
        

        let result = await chrome.tabs.sendMessage(tabId, changeInfo);
        result.channel = storage.channel;

        if (result)
        {
            fetch(
                storage.api + '/api',
                {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "text/plain"
                    },
                    "body": JSON.stringify(result)
                }
            );
            
            console.log(result)
        }
    }
)