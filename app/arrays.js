exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var position = arr.indexOf(item);
    return position;
  },

  sum : function(arr) {
    var sum = 0;
    $.each(arr, function(){
      sum += this;
    });
    return sum;
  },

  remove : function(arr, item) {
    $.each(arr, function(){
      if( this == item){
        var position = arr.indexOf(item);
        arr.splice(position, 1);
      }
    });
    return arr;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
