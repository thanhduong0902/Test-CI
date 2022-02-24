// Ex1
function findOppositeNumber(n, input) {
    if (input >= n / 2) return input - n / 2;
    else return input + n / 2;
}
// Ex2
function merge2String(s1, s2) {
    let s = "";
    let n = s1.length, check = 0;
    if (s1.length > s2.length) {
        check = 1;
        n = s2.length;
    }
    for (let i = 0; i < n; i++)
        s += s1[i] + s2[i];
    if (check) for (let i = n; i < s1.length; i++) s += s1[i];
    else for (let i = n; i < s2.length; i++) s += s2[i];
    return s;
}