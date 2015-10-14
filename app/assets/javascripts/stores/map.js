(function(root) {
  'use strict';

  var _mapCenter = {lat: null, lng: null},
      CHANGE = "CHANGE";
      
  var resetMapCenter = function (center) {
    _mapCenter = center;
    MapStore.changed();
  };

  var MapStore = root.MapStore = $.extend({}, EventEmitter.prototype, {
    getCenter: function () {
      return new Object (_mapCenter);
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
        case MapConstants.RESET_MAP_CENTER:
          resetMapCenter(action.center);
          break;
      }
    })
  })
}(this));
