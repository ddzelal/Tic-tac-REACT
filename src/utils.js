export const checkWinner = (xo, val) => {
    let flag = false
    // check rows
    for (let i = 0; i < xo.length; i++) {
        if (xo[i].every(el => el === val)) flag = true;
    }

    // check cols
    return flag
}