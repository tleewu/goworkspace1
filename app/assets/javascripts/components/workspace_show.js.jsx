(function(root){

  "use strict"

  //TODO: does React break if there is no objects in my WorkspaceStore? When does
  // my WorkspaceStore get set to empty? _workspace is probably being reset to a
  // non-array, since error message is slice is not a property.

  var WorkspaceShow = root.WorkspaceShow = React.createClass({

    getInitialState: function () {
      var workspaceId = parseInt(this.props.params.workspaceId);
      var workspace = this._findWorkspaceById(workspaceId) || {};
      return ({workspace: workspace});
    },

    _findWorkspaceById: function (workspaceId) {
      var workspaces = WorkspaceStore.all();
      for (var i = 0; i < workspaces.length; i++ ) {
        if (workspaces[i].id === workspaceId) {
          return workspaces[i];
        }
      }

      ApiUtil.fetchOneWorkspace(workspaceId);
      return {};
    },

    _createReview: function (reviewDetails) {
      reviewDetails.workspace_id = this.state.workspace.id;
      ApiUtil.createReview(reviewDetails);
    },

    _updateWorkspaceIfNotInStore: function () {
      this.setState({workspace: WorkspaceItemStore.all()});
    },

    componentDidMount: function () {
      WorkspaceItemStore.addChangeListener(this._updateWorkspaceIfNotInStore);
      ApiActions.listOutAllReviews(this.state.workspace.reviews);
    },

    componentWillUnmount: function () {
      WorkspaceStore.removeChangeListener(this._updateWorkspaceIfNotInStore);
    },

    render: function () {
      return (
        <div>
          <WorkspaceShowCarousel images={this.state.workspace.images} />
          <br/><br/>
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-md-offset-5">
                <b id="workspace-info-name"> {this.state.workspace.name} </b>
                <div> Overall: {this.state.workspace.overall} </div>
                <div> Wifi: {this.state.workspace.wifi} </div>
                <div> Power: {this.state.workspace.power} </div>
                <div> Seating: {this.state.workspace.seating} </div>
                <div> Pricing: {this.state.workspace.seating} </div>
              </div>
            </div>
          </div>
          <br/><br/>
          <ReviewForm createReview={this._createReview} />
          <ReviewIndex />
        </div>
      )
    }
  });
}(this));
