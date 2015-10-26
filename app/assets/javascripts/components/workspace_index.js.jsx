(function(root){

  "use strict";

  var WorkspaceIndex = root.WorkspaceIndex = React.createClass({
    getInitialState: function () {
      return ({workspaces: [], currentSet: 0, maxSet: 0});
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({workspaces: newProps.workspaces});
      if (newProps.workspaces[0]) {
        this.setState({maxSet: newProps.workspaces[0].maxSet});
      } else {
        this.setState({currentSet: 0, maxSet: 0});
      }
    },

    componentDidMount: function () {
      FilterStore.addChangeListener(this._resetCurrentSet);
    },

    _resetCurrentSet: function () {
      this.setState({currentSet: 0});
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
        next = <div id="next-back-link" onClick={this.handleNextClick}> NEXT </div>;
      }

      if (this.state.currentSet !== 0) {
        back = <div id="next-back-link" onClick={this.handleBackClick}> BACK </div>;
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
          <br/>
          <div id="ratings">
            <br/>
            {back}  {next}
             <br/>
          </div>
        </div>
      );
    }
  });
}(this));
