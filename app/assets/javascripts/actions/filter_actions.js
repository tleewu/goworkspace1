var FilterActions = {
  updateSearchQuery: function (name) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_QUERY,
      name: name
    });
  },

  resetBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_BOUNDS,
      bounds: bounds
    });
  },

  resetWifi: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_WIFI
    });
  },

  resetHours: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_HOURS
    });
  },

  resetPower: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_POWER
    });
  },

  resetPricing: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_PRICING
    });
  },

  resetSeating: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_SEATING
    });
  },

  resetOverall: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_OVERALL
    });
  },

  incrementCurrentSet: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.INCREMENT_CURRENT_SET
    });
  },

  decrementCurrentSet: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.DECREMENT_CURRENT_SET
    });
  }
};
