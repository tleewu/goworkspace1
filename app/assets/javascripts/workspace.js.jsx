$(function() {
  'use strict';

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  // var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <NavBar />
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <Route path="search" component={SearchResultsIndex} />
    </Route>

  );

  React.render(<Router>{routes}</Router>,
                document.getElementById("workspace"));

  $("body").css("background-image", "none");
});
