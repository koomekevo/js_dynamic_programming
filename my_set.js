function mySet() {
  collection = [];

  // This method checks for the presence of an element and returns true or false
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };

  this.add = (element) => {};
}
