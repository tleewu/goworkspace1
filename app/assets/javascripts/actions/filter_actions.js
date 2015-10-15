var FilterActions = {
  resetBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_BOUNDS,
      bounds: bounds
    });
  }
}
