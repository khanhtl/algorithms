function linearSearch(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }
    return false;
}

console.log(linearSearch([1,2,3,4], 2));
console.log(linearSearch([1,2,3,4], 5));