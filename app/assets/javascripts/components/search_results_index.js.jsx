(function(root){

  "use strict"

  var SearchResultsIndex = root.SearchResultsIndex = React.createClass({

    // componentDidMount: function () {
    //   debugger;
      // this.props.location.search
      // WorkspaceStore.addChangeListener(this_updateWorkspace);
      // ApiUtil.fetchAllWorkspaces();
    // },

    componentDidMount: function () {
      FilterStore.addChangeListener(this.queryForWorkspaces);
    },

    queryForWorkspaces: function () {
      // debugger;
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
        case (FilterConstants.OVERALL):
          FilterActions.resetOverall();
          break;
      }
    },

    render: function () {
      return (
        <div>
          <Map latLngLocation = {this.props.location.query.location}
           updateBounds = {this.updateBounds}/>
         <FilterBar updateFilter = {this.updateFilter} />
        </div>
      )
    }
  });
}(this));
