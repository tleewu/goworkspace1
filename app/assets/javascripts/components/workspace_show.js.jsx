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
    },

    _createReview: function (reviewDetails) {
      reviewDetails.workspace_id = this.state.workspace.id
      ApiUtil.createReview(reviewDetails);
    },

    componentDidMount: function () {
      ApiActions.listOutAllReviews(this.state.workspace.reviews);
    },

    render: function () {
      return (
        <div>
          <WorkspaceShowCarousel images={this.state.workspace.images} />
          { this.state.workspace }
          <ReviewForm createReview={this._createReview} />
          <ReviewIndex />
        </div>
      )
    }
  });
}(this));
