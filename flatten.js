const arr =  [1, 2, 3, [4, [6, [9, 0, 20, [40]], 10]], 5, "Toyota"]
console.log(flatter(arr))


function flatter(arr) {
    let newArr = []
    for( let i=0; i<arr.length; i++) {
        if(typeof(arr[i])==="number" || typeof(arr[i])==="string") {
            newArr.push(arr[i])
        } else {
            newArr = newArr.concat(flatter(arr[i]))
        }
    }
    return newArr
}