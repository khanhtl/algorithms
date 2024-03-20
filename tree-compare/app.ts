type BinaryNode<T> = {
    value: T
    left?: BinaryNode<T>
    right?: BinaryNode<T>
}

const a: BinaryNode<number> ={
    value: 1,
    left: {
        value: 2
    },
    right: {
        value: 3
    }
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
const c: BinaryNode<number>={
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3
        }
    },
}

function compare(a: BinaryNode<number>|undefined, b: BinaryNode<number>|undefined): boolean {
    if (a===undefined&&b===undefined) {
        return true
    }
    if (a===undefined||b===undefined) {
        return false
    }
    if (a?.value !== b?.value) {
        return false
    }
    return compare(a.left, b.left)&&compare(a.right, b.right);
}

console.log(compare(a, b));
console.log(compare(a, c));
