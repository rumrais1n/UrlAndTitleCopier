(function(){
function getDefinition() {}
function onContextClick(info, tab) {
//console.log("item " + info.menuItemId + " was clicked");
//console.log("info: " + JSON.stringify(info));
//console.log("tab: " + JSON.stringify(tab));
	if( info["selectionText"] ){
		copyselectiontitleshorten( info["selectionText"] );
	}
}

var menu_id = chrome.contextMenus.create({
	"title": "Copy Selection, Title and URL(shorten)",
	"contexts":["selection"],
	"onclick": onContextClick
});

}());