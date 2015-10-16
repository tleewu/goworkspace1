(function(root) {
  'use strict';

  var _workspaces = [],
      CHANGE = "CHANGE";

  var WorkspaceStore = root.WorkspaceStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _workspaces.slice(0);
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
          if (!(_workspaces.isEqual(action.workspaces))) {
            _workspaces = action.workspaces;
            WorkspaceStore.changed();
            break;
          }
      }
    })
  });
}(this));
