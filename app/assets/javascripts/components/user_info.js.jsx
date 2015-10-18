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

    render: function () {

      return (
        <div>
          Welcome,
          {
            this.state.currentUser.last_name
          }
        </div>
      )
    }
  });
}(this));
