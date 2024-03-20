type BinaryNode<T> = {
    value: T
    left?: BinaryNode<T>
    right?: BinaryNode<T>
}

const tree: BinaryNode<number>={
    value: 5,
    left: {
        value: 2,
        left: {
            value: 1
        },
        right: {
            value: 3
        }
    },
    right: {
        value: 7,
        left: {
            value: 6
        },
        right: {
            value: 8
        }
    }
}

function find(curr: BinaryNode<number> | undefined, needle: number): boolean {
    if (!curr) {
        return false;
    }
    if (curr.value===needle) {
        return true
    }
    if (curr.value>needle) {
        // find in left
        return find(curr.left, needle);
    }
    if (curr.value<needle) {
        // find in rigt
        return find(curr.right, needle);
    }
    return false;
} 

console.log(find(tree, 1));
