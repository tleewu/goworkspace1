(function(root) {
  'use strict';

  var _filters = { workspaceName: null,
                  mapCenter: {lat: null, lng: null},
                  bounds: {},
                  price: 0,
                  wifi: false,
                  openNow: false,
                  seating: false,
                  overall: false,
                  power: false
                },
      CHANGE = "CHANGE";

  var FilterStore = root.FilterStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _filters;
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

    changeBounds: function (bounds) {
      if (bounds) {
        _filters.bounds = {
          northEast: {lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng()},
          southWest: {lat: bounds.getSouthWest().lat(), lng: bounds.getSouthWest().lng()}
        };
      }
    },

    dispatcherID: AppDispatcher.register(function (action) {
      switch (action.actionType){
        case FilterConstants.UPDATE_MAP_CENTER:
          _filters.mapCenter = action.center;
          FilterStore.changed();
          break;
        case FilterConstants.RESET_BOUNDS:
          FilterStore.changeBounds(action.bounds);
          FilterStore.changed();
          break;
        case FilterConstants.RESET_WIFI:
          _filters.wifi = !(_filters.wifi);
          FilterStore.changed();
          break;
        case FilterConstants.RESET_HOURS:
          _filters.openNow = !(_filters.openNow);
          FilterStore.changed();
          break;
        case FilterConstants.RESET_POWER:
          _filters.power = !(_filters.power);
          FilterStore.changed();
          break;
        case FilterConstants.RESET_SEATING:
          _filters.seating = !(_filters.seating);
          FilterStore.changed();
          break;
        case FilterConstants.RESET_OVERALL:
          _filters.overall = !(_filters.overall);
          FilterStore.changed();
          break;
      }
    })
  });
}(this));