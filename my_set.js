function mySet() {
  collection = [];

  // This method checks for the presence of an element and returns true or false
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };

  // This will return all the values in the set
  this.values = () => {
    return collection;
  };

  // This will add an element to the set
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = (element) => {
    if (this.has(element)) {
        index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
    }
  }
}
