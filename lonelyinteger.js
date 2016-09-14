function processData(input) {
	//Enter your code here
	var lines,
		n,
		arr,
		key,
		num,
		m = {},
		answer;
	lines = input.split('\n');
	n = lines[0];
	arr = lines[1].split(' ');
	for (var i = 0; i < n; i++) {
		num = arr[i];
		if(!num) continue;
		key = num.toString();
		if(!key) continue;
		if (!m[key]) m[key] = 1;
		else m[key] = 0;
	}
	for (var k in m) {
		if (m.hasOwnProperty(k)) {
			if (m[k] === 1) {
				answer = k;
				break;
			}
		}
	}
	process.stdout.write(answer);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	processData(_input);
});