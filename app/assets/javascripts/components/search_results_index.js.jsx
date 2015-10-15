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
      var filters = FilterStore.all();
      ApiUtil.fetchAllWorkspaces(filters);
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
