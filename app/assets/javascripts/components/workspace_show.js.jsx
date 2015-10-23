(function(root){

  "use strict";

  var WorkspaceShow = root.WorkspaceShow = React.createClass({

    getInitialState: function () {
      return ({workspace: {}, currentUser: {}, reviews: []});
    },

    _createReview: function (reviewDetails) {
      reviewDetails.workspace_id = this.state.workspace.id;
      ApiUtil.createReview(reviewDetails);
    },

    _updateWorkspaceIfNotInStore: function () {
      var workspace = WorkspaceItemStore.all();
      this.setState({workspace: workspace});
    },

    _getCurrentUser: function () {
      this.setState({currentUser: UserStore.get()});
    },

    _updateReviews: function () {
      this.setState({reviews: ReviewStore.all()});
    },

    componentDidMount: function () {
      WorkspaceItemStore.addChangeListener(this._updateWorkspaceIfNotInStore);
      UserStore.addChangeListener(this._getCurrentUser);
      ReviewStore.addChangeListener(this._updateReviews);
      ApiUtil.fetchOneWorkspace(parseInt(this.props.params.workspaceId));
      ApiUtil.fetchCurrentUser();
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
                  <ReviewIndex allReviews={this.state.reviews} currentUser={this.state.currentUser}/>
                </div>
              </div>
           </div>
          </div>
        </div>
      )
    }
  });
}(this));
