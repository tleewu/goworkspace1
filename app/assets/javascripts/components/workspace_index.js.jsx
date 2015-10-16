(function(root){

  "use strict";

  var WorkspaceIndex = root.WorkspaceIndex = React.createClass({

    getInitialState: function () {
      return ({workspace: WorkspaceStore.all()})
    },

    _updateWorkspace: function () {
      this.setState({workspace: WorkspaceStore.all()});
    },

    componentDidMount: function () {
      WorkspaceStore.addChangeListener(this._updateWorkspace);
    },

    render: function () {
      return (
        <form className = "navbar-form navbar-left" onSubmit={this.handleSubmit}>
          <input type = "text" placeholder = "Search for your favorite workspace"
            value={this.state.workspace} onChange = {this.updateWorkspace}/>
          <input type = "text" placeholder = "Where?" value = {this.state.location}
            onChange={this.updateLocation}/>
          <input type = "submit" value = "Find" />
        </form>
      )
    }
  });
}(this));
