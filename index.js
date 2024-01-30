//MAKE A HASHMAP

/*
FOR DEMO,

Key will be the name
Value will be the date of birth

*/

// Step 1
class hashMap {

    constructor(){
        this.maxCapacity = 4
        this.loadFactor = 0.75
        this.capacity = 0
        this.buckets = []

        while(this.buckets.length < this.maxCapacity){
            this.buckets.push(new linkedList)
        }

    }

    findBucket(key){
        const hashCode = hash(key)
        return this.buckets[hashCode % this.maxCapacity]
    }
    
    rebuildBuckets(newNodeArray = null){
        this.buckets = []
        while(this.buckets.length < this.maxCapacity){
            this.buckets.push(new linkedList)
        }
        if (newNodeArray){
            newNodeArray.forEach(element => {
                this.set(element[0], element[1])
            });
        }
    }
    
    growthCheck(){
        if (this.capacity/this.maxCapacity >= this.loadFactor){
            // Set the capacity to 0
            // Get a list of all nodes
            // Double max capacity
            // Rebuild the buckets with the new max capacity
            // For each node run the set function to put them into their buckets

        }
    }
    
    // Step 2
    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }

        return hashCode;
    }

    // Step 3
    set(key, value){
        if (this.findBucket(key).insert(key, value)){
            this.capacity ++
            this.growthCheck()
        }
    }

    // Step 4
    get(key){
        return this.findBucket(key).find(key)
    }

    // Step 5
    has(key){
        return this.findBucket(key).contains(key)
    }

    // Step 6
    remove(key){
        if (this.findBucket(key).findAndRemove(key)){
            this.capacity --
            return true
        }
        
        return false
    }

    // Step 7
    length(){
        return this.capacity
    }

    // Step 8
    clear(){
        this.rebuildBuckets()
    }

    // Step 9
    keys(){
        const allNodes = this.entries()

        allNodes.forEach(element => {
            returnNodes.push(element[0])
        })        
        return returnNodes
    }

    // Step 10
    values(){
        const allNodes = this.entries()

        allNodes.forEach(element => {
            returnNodes.push(element[1])
        })        
        return returnNodes
    }

    // Step 11
    entries(){
        const allNodes = []

        this.buckets.forEach(element => {
            allNodes.push(element.allNodes())
        })

        return allNodes

    }

}

const node = (key, value, nextNode = null ) => {
    return {key, value, nextNode}
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    

    insert(key, value) {
        const newNode = node(key, value)

        if (this.size == 0) {
            this.size ++ 
            this.tail = newNode, 
            this.head = newNode
            return true
        }
        
        // check if the key already exists
        if(!this.findAndReplace(key, value)){
            this.size ++
            this.tail.nextNode = newNode
            this.tail = newNode
            return true
        } 
        return false
    }

    at(index, node = this.head){
        if (node == null ) return 'No node'
        if (index == 0) return node
        return this.at(index-1, node.nextNode)
    }

    pop() {
        const newTail = this.at(this.size-2)
        newTail.nextNode = null
        this.tail = newTail
        this.size -- 
    }
    contains(key, node = this.head) {
        if (node === null) {
            return false
        }
        if (node.key === key) {
            return true
        }
        return this.contains(key, node.nextNode)
        } 

    find(key, node = this.head) {
        if (node === null) return false
        if (node.key === key) return node.value;
        return this.find(value, node.nextNode)
    }

    findAndRemove(key, node = this.head, previousNode = null) {
        if (node === null) return false
        if (node.key === key) {
            if(!previousNode){
                this.head = node.nextNode
            } else previousNode.nextNode = node.nextNode
            return true
        };
        return this.findAndRemove(key, node.nextNode, node)
    }

    findAndReplace(key, value, node = this.head) {
        if (node === null) return false
        if (node.key === key) {
            node.value = value
            return true
        };
        return this.findAndReplace(key, value, node.nextNode)
    }

    allNodes(returnArray = [], node = this.head) {
        if (node === null) return returnArray;
        returnArray.push([node.index, node.value])
        return this.allNodes(returnArray, node.nextNode)
    }

    toString(theString = "", node = this.head, index = 0) {
        console.log(`${index} The string is currently ${theString}`)
        if (this.size === 1) return `( ${node.value} ) => null`
        if (index === this.size) return theString += ` null `
        index ++
        theString += `( ${node.value} ) => `
        return this.toString(theString, node.nextNode, index)
    }

}
