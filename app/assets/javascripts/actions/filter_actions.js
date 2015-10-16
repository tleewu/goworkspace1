var FilterActions = {
  resetBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_BOUNDS,
      bounds: bounds
    });
  },

  resetWifi: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_WIFI,
    });
  },

  resetHours: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_HOURS,
    });
  },
  resetPower: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_POWER,
    });
  },
  resetSeating: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_SEATING,
    });
  },
  resetOverall: function () {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_OVERALL,
    });
  }
};
