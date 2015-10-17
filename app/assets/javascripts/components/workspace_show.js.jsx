(function(root){

  "use strict"

  var WorkspaceShowIndex = root.WorkspaceShowIndex = React.createClass({

    getInitialState: function () {
      var workspaceId = this.props.params.workspaceId
      var workspace = this._findWorkspaceById(workspaceId) || {}
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <FilterBar updateFilter = {this.updateFilter} />
              <WorkspaceIndex workspaces={this.state.workspaces}/>
            </div>
            <div className="col-md-5">
              <Map latLngLocation = {this.props.location.query.location}
               updateBounds = {this.updateBounds}/>
            </div>
          </div>

        </div>
      )
    }
  });
}(this));
