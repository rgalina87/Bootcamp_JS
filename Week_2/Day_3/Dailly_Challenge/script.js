function pyramid(height){
	let result = [];
	for(let i = 0; i < height; i++) {
		let spaces = " ".repeat(height - i);
		let block = "*".repeat(i * 1 + 1);
		result.push(`${block}${spaces}`);
	}
		return result.join("\n");
}
console.log(pyramid(5));
