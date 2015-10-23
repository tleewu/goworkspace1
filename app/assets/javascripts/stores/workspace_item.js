(function(root) {
  'use strict';

  var _workspace = {},
      CHANGE = "CHANGE";

  var WorkspaceItemStore = root.WorkspaceItemStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _workspace;
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
        case WorkspaceConstants.ONE_WORKSPACE_RECEIVED:
          _workspace = action.workspace;
          WorkspaceItemStore.changed();
          break;
      }
    })
  });
}(this));
