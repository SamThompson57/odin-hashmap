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

    // Step 2
    hash(key){
        let hashCode = 0;
        console.log(typeof key)
        const primeNumber = 17;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    findBucket(key){
        const hashCode = this.hash(key)
        return this.buckets[hashCode % this.maxCapacity]
    }
    
    rebuildBuckets(newNodeArray = null){
        this.buckets = []
        while(this.buckets.length < this.maxCapacity){
            this.buckets.push(new linkedList)
        }
        if (newNodeArray){
            newNodeArray.forEach(element => {
                for(let i = 0; i<element.length; i++){
                    this.set(element[i][0], element[i][1])
                }
                
            });
        }
    }
    
    growthCheck(){
        if (this.capacity/this.maxCapacity >= this.loadFactor){
            console.log('Adding Buckets')
            this.capacity = 0
            console.log(`Capacity set to ${this.capacity}`)
            const allNodes = this.entries()
            console.log(allNodes)
            this.maxCapacity = this.maxCapacity * 2
            this.rebuildBuckets(allNodes)
            console.log(`Capacity increased to ${this.maxCapacity}`)
        }
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
        returnArray.push([node.key, node.value])
        return this.allNodes(returnArray, node.nextNode)
    }

}

// Testing section

const newHash = new hashMap

newHash.set('Sam Thompson', 'Nov 20')
newHash.set('Shoshana Page', 'Jul 03')
newHash.set('Shoshana Page', 'Jul 05')
newHash.set('Mike Burzio', 'Nov 28')

console.log(newHash.entries())

console.log(`Sam: ${newHash.hash('Sam Thompson')} Shana: ${newHash.hash('Shoshana Page')}`)

console.log(`Expect True - ${newHash.has('Mike Burzio')}`)
console.log(`Expect 'Nov 20' - ${newHash.get('Sam Thompson')}`)
console.log(`Expect False - ${newHash.has('Cai Ajiz')}`)

newHash.remove('Mike Burzio')

console.log(`Expect False - ${newHash.has('Mike Burzio')}`)

newHash.clear()

newHash.set('Danny Thompson', 'Apr 10')

console.log(newHash.entries())