chrome.runtime.onMessage.addListener(
    async function(changeInfo, sender, sendResponse) {
        if (!changeInfo["title"] || changeInfo["title"] == "YouTube Music")
        {
            return;
        }
        
        let title = document.querySelector(".content-info-wrapper.ytmusic-player-bar .title.ytmusic-player-bar")
        let bottom = document.querySelector(".content-info-wrapper.ytmusic-player-bar .byline.ytmusic-player-bar")
        
        sendResponse(
            {
                "title": title.textContent,
                "artist": bottom.childNodes[0].textContent,
                "album": bottom.childNodes[2].textContent,
                "year": bottom.childNodes[4].textContent
            }
        )
    }
)