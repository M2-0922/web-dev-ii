// write your solution here
function makeLine(length) {
	let line = "";
	for (let j = 1; j <= length; j++) {
		line += "* ";
	}
	return line + "\n";
}

function buildTriangle(width) {
	let triangle = "";
	for (let i = 1; i <= width; i++) {
		triangle += makeLine(i);
	}
	return triangle;
}

buildTriangle(10);
