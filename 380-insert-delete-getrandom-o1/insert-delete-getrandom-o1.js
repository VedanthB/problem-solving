
var RandomizedSet = function() {
    this.valueList = []
    this.valueToIndex = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.valueToIndex.has(val)) return false

    this.valueList.push(val)
    this.valueToIndex.set(val, this.valueList.length - 1)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.valueToIndex.has(val)) return false

    const indexToRemove = this.valueToIndex.get(val)
    const lastIndex = this.valueList.length - 1
    const lastValue = this.valueList[lastIndex]

    this.valueList[indexToRemove] = lastValue
    this.valueToIndex.set(lastValue, indexToRemove)

    this.valueList.pop()
    this.valueToIndex.delete(val)

    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.valueList.length)
    return this.valueList[randomIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */