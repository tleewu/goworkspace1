$(function() {
  'use strict';

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

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
      <IndexRoute component={SearchResultsIndex} />
      <Route path="search" component={SearchResultsIndex} />
      <Route path="workspace/:workspaceId" component={WorkspaceShow} />
    </Route>

  );

  React.render(<Router>{routes}</Router>,
                document.getElementById("workspace"));

  $("body").css("background-image", "none");
});
