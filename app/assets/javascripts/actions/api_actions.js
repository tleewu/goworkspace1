var ApiActions = {
  receiveAll: function (workspaces) {
    AppDispatcher.dispatch({
      actionType: WorkspaceConstants.WORKSPACES_RECEIVED,
      workspaces: workspaces
    })
  },

  resetMapCenter: function (mapCenter) {
    AppDispatcher.dispatch ({
      actionType: FilterConstants.UPDATE_MAP_CENTER,
      center: mapCenter
    });
  }
};
