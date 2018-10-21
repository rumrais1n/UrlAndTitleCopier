function copyToClipboard(str) {
	var obj=document.getElementById("hbnaclhngkhpmpgmfakaghgjbblokeeh");
	if (obj) {
	  obj.value = str;
	  obj.select();
	  document.execCommand("copy", false, null);
	}
}

function getSeps() {
	var sep = localStorage["option_separator"];
	var sep_char = localStorage["option_separator_str"];

	if( sep == null ) return " : ";

	if( sep == "tab" ) return "\t";
	if( sep == "cr" ) return "\n";

	if( sep_char == null ) return " : ";

	return " " + sep_char + " ";
}

function copyurl() {
	chrome.tabs.getSelected(this.jstdata, function(tab) {
	  copyToClipboard( tab.url );
	  window.close();
	});
}

function copyurlAsMarkdown() {
	chrome.tabs.getSelected(this.jstdata, function(tab) {
	  if( tab.title ){
	    copyToClipboard('['+tab.title+']'+'('+tab.url+')');
	  } else {
	    copyToClipboard( tab.url );
	  }
	  window.close();
	});
}

function copytitleurl() {
	chrome.tabs.getSelected(this.jstdata, function(tab) {
	  if( tab.title ){
	    copyToClipboard( tab.title + getSeps() + tab.url );
	  } else {
	    copyToClipboard( tab.url );
	  }
	  window.close();
	});
}

function copyurlwtag() {
	chrome.tabs.getSelected(this.jstdata,function(tab) {
	  if( tab.title ){
	    copyToClipboard( "<a href=\"" + tab.url + "\" >" + tab.title + "</a>" );
	  } else {
	    copyToClipboard( "<a href=\"" + tab.url + "\" >" + tab.url + "</a>" );
	  }
	  window.close();
	});
}

document.addEventListener('DOMContentLoaded', function () {
	  document.getElementById('copyurl').addEventListener('click', copyurl);
	  document.getElementById('copyurlAsMarkdown').addEventListener('click', copyurlAsMarkdown);
	  document.getElementById('copytitleurl').addEventListener('click', copytitleurl);
	  document.getElementById('copyurlwtag').addEventListener('click', copyurlwtag);
})









