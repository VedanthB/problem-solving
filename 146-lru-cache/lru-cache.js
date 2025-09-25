class MyListNode {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.keyToNode = new Map()

    this.dummyHead = new MyListNode(0, 0)
    this.dummyTail = new MyListNode(0, 0)

    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.keyToNode.get(key)
    if(!node) return -1
    this._moveToFront(node)
    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node = this.keyToNode.get(key)

    if(node) {
        node.val = value
        this._moveToFront(node)
        return
    }

    const newNode = new MyListNode(key, value)
    this.keyToNode.set(key, newNode)
    this._addToFront(newNode)

    if(this.keyToNode.size > this.capacity) {
        this._removeLRU()
    }
};

LRUCache.prototype._addToFront = function(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node

}

LRUCache.prototype._removeNode = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    node.prev = null
    node.next = null
}

LRUCache.prototype._moveToFront = function(node) {
    this._removeNode(node)
    this._addToFront(node)
}

LRUCache.prototype._removeLRU = function() {
    const lru = this.dummyTail.prev
    this._removeNode(lru)
    this.keyToNode.delete(lru.key)
}





/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */