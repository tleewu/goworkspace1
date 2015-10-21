(function(root){

  "use strict";

  var WorkspaceIndex = root.WorkspaceIndex = React.createClass({
    getInitialState: function () {
      return ({workspaces: [], currentSet: 0, maxSet: 0});
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({workspaces: newProps.workspaces});
    },

    handleNextClick: function () {
      FilterActions.incrementCurrentSet();
      this.setState({currentSet: this.state.currentSet + 1});
    },

    handleBackClick: function () {
      FilterActions.decrementCurrentSet();
      this.setState({currentSet: this.state.currentSet - 1});
    },

    render: function () {
      var next, back;
      if (this.state.maxSet !== this.state.currentSet) {
        next = <div onClick={this.handleNextClick}> Next </div>;
      }

      if (this.state.currentSet !== 0) {
        back = <div onClick={this.handleBackClick}> Back </div>;
      }

      return (
        <div>
          <div>
            {
              this.state.workspaces.map (function (workspace) {
                return (
                  <WorkspaceIndexItem workspace={workspace}/>
                );
              })
            }
          </div>

          <div>
            {next}
          </div>
          <div>
            {back}
          </div>
        </div>
      );
    }
  });
}(this));
