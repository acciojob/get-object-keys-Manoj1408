//your JS code here. If required.
let student = {
  name: 'John Doe'
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  // Create an empty array to hold the keys
  let keys = [];

  // Loop through all the keys in the object and add them to the array
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  // Return the array of keys
  return keys;
};
