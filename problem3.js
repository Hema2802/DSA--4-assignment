


let s="abbaca";
let res = [];

    for (let char of s) {
        if (res.length > 0 && res[res.length - 1] === char) {
            res.pop();
        } else {
            res.push(char);
        }
    }

    console.log(res.join(""));