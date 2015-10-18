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
              <div className="col-md-9" id="search-bar-properties">
                <SearchBar />
              </div>
              <div className="col-md-2" id="logo-bar-properties">
                <UserInfo />
              </div>
            </div>
          </div>
        </nav>
      )
    }

  });

}(this));
