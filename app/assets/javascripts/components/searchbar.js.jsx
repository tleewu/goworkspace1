(function(root){

  "use strict"

  var SearchBar = root.SearchBar = React.createClass({
    mixins: [ReactRouter.History],

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

    handleSubmit: function (e) {
      e.preventDefault();
      FilterActions.updateSearchQuery(this.state.workspace);
      this.history.pushState(null, "search/", {workspace: this.state.workspace,
                                               location: this.state.location});
    },

    render: function () {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5" id="search-bar-properties">
                <input className="search-bar" type="text" placeholder = "Search for your favorite workspace"
                  value={this.state.workspace} onChange = {this.updateWorkspace}/>
              </div>
              <div className="col-md-5" id="search-bar-properties">
                <input className="search-bar" type="text" placeholder = "Where?" value = {this.state.location}
                  onChange={this.updateLocation}/>
              </div>
              <div className="col-md-2" id="search-bar-properties">
                <input className="search-bar submit" type = "submit" value = "Search" />
              </div>
            </div>
          </div>
        </form>
      )
    }
  });
}(this));
