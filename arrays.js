function removeBlanks(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

function getDigits(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            result += str[i];
        }
    }
    return Number(result);
}

function acronym(str) {
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            result += words[i][0].toUpperCase();
        }
    }
    return result;
}

function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

function removeShorterStrings(arr, length) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= length) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));