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
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App} />
  );

  React.render(<Router>{routes}</Router>,
                document.getElementById("workspace"));
});
