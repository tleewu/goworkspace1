var ApiUtil = {
  fetchAllWorkspaces: function (workspaceData) {
    debugger;
    // $.ajax ({
    //   url: "api/workspaces"
    //   data: workspaceData,
    //   success: function (workspaces) {
    //     debugger;
    //     ApiActions.receiveAll(workspaces);
    //   }
    // });
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
