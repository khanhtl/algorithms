type SNode<T>={
    value: T,
    prev?: SNode<T>
}

class Stack<T> {
    public length: number;
    public head?: SNode<T>;

    constructor() {
        this.length=0;
        this.head=undefined;
    }

    push(item: T) {
        this.length++;
        const node={ value: item } as SNode<T>;
        if (!this.head) {
            this.head=node;
        } else {
            node.prev=this.head;
            this.head=node;
        }
    }

    pop() {
        if (!this.head || this.length === 0) {
            return undefined
        } 
        this.length--;
        const head=this.head;
        this.head=this.head.prev;
        head.prev=undefined;
        return head.value;
    }
    pick() {
        if (!this.head) {
            return undefined
        } 
        return this.head.value;
    }
}

let s=new Stack<number>();
s.push(1);
s.push(2);
s.push(3);


console.log('length: ', s.length);
console.log('pick: ', s.pick());
console.log('length: ', s.length);
console.log('head: ', JSON.stringify(s.head));

console.log('pop: ', s.pop());
console.log('head: ', JSON.stringify(s.head));
console.log('pop: ', s.pop());
console.log('head: ', JSON.stringify(s.head));
console.log('pop: ', s.pop());
console.log('head: ', JSON.stringify(s.head));
console.log('pop: ', s.pop());
console.log('head: ', JSON.stringify(s.head));
console.log('pop: ', s.pop());
console.log('head: ', JSON.stringify(s.head));
console.log('length: ', s.length);
s.push(5);
console.log('pick: ', s.pick());
console.log('length: ', s.length);