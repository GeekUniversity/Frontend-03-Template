const abc = (a,b) => {
    console.log('abc');
    const  s = bbc(a,b);
    return s
}
const bbc = (a, b) => {
   console.log('bbc');
   return ddc(a,b)
}
const ddc = (a, b) => {
   console.log(a, b);
}

abc('ww','cc')