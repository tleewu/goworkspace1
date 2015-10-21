(function(root){

  "use strict"

  var Map = root.Map = React.createClass({

    _updateMarkers: function () {

      var newMarkers = WorkspaceStore.all();
      var currentMarkers = this.state.markers.slice(0);
      var updatedMarkers = [];
      var that = this;

      newMarkers.forEach(function (marker) {
        if (currentMarkers.includes(marker)) {
          var idx = currentMarkers.indexOf(marker);
          currentMarkers.splice(idx,1);
        } else {
          var placeMarker = new google.maps.Marker ({
            map: that.map,
            position: {lat: marker.lat, lng: marker.lng}
          });
          placeMarker.setMap(that.map);
          updatedMarkers.push(placeMarker);
        }
      });

      this.setState({markers: updatedMarkers});

      currentMarkers.forEach (function (marker) {
        marker.setMap(null);
      });
    },

    getInitialState: function () {
      return ({ markers: []});
    },

    updateMapWhenMoved: function () {
      var coords = this.map.getCenter();
      // debugger;
      ApiActions.resetMapCenter({lat: coords.lat(), lng: coords.lng()});
      FilterActions.resetBounds(this.map.getBounds());
    },

    _setMapOnDOM: function () {
      var centerOfMap = MapStore.get();

      if (this.map) {
        this.map.setCenter({lat: centerOfMap.lat, lng: centerOfMap.lng});
      } else {
        if (centerOfMap.lat && centerOfMap.lng) {
          var map = React.findDOMNode(this.refs.map);
          var mapOptions = {
            center: centerOfMap,
            zoom: 13
          };
          this.map = new google.maps.Map(map, mapOptions);
          this.map.addListener('idle', this.updateMapWhenMoved);
        }
      }
    },

    componentDidMount: function () {
      MapStore.addChangeListener(this._setMapOnDOM);
      WorkspaceStore.addChangeListener(this._updateMarkers);

      if (!this.map) {
        this._setMapOnDOM();
      }
    },

    componentWillUnmount: function () {
      MapStore.removeChangeListener(this._setMapOnDOM);
      WorkspaceStore.removeChangeListener(this._updateMarkers);
    },

    render: function () {
      return (
        <div className="map" ref="map"/>
      );
    }
  });
}(this));
