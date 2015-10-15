EventEmitter.prototype._maxListeners = 100;

Array.prototype.includes = function (element) {
  var doesInclude = false;
  this.forEach (function (el){
    if (element.id === el.id ){
      doesInclude = true;
      return;
    }
  });
  return doesInclude;
};


Array.prototype.isEqual = function (anotherArray) {
  if (this.length !== anotherArray.length) {
    return false;
  } else {
    for (var i = 0; i < this.length; i++ ) {
      if (this[i].id !== anotherArray[i].id){
        return false;
      }
    }
    return true;
  }
};
