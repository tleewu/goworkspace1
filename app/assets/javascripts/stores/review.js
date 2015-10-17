(function(root) {
  'use strict';

  var _reviews = [],
      CHANGE = "CHANGE";

  var ReviewStore = root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _reviews.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE, callback)
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE, callback);
    },

    changed: function () {
      this.emit(CHANGE);
    },

    dispatcherID: AppDispatcher.register(function (action) {
      switch (action.actionType){
        case ReviewConstants.UPDATE_REVIEWS:
          _reviews.unshift(action.review);
          ReviewStore.changed();
          break;
        case ReviewConstants.ALL_REVIEWS:
          _reviews = action.reviews;
          ReviewStore.changed();
          break;
      }
    })
  });
}(this));
