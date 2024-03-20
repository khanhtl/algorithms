type BinaryNode<T> = {
    value: T
    left?: BinaryNode<T>
    right?: BinaryNode<T>
}

function walk_pre(curr: BinaryNode<number>|undefined, path: number[]): number[] {
    // base case
    if (!curr) {
        return path;
    }
    // pre
    path.push(curr.value);
    // recurse
    walk_pre(curr.left, path);
    walk_pre(curr.right, path);
    // post
    return path;
}
function walk_in(curr: BinaryNode<number>|undefined, path: number[]): number[] {
    // base case
    if (!curr) {
        return path;
    }
    // pre
    // recurse
    walk_pre(curr.left, path);
    path.push(curr.value);
    walk_pre(curr.right, path);
    // post
    return path;
}

function walk_post(curr: BinaryNode<number>|undefined, path: number[]): number[] {
    // base case
    if (!curr) {
        return path;
    }
    // pre
    // recurse
    walk_pre(curr.left, path);
    walk_pre(curr.right, path);
    path.push(curr.value);
    // post
    return path;
}

function pre_order_search(head: BinaryNode<number>): number[] {
    return walk_pre(head, []);
}

function in_order_search(head: BinaryNode<number>): number[] {
    return walk_in(head, []);
}

function post_order_search(head: BinaryNode<number>): number[] {
    return walk_post(head, []);
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

console.log(pre_order_search(b));
console.log(in_order_search(b));
console.log(post_order_search(b));
