var ApiUtil = {
  fetchAllWorkspaces: function (filters) {
    // debugger;
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
        debugger;
        ApiActions.updateReviews (review);
      }
    })
  }
};
