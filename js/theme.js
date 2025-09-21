function themeSet(themeStr) {
	let mbody = document.getElementById("id_body");
	
	themeStr = themeStr.toLowerCase();
	let themeStrToSet = "theme_dark";
	
	if(themeStr == "dark") {
		themeStrToSet = "theme_dark";
	} else if(themeStr == "light") {
		themeStrToSet = "theme_light";
	}
	
	mbody.setAttribute("class", themeStrToSet);
}

function themeSwap() {
	let mbody = document.getElementById("id_body");
	if(mbody.getAttribute("class") == "theme_dark") {
		mbody.setAttribute("class", "theme_light");
	} else {
		mbody.setAttribute("class", "theme_dark");
	}
}
