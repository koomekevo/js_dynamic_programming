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
  };

  this.size = () => {
    return collection.length;
  };

  this.union = (otherSet) => {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = (otherSet) => {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  this.difference = (otherSet) => {
    var differenceSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
      return differenceSet;
    })
  }

  this.subset = (otherSet) => {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}