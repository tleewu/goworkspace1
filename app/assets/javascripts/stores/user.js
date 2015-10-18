(function(root) {
  'use strict';

  var _user = {},
      CHANGE = "CHANGE";

  var UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {

    get: function () {
      return _user;
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
        case UserConstants.RECEIVED_USER:
          _user = action.user;
          UserStore.changed();
          break;
      }
    })
  });
}(this));
