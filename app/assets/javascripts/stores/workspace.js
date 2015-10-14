(function(root) {
  'use strict';

  var _workspaces = [], CHANGE = "CHANGE";

  var resetWorkspaces = function (workspace) {
    _workspaces = workspaces;
    WorkspaceStore.changed();
  };

  var WorkspaceStore = root.WorkspaceStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _workspaces.slice();
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
          resetWorkspaces(action.workspaces);
          break;
      }
    })
  })
}(this));
