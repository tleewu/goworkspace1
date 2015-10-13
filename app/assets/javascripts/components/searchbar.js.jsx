(function(root){

  "use strict"

  var SearchBar = root.SearchBar = React.createClass({
    getInitialState: function () {
      return ({workspace: '', location: ''})
    },

    updateLocation: function (e) {
      e.preventDefault();
      this.setState({location: e.currentTarget.value});
    },

    updateWorkspace: function (e) {
      e.preventDefault();
      this.setState({workspace: e.currentTarget.value});
    },

    render: function () {
      return (
        <form className = "navbar-form navbar-left">
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
