(function(root){

  'use strict'

  var NavBar = root.NavBar = React.createClass({
    render: function () {
      return (
        <nav className = "navbar navbar-default navbar-fixed-top">
          <div className = "container-fluid">
            <div className="row">
              <div className="col-md-1" id="logo-bar-properties">
                <a className="navbar-brand" href="/">
                  <img src="http://res.cloudinary.com/goworkspace/image/upload/v1445475396/w-logo_heetrm.png" height="40px" width="40px"/>
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
