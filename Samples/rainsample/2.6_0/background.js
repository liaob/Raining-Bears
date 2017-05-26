if ((localStorage["onInstall"] != "false") && (localStorage["onInstall"] != false)){
	chrome.tabs.create({url: "http://rainonme.github.io/rain-on-me/", selected:true})
	localStorage["onInstall"] = false;
}