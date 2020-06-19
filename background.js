//if want to add logo use this
// "icons":{
//     "16": "icons/logo_16x16.png",
//     "48":"icons/logo_48x48.png",
//     "128":"icons/logo_128x128.png"
// }

chrome.webRequest.onBeforeRequest.addListener(
    function(details){return {cancel : true}},
    {urls: ["*://*.zedo.com/*"]},
    ["blocking"]
)
//zedo.com contains lots of advertising sites