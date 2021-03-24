// Add your functions here

function map(array, func) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]))
    }
    return newArray
}

function reduce(array, func, starting) {
    let r
    let i
    if (!!starting) {
        r = starting
    } else {
        r = array[0]
    }

    if (!!starting) {
        i = 0
    } else {
        i = 1
    }
    for (; i < array.length; i++) {
        r = func(array[i], r)
    }
    return r;
}



