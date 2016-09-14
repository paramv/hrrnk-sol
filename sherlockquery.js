var N, M, A, B, C;
var MOD = Math.pow(10, 9) + 7;

function solveQuery() {
    var i, j;
    for (i = 0; i < M; i++) {
        for (j = 0; j < N; j++) {
            if (j % B[i] == 0) {
                console.log('i', i);
                console.log('j', j);
                console.log('B[i]', B[i]);
                console.log('A[j]', A[j]);
                console.log('C[i]', C[i]);
                A[j] = ((A[j] ? A[j] : 1) * C[i]) % MOD;
                console.log(A[j]);
                console.log(' ');
            }
        }
    }
    console.log(A)
}

function processData(input) {
    var inputArr;
    inputArr = input.split('\n');
    N = parseInt(inputArr[0].split(' ')[0], 10);
    M = parseInt(inputArr[0].split(' ')[1], 10);
    B = inputArr[1].split(' ').map(function(n) {
        return parseInt(n, 10)
    });
    A = inputArr[2].split(' ').map(function(n) {
        return parseInt(n, 10)
    });
    C = inputArr[3].split(' ').map(function(n) {
        return parseInt(n, 10)
    });

    // console.log(N,M,B,A,C);
    solveQuery();
}

processData('4 3\n1 2 3 4\n1 2 3\n13 29 71');

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });