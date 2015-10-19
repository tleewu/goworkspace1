(function(root){
  var Link = ReactRouter.Link;

  "use strict";

  var WorkspaceIndexItem = root.WorkspaceIndexItem = React.createClass({

    render: function () {
      var workspace = this.props.workspace;
      var workspace_url = "/workspace/" + workspace.id;
      return (
        <div className="workspace-item">
          <div className="container">
            <div className="row">
              <div className="col-md-2" id="workspace-profile-picture">
                X
              </div>
              <div className="col-md-3">
                <Link to={workspace_url}> {workspace.name} </Link>
              </div>
              <div className="col-md-2">
                <div> Overall: {workspace.overall} </div>
                <div> Seating: {workspace.seating} Hours: {workspace.weekday_opening} {workspace.weekday_closing} </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  });
}(this));
