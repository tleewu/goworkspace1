(function(root){

  "use strict";

  var WorkspaceShow = root.WorkspaceShow = React.createClass({

    getInitialState: function () {
      return ({workspace: {}, currentUser: {}, reviews: [], images: []});
    },

    _createReview: function (reviewDetails) {
      reviewDetails.workspace_id = this.state.workspace.id;
      ApiUtil.createReview(reviewDetails);
    },

    _updateWorkspaceIfNotInStore: function () {
      var workspace = WorkspaceItemStore.all();
      this.setState({workspace: workspace, images: workspace.images});
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
      var workspace = this.state.workspace;
      var idx = 1;
      var empty = [];
      var filled = [];
      var wifi = 1;
      var power = 1;
      var seating = 1;
      var pricing = 1;
      if (workspace.wifi) {
        wifi = Math.round(workspace.wifi);
        power = Math.round(workspace.power);
        seating = Math.round(workspace.seating);
        pricing = Math.round(workspace.pricing);
      }

      while (idx <= workspace.overall) {
        filled.push(<span className="glyphicon glyphicon-star" id="ratings-spacing-stars"></span>);
        idx += 1;
      }

      while (idx <= 5) {
        empty.push(<span className="glyphicon glyphicon-star-empty" id="ratings-spacing-stars"> </span>)
        idx += 1;
      }

      var currentDay = new Date().getDay();
      var workspaceHours;
      if (currentDay !== 0 && currentDay !== 7) {
        workspaceHours = <div> Open today from {workspace.weekday_opening} until {workspace.weekday_closing} </div>
      } else {
        workspaceHours = <div> Open today from {workspace.weekend_opening} until {workspace.weekend_closing} </div>
      }
      return (
        <div>
          <div className="container">
            <div className="row" id="carousel-row">
              <WorkspaceShowCarousel images={this.state.images} />
            </div>
            <div className="row">
              <div className="col-md-2 col-md-offset-5" id="workspace-profile-image">
                <img id="profile-workspace" src={this.state.workspace.profile_image_url} height="125px" width="125px"/>
              </div>
            </div>
          </div>
          <br/>
          <div className="below-carousel">
            <div className="container">
              <div className="row">
                <div className="col-md-2 col-md-offset-5" id="workspace-title">
                  <div id="workspace-info-name"> {this.state.workspace.name} </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  {this.state.workspace.street_address}, {this.state.workspace.city_address}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  {workspaceHours}
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-2 col-md-offset-1" id="ratings-type">
                    OVERALL
                    <br/>
                    {filled}{empty}
                  </div>
                  <div className="col-md-2" id="ratings-type">
                    WIFI
                    <br/>
                    <Wifi rating={wifi} />
                  </div>
                  <div className="col-md-2" id="ratings-type">
                    OUTLETS
                    <br />
                    <Power rating={power} />
                  </div>
                  <div className="col-md-2" id="ratings-type">
                    SEATING
                    <br />
                    <div id="ratings-spacing"> <Seating rating={seating} /> </div>
                  </div>
                  <div className="col-md-2" id="ratings-type">
                    PRICING
                    <br />
                    <div id="ratings-spacing"> <Price rating={pricing} /> </div>
                  </div>
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
                  <hr />
                </div>
              </div>
           </div>
          </div>
        </div>
      )
    }
  });
}(this));
