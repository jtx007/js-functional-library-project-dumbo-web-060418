fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      for (const element in collection) {
         cb(collection[element])
      }
      return collection
    },

    map: function(collection, cb) {
      const newCollection = []
      for (const element in collection) {
        newCollection.push(cb(collection[element]))
      }
      return newCollection
    },

    reduce: function(collection, cb, acc) {
      for(const element in collection) {
        acc =cb(acc, collection[element], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for(const element in collection) {
        if(predicate(collection[element])) {
          return collection[element]
        }
      }
    },

    filter: function(collection, predicate) {
      const newCollection = []
      for (const element in collection) {
        if(predicate(collection[element])) {
          newCollection.push(collection[element])
        }
      }
      return newCollection
    },
    size: function(collection) {
      if (collection instanceof Array) {
        return collection.length
      } else if (collection instanceof Object ) {
        return Object.keys(collection).length
      }
    },
    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },
    last: function(array , n) {
      if (n) {
        return array.slice(-(n))
      } else {
        return array.slice(-1).pop()
      }
    },
    compact: function(array) {
      const newCollection = []
      for (const element in array) {
        if (array[element]) {
          newCollection.push(array[element])
        }
      }
      return newCollection
    },
    sortBy: function(array, cb) {
      const newArr = array.map(cb)
      return newArr.sort(function(a, b){ return a - b})
    },
    flatten: function(array, shallow){

    }
  }
})()

fi.libraryMethod()
