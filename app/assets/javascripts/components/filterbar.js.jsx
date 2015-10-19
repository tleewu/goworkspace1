(function(root){

  "use strict";

  var FilterBar = root.FilterBar = React.createClass({

    changeWifi: function () {
      this.props.updateFilter(FilterConstants.WIFI);
    },

    changeHours: function () {
      this.props.updateFilter(FilterConstants.HOURS);
    },

    changeSeating: function () {
      this.props.updateFilter(FilterConstants.SEATING);
    },

    changePower: function () {
      this.props.updateFilter(FilterConstants.POWER);
    },

    changeOverall: function () {
      this.props.updateFilter(FilterConstants.OVERALL);
    },

    changePricing: function () {
      this.props.updateFilter(FilterConstants.OVERALL);
    },

    render: function () {
      return (
        <div className="filter-bar">
          <b id="filter-bar-title"> FILTER BY </b>
          <input type="checkbox" onChange={this.changeWifi}> Wifi </input>
          <input type="checkbox" onChange={this.changeOverall}> Overall </input>
          <input type="checkbox" onChange={this.changeSeating}> Seating </input>
          <input type="checkbox" onChange={this.changePower}> Power </input>
          <input type="checkbox" onChange={this.changePricing}> Pricing </input>
          <input type="checkbox" onChange={this.changeHours}> Open now </input>
        </div>
      );
    }
  });
}(this));
