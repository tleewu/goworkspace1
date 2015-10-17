(function(root){

  "use strict"

  var WorkspaceShow = root.WorkspaceShow = React.createClass({

    getInitialState: function () {
      var workspaceId = parseInt(this.props.params.workspaceId);
      var workspace = this._findWorkspaceById(workspaceId) || {};
      debugger;
      return ({workspace: workspace});
    },

    _findWorkspaceById: function (workspaceId) {
      var workspaces = WorkspaceStore.all();
      for (var i = 0; i < workspaces.length; i++ ) {
        if (workspaces[i].id === workspaceId) {
          return workspace[i];
        }
      }
    },

    // componentDidMount: function () {
    //   FilterStore.addChangeListener(this.queryForWorkspaces);
    // },

    render: function () {
      return (
        <div>
          { this.state.workspace }
        </div>
      )
    }
  });
}(this));
