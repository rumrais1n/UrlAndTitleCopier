// Actions Save button clicked
document.addEventListener( 'DOMContentLoaded', function () {
	document.getElementById("save_button").addEventListener("click", save_options);
});

// Restore settings on option page
window.onload = onLoad;
function onLoad() {
	restore_options();
}

// Saves options to localStorage.
function save_options() {
	var select = document.getElementById("separator");
	var separator = select.children[select.selectedIndex].value;
	localStorage["option_separator"] = separator;

	var input = document.getElementById("separator_str");
	var separator_str = input.value;
	localStorage["option_separator_str"] = separator_str;

	// Update status to let user know options were saved.
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
	var separator = localStorage["option_separator"];
	if (!separator) {
		return;
	}
	var select = document.getElementById("separator");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == separator) {
			child.selected = "true";
			break;
		}
	}
	var input = document.getElementById("separator_str");
	input.value = localStorage["option_separator_str"];
}

