type BinaryNode<T> = {
    value: T
    left?: BinaryNode<T>
    right?: BinaryNode<T>
}

const b: BinaryNode<number> ={
    value: 1,
    left: {
        value: 2
    },
    right: {
        value: 3
    }
}

function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q=[head];
    while (q.length) {
        const curr=q.shift() as BinaryNode<number>;
        // search
        if (curr?.value===needle) {
            return true;
        }
        if(curr.left)
            q.push(curr.left);
        if(curr.right)
            q.push(curr.right);
    }
    return false;
}
 
let result=bfs(b, 4);
console.log(result);
