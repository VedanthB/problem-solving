/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = []
    
    for(const asteroid of asteroids) {
        let currentAlive = true

        while(
            currentAlive &&
            stack.length > 0 &&
            stack[stack.length - 1] > 0 &&
            asteroid < 0
        ) {
            const top = stack[stack.length - 1]
            const topSize = Math.abs(top)
            const currentSize = Math.abs(asteroid)

            if(topSize < currentSize) {
                stack.pop()
            } else if(topSize === currentSize) {
                stack.pop()
                currentAlive = false
            } else {
                currentAlive = false
            }
        }

        if(currentAlive) {
            stack.push(asteroid)
        }
    }

    return stack
};