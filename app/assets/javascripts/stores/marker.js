(function(root) {
  'use strict';

  var _markers = [],
      CHANGE = "CHANGE";

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
      console.log ("CHANGE");
      this.emit(CHANGE);
    },

    dispatcherID: AppDispatcher.register(function (action) {
      switch (action.actionType){
        case WorkspaceConstants.WORKSPACES_RECEIVED:
          if (!(_markers.isEqual(action.workspaces))) {
            _markers = action.workspaces;
            MarkerStore.changed();
            break;
          }
      }
    })
  });
}(this));
