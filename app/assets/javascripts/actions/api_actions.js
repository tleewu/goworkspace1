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
  },

  updateReviews: function (review) {
    AppDispatcher.dispatch ({
      actionType: ReviewConstants.UPDATE_REVIEWS,
      review: review
    });
  },

  listOutAllReviews: function (reviews) {
    AppDispatcher.dispatch ({
      actionType: ReviewConstants.ALL_REVIEWS,
      reviews: reviews
    })
  }
};
