
class Node {
    constructor(element, next) {
      this.element = element;
      this.next = next;
    }
}
class DoublyNode extends Node {
    constructor(element, next, prev) {
      super(element, next);
      this.prev = prev;
    }
}

class LinkNode{
    constructor(equalsFn = true) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = null;
    }
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
          // catches null && undefined
          this.head = node;
        } else {
          current = this.head;
          while (current.next != null) {
            current = current.next;
          }
          current.next = node;
        }
        this.count++;
    }
    removeAt(index){
        let i = 0
        let current = this.head
        if(index<this.count){
            while(i<=index){
                i++;
                if(i==index){
                    console.log('----',i,current.element);
                    current.next = current.next.next
                    this.count--
                }else{
                    current = current.next
                }
            }
        }
    }
   
    print(){
        let node = this.head
        let str = ''
        while(node.element){
            if(node.next){
                str+=node.element+'->'
                node=node.next
            }else{
                str += node.element 
                node.element = null
            }
        }
        console.log(str);
    }
    
    get Header() {
        return this.head.element;
    }
    
    clear() {
        this.head = null;
        this.count = 0;
    }

}

let ls = new LinkNode()
ls.push('a')
ls.push('b')
ls.push('c')
ls.push('d')
ls.removeAt(3)
ls.removeAt(3)
console.log(ls.Header);
console.log(ls.count);

ls.print()

// console.log(ls)