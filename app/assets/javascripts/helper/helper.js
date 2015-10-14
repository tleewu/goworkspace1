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
