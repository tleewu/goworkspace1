(function(root){

  'use strict'

  var NavBar = root.NavBar = React.createClass({
    render: function () {
      return (
        <nav className = "navbar navbar-default">
          <div className = "container-fluid">
            <a className="navbar-brand" href="/">
              workspace
            </a>
            <SearchBar />
          </div>
        </nav>
      )
    }

  });

}(this));
