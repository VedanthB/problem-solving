class MyMinHeap {
  constructor() {
    this.heap = [];
  }

  push(x) {
    this.heap.push(x);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return undefined;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._bubbleDown(0);
    }
    return top;
  }

  top() {
    return this.heap.length ? this.heap[0] : undefined;
  }

  _bubbleUp(i) {
    while (i > 0) {
      const p = this._parent(i);
      if (this.heap[p] <= this.heap[i]) break;
      this._swap(p, i);        // swap by indices
      i = p;
    }
  }

  _bubbleDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const l = this._left(i), r = this._right(i);
      if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest === i) break;
      this._swap(i, smallest); // swap by indices
      i = smallest;
    }
  }

  _parent(i) { return (i - 1) >> 1; }   // or Math.floor((i - 1) / 2)
  _left(i)   { return (i << 1) + 1; }
  _right(i)  { return (i << 1) + 2; }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

var findKthLargest = function(nums, k) {
  const heap = new MyMinHeap();

  for (const num of nums) {
    heap.push(num);
    if (heap.heap.length > k) heap.pop();
  }

  return heap.top();
};
