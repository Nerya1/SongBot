let selected = document.getElementById("selected");
let channel = document.getElementById("channel");
let api = document.getElementById("api");


async function onChecked({ target })
{
    let activeTab = (await chrome.tabs.query({"active": true, "currentWindow": true}))[0];
    await chrome.storage.session.set({ "selected": target.checked ? activeTab.id : null });
}

async function onKeyUp({ target })
{
    let temp = {}
    temp[target.id] = target.value

    await chrome.storage.session.set(temp)
}

async function main()
{
    let activeTab = (await chrome.tabs.query({"active": true, "currentWindow": true}))[0];
    let storage = await chrome.storage.session.get();

    selected.checked = storage.selected == activeTab.id;
    selected.onclick = onChecked;
    
    channel.value = storage.channel ? storage.channel : ""
    channel.onkeyup = onKeyUp;
    
    api.value = storage.api ? storage.api : ""
    api.onkeyup = onKeyUp
}


main();
