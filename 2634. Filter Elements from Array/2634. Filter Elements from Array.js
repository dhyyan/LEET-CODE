/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr=[]

    for(let i=0 ; i<arr.length ; i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i])
        }
    }
    console.log(filteredArr)
    return filteredArr
};