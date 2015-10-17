(function(root){

  "use strict";

  var WorkspaceIndex = root.WorkspaceIndex = React.createClass({
    getInitialState: function () {
      return ({workspaces: WorkspaceStore.all()})
    },

    componentDidMount: function () {
      WorkspaceStore.addChangeListener(this._updateWorkspaces);
    },

    componentWillUnmount: function () {
      WorkspaceStore.removeChangeListener(this._updateWorkspaces);
    },

    _updateWorkspaces: function () {
      this.setState({workspaces: WorkspaceStore.all()});
    },

    render: function () {
      //TODO: why is it rendering multiple times??? put in a debugger.

      return (
        <div>
          {
            this.state.workspaces.map (function (workspace) {
              return (
                <WorkspaceIndexItem workspace={workspace}/>
              )
            })
          }
        </div>
      )
    }
  });
}(this));
