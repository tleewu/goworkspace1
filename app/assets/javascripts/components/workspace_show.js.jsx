(function(root){

  "use strict"

  //TODO: does React break if there is no objects in my WorkspaceStore? When does
  // my WorkspaceStore get set to empty? _workspace is probably being reset to a
  // non-array, since error message is slice is not a property.

  var WorkspaceShow = root.WorkspaceShow = React.createClass({

    getInitialState: function () {
      var workspaceId = parseInt(this.props.params.workspaceId);
      var workspace = this._findWorkspaceById(workspaceId) || {};
      return ({workspace: workspace, currentUser: {}});
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
      UserStore.addChangeListener(this._getCurrentUser);
      ApiUtil.fetchCurrentUser();
    },

    _getCurrentUser: function () {
      this.setState({currentUser: UserStore.get()});
    },

    componentWillUnmount: function () {
      UserStore.removeChangeListener(this._getCurrentUser);
      WorkspaceStore.removeChangeListener(this._updateWorkspaceIfNotInStore);
    },

    render: function () {
      return (
        <div>
          <WorkspaceShowCarousel images={this.state.workspace.images} />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-2 col-md-offset-5" id="workspace-profile-image">
                  <img id="profile-workspace" src={this.state.workspace.profile_image_url} height="125px" width="125px"/>
                </div>
              </div>
            </div>
          </div>
          <br/><br/>
          <div className="below-carousel">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-md-offset-5" id="workspace-title">
                  <div id="workspace-info-name"> {this.state.workspace.name} </div>
                  <div> Overall: {this.state.workspace.overall} </div>
                  <div> Wifi: {this.state.workspace.wifi} </div>
                  <div> Power: {this.state.workspace.power} </div>
                  <div> Seating: {this.state.workspace.seating} </div>
                  <div> Pricing: {this.state.workspace.seating} </div>
                </div>
              </div>
              <br/><br/>
              <div className="row">
                <div className="col-md-8 col-md-offset-2" id="workspace-reviews">
                  <div id="all-reviews"> ALL REVIEWS: </div>
                  <br/>
                  <ReviewForm currentUser={this.state.currentUser} createReview={this._createReview} />
                  <hr />
                  <ReviewIndex allReviews={this.state.workspace.reviews} currentUser={this.state.currentUser}/>
                </div>
              </div>
           </div>
          </div>
        </div>
      )
    }
  });
}(this));
