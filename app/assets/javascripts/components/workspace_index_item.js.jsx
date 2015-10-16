(function(root){

  "use strict";

  var WorkspaceIndexItem = root.WorkspaceIndexItem = React.createClass({

    render: function () {
      var workspace = this.props.workspace;
      return (
        <div>
          <div> Name: {workspace.name} </div>
          <div> Overall: {workspace.overall} </div>
          <div> Wifi: {workspace.wifi} </div>
          <div> Power: {workspace.power} </div>
          <div> Seating: {workspace.seating} </div>
        </div>
      )
    }
  });
}(this));
