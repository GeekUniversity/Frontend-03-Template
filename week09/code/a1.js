class T {
    a=[]
    constructor(...p){
        
        // for(let i =0;i<p.length; i++){
        //     this.push(p[i])
        // }
       this.add =(...p2)=>{
         console.log('aaaaa',p2);
       }
       
        // a=[...p]
        return [...p]
    }
    // add(...parm) {
    //     console.log('aaaaa',parm);
    //     // for(let i =0;i<parm.length; i++){
    //     //     this.push(parm[i])
    //     // }
    // }
    get length() { return this.length }
}

let a = new T('a','b','c')
console.log(a);
a.add('d','e')
// console.log(a,a.length); 
for(let b of a){
    console.log(b);
}