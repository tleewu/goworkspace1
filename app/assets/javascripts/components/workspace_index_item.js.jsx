(function(root){

  "use strict";

  var WorkspaceIndexItem = root.WorkspaceIndexItem = React.createClass({

    render: function () {
      var workspace = this.props.workspace;
      return (
        <div className="workspace-item">
          <div className="col-md-2" id="workspace-profile-picture">
            X
          </div>
          <div className="col-md-3">
            <div> {workspace.name} </div>
          </div>
          <div className="col-md-2">
            <div> Overall: {workspace.overall} </div>
            <div> Wifi: {workspace.wifi} </div>
            <div> Power: {workspace.power} </div>
            <div> Seating: {workspace.seating} </div>
          </div>
        </div>
      )
    }
  });
}(this));
