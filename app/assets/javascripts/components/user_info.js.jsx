(function(root){

  "use strict";

  var UserInfo = root.UserInfo = React.createClass({
    getInitialState: function () {
      return ({currentUser: UserStore.get()});
    },

    componentDidMount: function () {
      UserStore.addChangeListener(this._getCurrentUser);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      UserStore.removeChangeListener(this._getCurrentUser);
    },

    _getCurrentUser: function () {
      this.setState({currentUser: UserStore.get()});
    },

    logout: function () {
      ApiUtil.logoutUser();
    },

    render: function () {

      return (
        <div>
          <div className="col-md-8 welcome-user">
            Welcome, {this.state.currentUser.first_name}!
          </div>
          <div className="col-md-4 dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <img src={this.state.currentUser.profile_image_url} className='img-circle' height="37px" width="37px" id='profile-image' />
            </button>
            <ul className="dropdown-menu col-md-1" aria-labelledby="dropdownMenu1">
              <li onClick={this.logout}> Logout </li>
            </ul>
          </div>
        </div>
      );
    }
  });
}(this));
