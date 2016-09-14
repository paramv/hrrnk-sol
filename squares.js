var fs = require('fs');

var N;
var M = Math.pow(10, 9) + 7;

/*var catalysts = {
	'30': (1 << 30) % M,
	'100': '',
	'1000': '',
	'100000': '',
	'10000000': ''
};*/

/*var _catalysts = {
	'30': (1 << 30) % M,
	'100': pow2(100) % M,
	'1000': pow2(1000) % M,
	'100000': pow2(100000) % M,
	'10000000': pow2(10000000) % M,
};*/


/*
for (var c in catalysts){
	if(catalysts.hasOwnProperty(c) && c !== '30'){
		catalysts[c] = pow(parseInt(c,10));
	}
}*/
var catalysts = {
	'30': 73741817,
	'100': 976371285,
	'1000': 688423210,
	'100000': 607723520,
	'10000000': 255718402
};
// console.log(catalysts)
// console.log(' ')
// console.log(_catalysts)

function pow2(exp) {
	var i = 0,
		num = 2,
		res = num;
	if (exp == 0) return 1;
	if (exp == 1) return num;
	while (i < exp - 1) {
		i++;
		// if(res > M) res = (res * num) % M;
		// else res = res * num;
		res = (res * num) % M;
	}
	return res;
}

function pow(exp) {
	var i = 0,
		res = 1,
		div,
		q,
		r,
		v;
	if (exp == 0) return 1;
	if (exp == 1) return 2;

	if (exp > 10000000) {
		div = 10000000;
	} else if (exp > 100000) {
		div = 100000;
	} else if (exp > 1000) {
		div = 1000;
	} else if (exp > 100) {
		div = 100;
	} else if (exp > 30) {
		div = 30;
	}

	q = Math.floor(exp / div);
	r = Math.floor(exp % div);
	v = catalysts[div.toString()];

	console.log(exp,div, q, r, v)
	while (i < q) {
		i++;
		res = (res * v) % M;
	}
	console.log(i)

	if (r > 0) res = (res * (1 << r)) % M;
	return res;
}

p = pow(500);
p2 = pow2(500);
// p2 = Math.pow(2,990) % M;
console.log('p', p,'p2',p2,p2/p);



function calculateLines(arr) {
	var results = [],
		squares,
		vertical;
	console.time('calculateLines');
	arr.forEach(function(n) {
		n = parseInt(n, 10);
		vertical = pow(n);
		// cache_add(vertical);
		lines = (2 * (vertical + 1)) % M;
		results.push(lines);
	});
	console.timeEnd('calculateLines');
	process.stdout.write(results.join('\n'));
}

function processData(input) {
	//Enter your code here
	var arr = input.split('\n'),
		samples = [];
	N = arr[0];
	samples = arr.slice(1);
	calculateLines(samples);
}

// fs.readFile('input.txt', function(err, txt) {
// 	processData(txt.toString());
// })

// processData('2\n0\n1\n562617869');