/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return ''

    const queue = [root]
    const result = []

    while(queue.length) {
        const node = queue.shift()

        if(node) {
            result.push(String(node.val))
            queue.push(node.left)
            queue.push(node.right)
        } else {
            result.push('#')
        }
    }

    let i = result.length - 1
    while(i >= 0 && result[i] === '#') i--
    return result.slice(0, i + 1).join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data) return null

    const arr = data.split(',')
    const root = new TreeNode(parseInt(arr[0], 10))
    const queue = [root]
    let i = 1

    while(queue.length) {
        const node = queue.shift()

        if(i < arr.length && arr[i] !== '#') {
            const left = new TreeNode(parseInt(arr[i], 10))
            node.left = left
            queue.push(left)
        }
        i++ 

        if(i < arr.length && arr[i] !== '#') {
            const right = new TreeNode(parseInt(arr[i], 10))
            node.right = right
            queue.push(right)
        }
        i++ 
    }

    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */