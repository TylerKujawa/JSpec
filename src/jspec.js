window.jspec = (function(){
  var letContext = function (param) {
    return "letContext function called with " + param;
  }

  return {
    letContext : letContext
  }
}());
