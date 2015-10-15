var ApiUtil = {
  fetchAllWorkspaces: function (filters) {
    // debugger;
    $.ajax ({
      url: "api/workspaces",
      data: filters,
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
