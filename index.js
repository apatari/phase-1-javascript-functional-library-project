
function myEach(collection, fun){

    for(const item of objectToArray(collection)) {
        fun(item)
    }

     return collection
}

function objectToArray(obj) {
    let arr = obj
    if(!(Array.isArray(obj))) {        
        arr = (Object.values(obj))
    }
    return arr
}

function myMap(collection, fun) {
    const res = []
    for(const item of objectToArray(collection)) {
        res.push(fun(item))
    }
    return res
}

function myReduce(collection, fun, acc = objectToArray(collection)[0]) {
    
    if(arguments.length === 2) {
        for(const item of objectToArray(collection).slice(1)) {            
            acc = fun(acc, item, objectToArray(collection))            
        }
        return acc
    }
    for(const item of objectToArray(collection)) {
        acc = fun(acc, item, objectToArray(collection))
    }
    return acc
}

function myFind(collection, pred) {
    for(const item of objectToArray(collection)) {
        if (pred(item)) {
            return item
        }
    }
}

function myFilter(collection, pred) {
    const res = []
    for(const item of objectToArray(collection)) {
        if (pred(item)) {
            res.push(item)
        }        
    }
    return res
}

function mySize(collection) {
    let acc = 0
    const array = objectToArray(collection).slice()
    
    while (array.length > 0) {
        acc += 1
        array.pop()
    }
    return acc
}

function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0]
    } else {
        const res = []
        for(let i = 0; i < n; i++) {
            res.push(array[i])
        }
        return res
    }
}

function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1]
    } else {
        const res = []
        for(let i = 1; i <= n; i++) {
            res.unshift(array[array.length - i])
        }
        return res
    }
}

function myKeys(object) {
    const res = []
    for(const key in object) {
        res.push(key)
    }
    return res
}

function myValues(object) {
    const res = []
    for(const key in object) {
        res.push(object[key])
    }
    return res
}
