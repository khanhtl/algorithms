function two_crystal_ball(breaks: boolean[]) {
    const jumpamount=Math.floor(Math.sqrt(breaks.length));
    let i=jumpamount;
    console.log('jumpamount', i);
    
    for (; i<breaks.length; i+=jumpamount) {
        if (breaks[i]) {
            break;
        }
    }
    console.log('after for', i);

    let j = i - jumpamount;
    console.log('after minus', i);
    for (; j <= i; j++) {
        if (breaks[j]) {
          console.log(j, "i");
          return j;
        }
      }

    return -1;
}

console.log(two_crystal_ball([false, false, true, true]));
