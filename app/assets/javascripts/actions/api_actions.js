var ApiActions = {
  receiveAll: function (workspaces) {
    AppDispatcher.dispatch({
      actionType: WorkspaceConstants.WORKSPACES_RECEIVED,
      workspaces: workspaces
    })
  }
}
