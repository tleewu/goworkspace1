(function(root){

  "use strict";

  var WorkspaceItemStars = root.WorkspaceItemStars = React.createClass({

    render: function () {
      var filledId = this.props.workspace.overall;
      var filled = [], empty = [];
      var boolTrue = true;

      for (var i=0; i <= filledId; i++) {
        filled.push(<Star filled={boolTrue}/>);
      }

      for (i; i<=5; i++) {
        empty.push(<Star />);
      }

      return (
        <div>
          {filled}
          {empty}
        </div>
      );
    }
  });
}(this));
