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

    render: function () {
      return (
        <div>
          <Map latLngLocation = {this.props.location.query.location} />
        </div>
      )
    }
  });
}(this));
