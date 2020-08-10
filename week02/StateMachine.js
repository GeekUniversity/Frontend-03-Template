const match = (string) => {
    let state = start
    for (let c of string) {
        state = state(c)
    }
    return state === end
}
const start =(c) => c === 'a' ? foundA : start
const end = (c) => end
const foundA = (c) => c === "b" ? foundB : start(c)
const foundB = (c) => c === "a" ? foundA2 : foundA
const foundA2 = (c) => c === "b" ? foundB2 : start(c)
const foundB2 = (c) => c === "a" ? foundA3 : foundA2
const foundA3 = (c) => c === "b" ? foundB3 : start(c)
const foundB3 = (c) => c === "x" ? end : foundB2(c)

// test
console.log(match("abababx"));
console.log(match("ababababx"));
console.log(match("abababababx"));
console.log(match("abababababababx"));
console.log(match("ababababababx"));
console.log(match("ababacabababx"));
console.log(match("ababaabababx"));
console.log(match("ababaababx"));
console.log(match("ababaababx"));
console.log(match("ababacbabx"));
console.log(match("ababaaabababbabababx"));
