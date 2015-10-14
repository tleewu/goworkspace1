(function(root) {
  'use strict';

  var _markers = [],
      CHANGE = "CHANGE";

  var resetMarkers = function (workspaces) {
    _markers = workspaces;
    MarkerStore.changed();
  };

  var MarkerStore = root.MarkerStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _markers.slice(0);
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
        case WorkspaceConstants.WORKSPACES_RECEIVED:
          resetMarkers(action.workspaces);
          break;
      }
    })
  })
}(this));
