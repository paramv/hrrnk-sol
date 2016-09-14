var palindromes = [];
function longestPalindrome(str) {
    var n = str.length,
        table = [],
        i, j;
    for (i = 0; i < n; i++) {
        if (!table[i]) table[i] = [];
        table[i][i] = true;
    }

    var start = 0,
        maxLength = 1;
    for (i = 0; i < n - 1; i++) {
        if (str[i] == str[i + 1]) {
            table[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }
    debugger;
    for (var k = 3; k <= n; k++) {
        // Fix the starting index
        for (i = 0; i < n - k + 1;i++) {
            j = i + k - 1;
            if (table[i + 1][j - 1] && str[i] == str[j]) {
                table[i][j] = true;
                if (k > maxLength) {
                    start = i;
                    maxLength = k;
                }
            }
        }
    }
    console.log(str.substring(start,start+maxLength));
}
longestPalindrome('forgeeksskeegfor');