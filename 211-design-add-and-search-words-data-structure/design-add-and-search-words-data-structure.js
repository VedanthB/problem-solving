class TrieNode {
    constructor() {
        this.children = Object.create(null)
        this.isEndOfWord = false
    }
}


var WordDictionary = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
WordDictionary.prototype.search = function(word) {
    
    function dfs(node, patternIndex) {
        if(patternIndex === word.length) {
            return node.isEndOfWord === true
        }

        const ch = word[patternIndex]

        if(ch !== ".") {
            const next = node.children[ch]

            if(next === undefined) return false

            return dfs(next, patternIndex + 1)
        }
        
        for(const nextCh in node.children) {
            const nextNode = node.children[nextCh]

            if(dfs(nextNode, patternIndex + 1)) {
                return true
            }
        }
        
        return false
    }

    return dfs(this.root, 0)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */