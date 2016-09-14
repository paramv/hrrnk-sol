var T;

function calculateMaxSub(arr) {

    arr.forEach(function(el) {
        var a = el.arr,
            nc = [],
            start = -1,
            end = -1,
            sum = 0,
            bestSum = 0,
            currIdx = -1,
            contig,
            nonContig,
            value;
        a.forEach(function(val, idx) {
            value = val+sum;
            if (value > 0) {
                if (sum == 0) {
                    currIdx = idx;
                }
                sum = value;
            } else {
                sum = 0;
            }
            if(sum > bestSum){
                bestSum = sum;
            }
            if(val > 0){
                nc.push(val);
            }
        });
        if(bestSum == 0){
           bestSum = Math.max.apply(Math,a);
        }
        if (nc.length == 0) {
            nonContig = Math.max.apply(Math, a)
        } else {
            nonContig = nc.reduce(function(memo, val) {
                return memo + val;
            }, 0);
        }

        process.stdout.write(bestSum.toString() + ' ' + nonContig.toString() + '\n')
    });
}

function processData(input) {
    var inputArr,
        samples = [],
        str,
        i = 1;
    inputArr = input.split('\n');
    T = inputArr[0];
    while (i < T * 2) {
        samples.push({
            n: parseInt(inputArr[i], 10),
            arr: inputArr[i + 1].split(' ').map(function(n) {
                return parseInt(n, 10)
            })
        })
        i += 2;
    }

    calculateMaxSub(samples);
}

processData('3\n4\n1 2 3 4\n6\n2 -1 2 3 4 -5\n4\n-1 -2 2 -3 -4');

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });