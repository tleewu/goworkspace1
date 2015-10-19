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
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Welcome, {this.state.currentUser.first_name}!
            <img src={this.state.currentUser.profile_image_url} className='img-circle' height="25px" width="25px" id='profile-image' />
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={this.logout}> Logout </li>
          </ul>
        </div>
      );
    }
  });
}(this));
