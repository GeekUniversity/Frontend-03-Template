class T extends Array{
    constructor(...p){
        super()
        for(let i =0;i<p.length; i++){
            this[i]=p[i]
        }
    }
    add(...parm) {
        for(let i =0;i<parm.length; i++){
            this.push(parm[i])
        }
    }
    get length() { return this.length }
}

let a = new T('a','b','c')
console.log(a)

a.add('d','e')
a.push('f')
a.unshift('0')
a.pop()
console.log(a,a.length); 
for(let b of a){
    console.log(b);
}