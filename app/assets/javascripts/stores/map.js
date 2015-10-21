(function(root) {
  'use strict';

  var _mapCenter = {lat: null, lng: null},
          CHANGE = "CHANGE";

  var MapStore = root.MapStore = $.extend({}, EventEmitter.prototype, {

    get: function () {
      return _mapCenter;
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
        case FilterConstants.UPDATE_MAP_CENTER:
          _mapCenter = action.center;
          MapStore.changed();
          break;
      }
    })
  });
}(this));
