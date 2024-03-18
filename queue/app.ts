type QNode<T>={
    value: T,
    next?: QNode<T>,
    
}
class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;
    constructor() {
        this.head=this.tail=undefined;
        this.length=0;
    }

    enqueue(item: T) {
        this.length++;
        const node = {value: item}

        if (!this.tail) {
            this.tail=this.head=node;
        } else {
            this.tail.next=node;
            this.tail=node;
        }
    }
    dequeue(): T|undefined {
        if (!this.head) return undefined;
        this.length--;
        const head=this.head;
        this.head=head.next;
        head.next=undefined;
        if (this.length===0) {
            this.tail=undefined;
        }
        return head.value;
    }

    peek(): T|undefined {
        return this.head?.value;
    }

}

let q=new Queue<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log('queue length: ', q.length);
console.log('peek: ', q.peek());

console.log('dequeue: ', q.dequeue());
console.log('queue length: ', q.length);

q.enqueue(4)
console.log('queue length: ', q.length);