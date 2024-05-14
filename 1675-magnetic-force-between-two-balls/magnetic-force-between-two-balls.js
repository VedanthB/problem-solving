/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((a , b) => a - b)
    let N = position.length

    let low = 1, high = position[N - 1] - position[0]

    while(low <= high) {
        let mid = Math.floor((low + high) / 2) 

        if(canPlaceBalls(position, mid, m) === false) {
            high = mid - 1
        } else {
            low = mid + 1
        }       
    }

    return high
};

function canPlaceBalls(arr, distance, balls) {
    let N = arr.length
    let last = arr[0]
    let ballsInBag = 1

    for(let i = 0; i < N; i++) {
        
        if(arr[i] - last >= distance) {
            ballsInBag++
            last = arr[i]
        }

        if(ballsInBag >= balls) return true
    }

    return false
}