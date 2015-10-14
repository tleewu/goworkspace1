var ApiActions = {
  receiveAll: function (workspaces) {
    AppDispatcher.dispatch({
      actionType: WorkspaceConstants.WORKSPACES_RECEIVED,
      workspaces: workspaces
    })
  },

  resetMapCenter: function (mapCenter) {
    AppDispatcher.dispatch ({
      actionType: MapConstants.RESET_MAP_CENTER,
      center: mapCenter
    });
  }
}
