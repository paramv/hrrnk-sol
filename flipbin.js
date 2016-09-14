function getPre(n){
    var i =0,
        a=[];
    while(i < n){
        i++;
        a.push(1);
    }
    return a.join('');
}
function printFlippedBin(arr){
    var results = []
    arr.forEach(function(bin){
        var len = bin.length;
        if(!bin || !len) return true;
        var str = bin.split('').map(function(i){return i === '0' ? 1 : 0}).join('');
        if(len !== 32){
            str = getPre(32-len)+str
        }
        results.push(parseInt(str,2));

    });
    process.stdout.write(results.join('\n'))
}

function processData(input) {
    //Enter your code here
    var num,
        inputArr,
        samples=[],
        str;
    inputArr = input.split('\n');
    num = parseInt(inputArr[0],10);
    for(var i = 1;i<=num;i++){
        str = inputArr[i].trim();
        samples.push(parseInt(str,10).toString(2));
    }

    printFlippedBin(samples);

}
processData('3\n2147483647\n1\n0');

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });
