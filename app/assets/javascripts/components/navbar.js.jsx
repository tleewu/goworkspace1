(function(root){

  'use strict'

  var NavBar = root.NavBar = React.createClass({
    render: function () {
      return (
        <nav className = "navbar navbar-default">
          <div className = "container-fluid">
            <div className="row">
              <div className="col-md-1" id="logo-bar-properties">
                <a className="navbar-brand" href="/">
                  w
                </a>
              </div>
              <div className="col-md-8" id="search-bar-properties">
                <SearchBar />
              </div>
              <div className="col-md-3" id="user-info">
                <UserInfo />
              </div>
            </div>
          </div>
        </nav>
      )
    }

  });

}(this));
