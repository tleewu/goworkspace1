(function(root){

  "use strict"

  var SearchResultsIndex = root.SearchResultsIndex = React.createClass({
    // getInitialState: function () {
    //   return ({workspace: []})
    // },

    // _updateWorkspaces: function () {
    //   this.setState({workspace: WorkspaceStore.all()});
    // },

    // componentDidMount: function () {
    //   debugger;
      // this.props.location.search
      // WorkspaceStore.addChangeListener(this_updateWorkspace);
      // ApiUtil.fetchAllWorkspaces();
    // },
    updateSearch: function (bounds) {
      var searchWorkspace = this.props.location.query.workspace;
      ApiUtil.fetchAllWorkspaces(bounds, searchWorkspace);
    },

    render: function () {
      return (
        <div>
          <Map latLngLocation = {this.props.location.query.location}
           updateSearch = {this.updateSearch}/>
        </div>
      )
    }
  });
}(this));
