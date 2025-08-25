class MinHeap {
  constructor() { this.a = []; }
  _parent(i) { return (i - 1) >> 1; }
  _left(i) { return (i << 1) + 1; }
  _right(i) { return (i << 1) + 2; }

  push(x) {
    this.a.push(x);
    this._up(this.a.length - 1);
  }
  _up(i) {
    while (i > 0) {
      const p = this._parent(i);
      if (this.a[p] <= this.a[i]) break;
      [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
      i = p;
    }
  }
  pop() {
    const top = this.a[0];
    const end = this.a.pop();
    if (this.a.length) {
      this.a[0] = end;
      this._down(0);
    }
    return top;
  }
  _down(i) {
    const n = this.a.length;
    while (true) {
      let s = i;
      const l = this._left(i), r = this._right(i);
      if (l < n && this.a[l] < this.a[s]) s = l;
      if (r < n && this.a[r] < this.a[s]) s = r;
      if (s === i) break;
      [this.a[i], this.a[s]] = [this.a[s], this.a[i]];
      i = s;
    }
  }
  top() { return this.a[0]; }
  size() { return this.a.length; }
}


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.heap = new MinHeap()

    for(const num of nums) {
        this.heap.push(num)
        if(this.heap.size() > k) this.heap.pop()
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.push(val)
    if(this.heap.size() > this.k) this.heap.pop()
    return this.heap.top()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */