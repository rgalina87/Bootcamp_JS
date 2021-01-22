function replaceString(any_string) {
	let not_pos = any_string.indexOf("not");
	let bad_pos = any_string.indexOf("bad");
	if (bad_pos > not_pos && not_pos != -1) {
		any_string = any_string.substring(0, not_pos);
		any_string = any_string + "good!";
	}
	console.log(any_string);
}
replaceString("This book is not that bad!");
replaceString("This book is bad!");
replaceString("This book is good!");
