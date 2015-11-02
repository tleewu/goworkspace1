(function(root){

  "use strict"

  var SearchResultsIndex = root.SearchResultsIndex = React.createClass({

    getInitialState: function () {
      return ({workspaces: WorkspaceStore.all()});
    },

    componentDidMount: function () {
      FilterStore.addChangeListener(this.queryForWorkspaces);
      WorkspaceStore.addChangeListener(this.updateWorkspaces);

      var center = {lat: 37.7833, lng: -122.4167};
      if (MapStore.get().lat) {
        center = MapStore.get();
      }
      ApiActions.resetMapCenter(center);

      this.queryForWorkspaces();
    },

    componentWillUnmount: function () {
      FilterStore.removeChangeListener(this.queryForWorkspaces);
      WorkspaceStore.removeChangeListener(this.updateWorkspaces);
      ApiActions.clearAllWorkspacesFromStore();
      ApiActions.clearAllFiltersFromStore();
    },

    updateWorkspaces: function () {
      this.setState({workspaces: WorkspaceStore.all()});
    },

    queryForWorkspaces: function () {
      var filters = FilterStore.all();
      ApiUtil.fetchAllWorkspaces(filters);
    },

    updateFilter: function (filterToBeChanged) {
      switch (filterToBeChanged) {
        case (FilterConstants.WIFI):
          FilterActions.resetWifi();
          break;
        case (FilterConstants.HOURS):
          FilterActions.resetHours();
          break;
        case (FilterConstants.POWER):
          FilterActions.resetPower();
          break;
        case (FilterConstants.SEATING):
          FilterActions.resetSeating();
          break;
        case (FilterConstants.PRICING):
          FilterActions.resetPricing();
          break;
        case (FilterConstants.OVERALL):
          FilterActions.resetOverall();
          break;
      }
    },

    render: function () {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 scrollit">
              <FilterBar updateFilter = {this.updateFilter} />
              <WorkspaceIndex workspaces={this.state.workspaces}/>
            </div>
            <div className="col-md-5 fixed">
              <Map />
            </div>
          </div>

        </div>
      )
    }
  });
}(this));
