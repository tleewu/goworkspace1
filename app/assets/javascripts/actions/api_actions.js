var ApiActions = {
  receiveAll: function (workspaces) {
    AppDispatcher.dispatch({
      actionType: WorkspaceConstants.WORKSPACES_RECEIVED,
      workspaces: workspaces
    });
  },

  resetMapCenter: function (mapCenter) {
    AppDispatcher.dispatch ({
      actionType: FilterConstants.UPDATE_MAP_CENTER,
      center: mapCenter
    });
  },

  clearAllWorkspacesFromStore: function () {
    AppDispatcher.dispatch ({
      actionType: WorkspaceConstants.CLEAR_ALL_WORKSPACES
    });
  },

  clearAllFiltersFromStore: function () {
    AppDispatcher.dispatch ({
      actionType: FilterConstants.CLEAR_ALL_FILTERS
    });
  },

  updateReviews: function (review) {
    AppDispatcher.dispatch ({
      actionType: ReviewConstants.UPDATE_REVIEWS,
      review: review
    });
  },

  initializeWorkspace: function (workspace) {
    AppDispatcher.dispatch ({
      actionType: WorkspaceConstants.ONE_WORKSPACE_RECEIVED,
      workspace: workspace
    });
  },

  receiveCurrentUser: function (user) {
    AppDispatcher.dispatch ({
      actionType: UserConstants.RECEIVED_USER,
      user: user
    });
  },

  reviewDeleted: function (review) {
    AppDispatcher.dispatch ({
      actionType: ReviewConstants.REVIEW_DELETED,
      review: review
    });
  }
};
