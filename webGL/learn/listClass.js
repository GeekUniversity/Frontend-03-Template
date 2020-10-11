class List {
    constructor(...arg){
        this.list=[...arg]
    }
    get length(){
        return this.list.length
    }
    add(...arg){
        this.list = [...this.list,...arg]
    }
    [Symbol.iterator]() {
        return this.list.entries()
    }
    all() {
        return this.list
    }
}

let a = new List('a','b','c')
a.add('d','e')
console.log(a.length,a.all());
for(let [i,v] of a){
    console.log('aa',v);
}