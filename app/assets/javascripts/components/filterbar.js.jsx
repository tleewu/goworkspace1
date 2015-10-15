(function(root){

  "use strict"

  var FilterBar = root.FilterBar = React.createClass({

    getInitialState: function () {
      return ({wifi: false, hours: false});
    },

    changeWifi: function () {
      var change = !(this.state.wifi);
      this.setState({wifi: change});
      this.props.updateFilter(FilterConstants.WIFI);
    },

    render: function () {
      return (
        <div>
          <input type="checkbox" onChange={this.changeWifi}> Wifi </input>
          <input type="checkbox"> Open now </input>

        </div>
      );
    }
  });
}(this));
