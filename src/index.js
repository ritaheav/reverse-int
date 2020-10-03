module.exports = function reverse (n) {
    let str = n.toString().split('');
    if(str[0] === '-') {
        str.shift()
    }
    return str.reverse().join('')
}
