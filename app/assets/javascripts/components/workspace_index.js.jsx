(function(root){

  "use strict";

  var WorkspaceIndex = root.WorkspaceIndex = React.createClass({
    getInitialState: function () {
      return ({workspaces: WorkspaceStore.all(), currentSet: 1, maxSet: 1});
    },

    componentDidMount: function () {
      WorkspaceStore.addChangeListener(this._updateWorkspaces);
    },

    componentWillUnmount: function () {
      WorkspaceStore.removeChangeListener(this._updateWorkspaces);
    },

    _updateWorkspaces: function () {
      var max = Math.ceil(WorkspaceStore.all().length / 10);
      var workspaces = WorkspaceStore.all().slice(0, 9);
      this.setState({workspaces: workspaces, maxSet: max});
    },

    handleNextClick: function (e) {
      e.preventDefault();
      var updateStartIdx = this.state.currentSet * 10;
      var workspaces = WorkspaceStore.all().slice(updateStartIdx, updateStartIdx + 9);
      this.setState({workspaces: workspaces, currentSet: this.state.currentSet + 1});
    },

    handleBackClick: function (e) {
      e.preventDefault();
      var updateStartIdx = (this.state.currentSet-2) * 10;
      var workspaces = WorkspaceStore.all().slice(updateStartIdx, updateStartIdx + 9);
      this.setState({workspaces: workspaces, currentSet: this.state.currentSet - 1});
    },

    render: function () {
      var next, back;
      if (this.state.maxSet !== this.state.currentSet) {
        next = <div onClick={this.handleNextClick}> Next </div>;
      }

      if (this.state.currentSet !== 1) {
        back = <div onClick={this.handleBackClick}> Back </div>;
      }

      return (
        <div>
          <div>
            {
              this.state.workspaces.map (function (workspace) {
                return (
                  <WorkspaceIndexItem workspace={workspace}/>
                );
              })
            }
          </div>

          <div>
            {next}
          </div>
          <div>
            {back}
          </div>
        </div>
      );
    }
  });
}(this));
