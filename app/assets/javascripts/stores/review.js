(function(root) {
  'use strict';

  var _reviews = [],
      CHANGE = "CHANGE";

  var ReviewStore = root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      if (_reviews) {
        return _reviews.slice(0);
      } else {
        return [];
      }
    },

    addChangeListener: function (callback) {
      this.on(CHANGE, callback);
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
        case WorkspaceConstants.ONE_WORKSPACE_RECEIVED:
          _reviews = action.workspace.reviews
          ReviewStore.changed();
          break;
        case ReviewConstants.REVIEW_DELETED:
          _reviews.splice(_reviews.indexOf(action.review),1);
          ReviewStore.changed();
          break;
      }
    })
  });
}(this));
