const match = (string) => {
  let state = start;
  for (let c of string) {
    state = state(c);
  }
  return state === end;
};
const start = (c) => { 
    if (c === "a") return foundA(c);
    else return start(c);
}
const end = (c) => end;
const foundA = (c) => {
  if (c === "b") return foundB(c);
  else return start(c);
};
const foundB = (c) => {
  if (c === "a") return foundA2(c);
  else return foundA(c);
};
const foundA2 = (c) => {
  if (c === "b") return foundB2(c);
  else return foundB(c);
};
const foundB2 = (c) => {
  if (c === "a") return foundA3(c);
  else return foundA2(c);
};
const foundA3 = (c) => {
  if (c === "b") return foundB3(c);
  else return foundB2(c);
};
const foundB3 = (c) => {
  if (c === "x") return end;
  else return foundA3(c);
};


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
