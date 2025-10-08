class TrieNode {
    constructor() {
        this.children = Object.create(null)
        this.isEndOfWord = false
    }
}


var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.root
    for(const ch of word) {
        if(currentNode.children[ch] === undefined) {
            currentNode.children[ch] = new TrieNode()
        }

        currentNode = currentNode.children[ch]
    }
    currentNode.isEndOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.root
    for(const ch of word) {
        if(currentNode.children[ch] === undefined) {
            return false
        }
        currentNode = currentNode.children[ch]
    }

    return currentNode.isEndOfWord === true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root
    for(const ch of prefix) {
        if(currentNode.children[ch] === undefined) {
            return false
        }

        currentNode = currentNode.children[ch]
    }

    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */