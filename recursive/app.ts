type Point={
    x: number,
    y: number
}

const dir=[
    // go top
    [0, -1],
    // go right
    [1, 0],
    // go bottom
    [0, 1],
    // go left
    [-1, 0],
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // out side
    if (curr.x<0||curr.x>=maze[0].length||curr.y<0||curr.y>=maze.length) {
        console.log('out side ', curr.x, curr.y);
        
        return false
    }
    // wall
    if (maze[curr.y][curr.x]===wall) {
        console.log('wall ', curr.x, curr.y);
        return false;
    }
    // end
    if (curr.x===end.x&&curr.y===end.y) {
        console.log('end ', curr.x, curr.y);
        path.push(curr);
        return true;
    }
    // seen
    if (seen[curr.y][curr.x]) {
        console.log('seen ', curr.x, curr.y);
        return false
    }
    seen[curr.y][curr.x] = true
    // pre
    console.log('move: ', curr.x, curr.y);
    path.push(curr);
    // recurve
    for (let i = 0; i < dir.length; i++) {
        const [x, y]=dir[i];
        if(walk(maze, wall, {
            x: curr.x+x,
            y: curr.y+y
        },
            end,
            seen,
            path
        )) {
            
            return true
        }
    }
    // post
    path.pop();

    return false;
}

function solve(maze: string[], wall: string, start: Point, end: Point) {
    const seen: boolean[][]=[];
    const path: Point[]=[];
    for (let i=0; i<maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    console.log(path);
    
}

const maze=[
    '################### #',
    '########            #',
    '###       ###########',
    '##### ###############',
]

const wall='#';

const start={
    x: 5,
    y: 3
}

const end={
    x: 19,
    y: 0
}

solve(maze, wall, start, end)