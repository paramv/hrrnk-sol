var N,K;

function calculateMin(arr){
	var spread,
		i = 0,
		sub= [],
		segment;
	arr.sort(function(a,b){
		if(a > b) return 1;
		else if (a < b) return -1;
		else return 0;
	});
	spread = arr[N-1] - arr[0];
	if(K == N){
		process.stdout.write(spread);
		return;
	}
	for(i=0;i<N-K+1;i++){
		sub = arr.slice(i,i+K);
		spread = Math.min(spread,sub[sub.length-1] - sub[0]);
	}
	process.stdout.write(spread.toString());

}
function processData(input) {
    var inputArr,
        samples = [],
        str;
    inputArr = input.split('\n');
    N = parseInt(inputArr[0],10);
    K = parseInt(inputArr[1],10);
    for(var i = 2;i<N+2;i++){
        str = inputArr[i].trim();
        samples.push(parseInt(str,10));
    }
    calculateMin(samples);
}

processData('9\n3\n10\n50\n80\n100\n300\n200\n1000\n20\n30');
processData('7\n3\n10\n100\n300\n200\n1000\n20\n30');
processData('10\n4\n1\n2\n3\n4\n10\n20\n30\n40\n100\n200');
processData('6\n3\n10\n20\n30\n100\n101\n102');

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });
