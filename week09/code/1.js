class T{
    constructor(...p){
        // console.log(p);
        new.target = [...p]
        // this.list = [...p]
        // this.add=(...p2)=>{
        //     this.list = [...this.list,...parm]
        //  }
        // return this.list
        return [...this.list]
        // new.target = this.list
    }
    add(...parm) {
        this.list = [...this.list,...parm]
    }
    get length() { return this.list.length }
    [Symbol.iterator](){
        return this.list.entries()
    }
   
}

let a = new T('a','b')
a.add('c','d')
console.log(a,a.length); 
for(let b of a){
    console.log(b);
}