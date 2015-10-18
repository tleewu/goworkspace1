var ApiUtil = {
  fetchAllWorkspaces: function (filters) {
    $.ajax ({
      url: "api/workspaces",
      data: {allFilters: filters},
      success: function (workspaces) {
        ApiActions.receiveAll(workspaces);
      }
    });
  },

  findGeocodeOfAddress: function (geocodeUrl) {
    $.ajax ({
      url: geocodeUrl,
      success: function (result) {
        ApiActions.resetMapCenter (result.results[0].geometry.location);
      }
    });
  },

  createReview: function (reviewParams) {
    $.ajax ({
      url: "api/reviews",
      method: "post",
      data: {review: reviewParams},
      success: function (review) {
        ApiActions.updateReviews (review);
      }
    });
  },

  fetchOneWorkspace: function (workspaceId) {
    $.ajax ({
      url: "api/workspaces/" + workspaceId,
      success: function (workspace) {
        ApiActions.initializeWorkspace(workspace);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: "users/current_user/",
      success: function (user) {
        ApiActions.receiveCurrentUser(user);
      }
    });
  }
};
