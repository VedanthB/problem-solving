/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const n = points.length 
    if(n <= 2) return n

    let globalBest = 1

    for(let i = 0; i < n; i++) {
        const slopeCount = new Map()
        let localBest = 0

        const xi = points[i][0]
        const yi = points[i][1]

        for(let j = i + 1; j < n; j++) {
            let dx = points[j][0] - xi
            let dy = points[j][1] - yi

            if(dx === 0 && dy === 0) {
                continue
            }

            if(dx === 0) {
                dy = 1; dx = 0
            } else if(dy === 0) {
                dy = 0; dx = 1
            } else {
                const g = gcd(dx, dy)

                dx/= g; dy /= g

                if (dx < 0) { dx = -dx; dy = -dy; }
            }

            const key = `${dy},${dx}`;
            const newCount = (slopeCount.get(key) || 0) + 1;
            slopeCount.set(key, newCount);
            if (newCount > localBest) localBest = newCount;
        }

        // +1 for the anchor point itself
        const withAnchor = localBest + 1;
        if (withAnchor > globalBest) globalBest = withAnchor;
    }

    return globalBest
};

// Helper: greatest common divisor
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}
