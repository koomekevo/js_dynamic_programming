function mySet() {
  collection = [];

  // This method checks for the presence of an element and returns true or false
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };

  this.values = () => {
    return collection;
  };

  this.add = (element) => {
    if (!collection.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
}
