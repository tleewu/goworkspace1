var ApiUtil = {
  fetchAllWorkspaces: function (bounds, workspace) {
    $.ajax ({
      url: "api/workspaces",
      data: {bounds: bounds, workspace: workspace},
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
  }
};
