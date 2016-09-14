var N, points = [];

function vector(a, b) {
    return [b[0] - a[0], b[1] - a[1], b[2] - a[2]]
}

function dot(a, b) {
    return (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]);
}

function cross(a, b) {
    var c = [];
    c[0] = (a[1] * b[2]) - (a[2] * b[1]);
    c[1] = (a[2] * b[0]) - (a[0] * b[2]);
    c[2] = (a[0] * b[1]) - (a[1] * b[0]);
    return c;
}

function coPlanar(x,y,z){
    return dot(x,cross(y,z)) === 0 ? 'YES':'NO';
}

function calculateResults(){
    var results = [];
    points.forEach(function(set){
        var PS,PR,PQ;
        PS = vector(set[0],set[3]);
        PR = vector(set[0],set[2]);
        PQ = vector(set[0],set[1]);
        results.push(coPlanar(PS,PR,PQ));
    });
    process.stdout.write(results.join('\n'));
}

function processData(input) {
    //Enter your code here
    var arr = input.split('\n'),
        _points;
    N = parseInt(arr[0], 10);
    for (var i = 0; i < N; i++) {
        var j = 4*i+1;
        _points = [arr[j].split(' ').map(function(n) {
                return parseInt(n, 20)
            }),
            arr[j + 1].split(' ').map(function(n) {
                return parseInt(n, 20)
            }),
            arr[j + 2].split(' ').map(function(n) {
                return parseInt(n, 20)
            }),
            arr[j + 3].split(' ').map(function(n) {
                return parseInt(n, 20)
            })
        ];
        points.push(_points);
    }
    calculateResults();

}

processData('2\n1 2 0\n2 3 0\n4 0 0\n0 0 0\n1 0 2\n2 0 2\n4 0 0\n0 0 1');