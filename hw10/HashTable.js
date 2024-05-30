class CustomHashTable {
  constructor(size = 50) {
    this.size = size;
    this.table = new Array(size);
  }

  // Custom hash function
  // https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) % this.size;
  }

  // Separate chaining with linked lists
  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    // Check if the key already exists and update value
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    // Otherwise, add the new key-value pair
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

const hashTable = new CustomHashTable();

console.log("Inserting key-value pairs:");
hashTable.insert("name", "Alice");
hashTable.insert("age", 25);
hashTable.insert("location", "Wonderland");

console.log("Retrieving values by key:");
console.log("name:", hashTable.get("name")); // Alice
console.log("age:", hashTable.get("age")); // 25
console.log("location:", hashTable.get("location")); // Wonderland

console.log("Updating key-value pairs:");
hashTable.insert("age", 26);
console.log("Updated age:", hashTable.get("age")); // 26

console.log("Deleting a key-value pair:");
hashTable.delete("location");
console.log("Deleted location:", hashTable.get("location")); // undefined

console.log("Handling collisions gracefully:");
hashTable.insert("foo", "bar");
hashTable.insert("oof", "baz");
console.log("foo:", hashTable.get("foo")); // bar
console.log("oof:", hashTable.get("oof")); // baz
