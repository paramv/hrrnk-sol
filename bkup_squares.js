var fs = require('fs');

var N;
var M = Math.pow(10, 9) + 7;
var V = (1 << 30) % M;
// var _cache = {
// 	'2': 4,
// 	'10000':pow(10000) % M,
// 	'300000000': pow(300000000) % M,
// 	'500000000': 125000001,
// 	'700000000': pow(700000000) % M,
// 	'1000000000': 140625001
// };
var _cache = {
	"2": 4,
	"10000": 464389664,
	"100000": 825779443,
	"500000": 892223932,
	"10000000": 70210514,
	"50000000": 738769635,
	"300000000": 441072893,
	"500000000": 125000001,
	"700000000": 986827505,
	"1000000000": 140625001
}

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
		q = Math.floor(exp / 30),
		r = exp % 30;

	if (exp == 0) return 1;
	if (exp == 1) return 2;
	while (i < q) {
		i++;
		res = (res * V) % M;
	}

	if (r > 0) res = (res * (1 << r)) % M;
	return res;
}

function cache_add(key, val) {
	_cache[key.toString()] = val;
}

function getClosest(search) {
	var keys = Object.keys(_cache),
		search = parseInt(search, 10),
		val = 2;
	keys.forEach(function(key) {
		if (parseInt(key, 10) < search) {
			val = key;
			return false;
		}
	});

	return parseInt(val, 10);
}

function cache_get(key) {
	var _key = key.toString(),
		val = _cache[_key];

	return val ? val : null;
}

function calculatePowOf(num) {
	var val = cache_get(num),
		closest,
		closestNumVal,
		difference;
	if (val) {
		return val;
	} else {
		closest = getClosest(num);
		closestNumVal = cache_get(closest);
		difference = num - closest;
		val = (closestNumVal * (pow(difference) % M)) % M;
		return val;
	}
}

// p = pow(990);
// p2 = pow2(990);
// console.log('p',p,'p2',p2,'p-p2',p-p2);

// p = pow(200);
// p2 = pow2(200);
// p3 = Math.pow(2,200) % M;
// console.log('p',p,'p2',p2,'p3',p3,'p-p2',p-p2);

function calculateLines(arr) {
	var results = [],
		squares,
		vertical;
	console.time('calculateLines');
	arr.forEach(function(n) {
		n = parseInt(n, 10);
		vertical = calculatePowOf(n);
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

fs.readFile('input.txt', function(err, txt) {
	processData(txt.toString());
})

// processData('2\n0\n1\n562617869');