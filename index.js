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

        while(this.map.length < this.maxCapacity){
            this.map.push(new linkedList)
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
        // Find the hash code for the key. 
        const hashCode = hash(key)

        // Find the Bucket
        const bucket = hashCode % this.capacity

        // insert the node into the bucket
        if (this.buckets[bucket].insert(key, value)){
            this.capacity ++
            this.growthCheck()
        }
    }

    // Step 4

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
        if (node.key == key) {
            return true
        }
        return this.contains(key, node.nextNode)
        } 

    find(value, node = this.head, index = 0) {
        if (node === null) return 'Value not found'
        if (node.value == value) return `${value} is at index:${index}`;
        index ++
        return this.find(value, node.nextNode, index)
    }

    findAndReplace(key, value, node = this.head) {
        if (node === null) return false
        if (node.key == key) {
            node.value = value
            return true
        };
        return this.find(key, value, node.nextNode)
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

let theList = new linkedList()


theList.append('Sarah')
theList.append('Charlie')
theList.prepend('John')

console.log(theList.size)

console.log(theList.head.value)
console.log(theList.tail.value)
console.log(theList.at(2).value)

console.log(theList.contains('Charlie'))
theList.pop()
console.log(theList.contains('Charlie'))

console.log(theList.find('Sarah'))
console.log(theList.find('Sam'))


console.log(theList.toString())