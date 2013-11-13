var tags = Array.prototype.slice.apply(document.querySelectorAll('.tag .title'));

for (var t in tags) {
	var el = tags[t],
		tagName = tags[t].innerHTML,
		a = document.createElement('a');
	a.innerHTML = tagName;
	
	// Special cases
	switch(tagName) {
		case "parameters":
			a.href = './#parameter-tags';
			break;
		default:
			a.href = './#id-'+tagName+'-';
	}
	
	el.innerHTML = "";
	el.appendChild(a);
}