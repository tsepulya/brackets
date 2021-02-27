module.exports = function check(str, bracketsConfig) {
    let br = new Map(bracketsConfig)
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === br.get(arr[arr.length - 1])) {
            arr.pop();
        } else {
            arr.push(str[i])
        }
    }
    return (arr.length === 0) ? true : false;
}
