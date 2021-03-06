(function(root) {
  'use strict';

  var _filters = { workspaceName: null,
                  bounds: {},
                  wifi: false,
                  openNow: false,
                  seating: false,
                  overall: false,
                  power: false,
                  pricing: false,
                  currentSet: 0
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
        case FilterConstants.RESET_BOUNDS:
          FilterStore.changeBounds(action.bounds);
          _filters.currentSet = 0;
          FilterStore.changed();
          break;
        case FilterConstants.CLEAR_ALL_FILTERS:
          _filters = {workspaceName: null,
                      bounds: {},
                      wifi: false,
                      openNow: false,
                      seating: false,
                      overall: false,
                      power: false,
                      pricing: false,
                      currentSet: 0
                     };
          break;
        case FilterConstants.RESET_WIFI:
          _filters.wifi = !(_filters.wifi);
          _filters.currentSet = 0;
          FilterStore.changed();
          break;
        case FilterConstants.RESET_HOURS:
          _filters.openNow = !(_filters.openNow);
          _filters.currentSet = 0;
          FilterStore.changed();
          break;
        case FilterConstants.RESET_POWER:
          _filters.power = !(_filters.power);
          _filters.currentSet = 0;
          FilterStore.changed();
          break;
        case FilterConstants.RESET_SEATING:
          _filters.seating = !(_filters.seating);
          _filters.currentSet = 0;
          FilterStore.changed();
          break;
        case FilterConstants.RESET_OVERALL:
          _filters.overall = !(_filters.overall);
          _filters.currentSet = 0;
          FilterStore.changed();
          break;
        case FilterConstants.RESET_PRICING:
          _filters.pricing = !(_filters.pricing);
          _filters.currentSet = 0;
          FilterStore.changed();
          break;
        case FilterConstants.INCREMENT_CURRENT_SET:
          _filters.currentSet += 1;
          FilterStore.changed();
          break;
        case FilterConstants.DECREMENT_CURRENT_SET:
          _filters.currentSet -= 1;
          FilterStore.changed();
          break;
        case FilterConstants.UPDATE_QUERY:
          _filters.workspaceName = action.name;
          _filters.currentSet = 0;
          FilterStore.changed();
          break;
      }
    })
  });
}(this));
