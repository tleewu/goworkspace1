(function(root){

  "use strict"

  var Map = root.Map = React.createClass({

    _updateMarkers: function () {
      var newMarkers = MarkerStore.all();
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
      ApiActions.resetMapCenter({lat: coords.lat(), lng: coords.lng()});
      FilterActions.resetBounds(this.map.getBounds());
    },

    _setMapOnDOM: function () {
      var filters = FilterStore.all();
      var centerOfMap = filters.mapCenter;

      if (this.map) {
        this.map.setCenter({lat: centerOfMap.lat, lng: centerOfMap.lng});
      } else {
        var map = React.findDOMNode(this.refs.map);
        var mapOptions = {
          center: centerOfMap,
          zoom: 13
        };
        this.map = new google.maps.Map(map, mapOptions);
        this.map.addListener('idle', this.updateMapWhenMoved);
      }
    },

    setDefaultLocation: function (position) {
      var lat = position.coords.latitude,
          lng = position.coords.longitude;
      var location = {lat: lat, lng: lng};
      ApiActions.resetMapCenter(location);
    },

    updateMap: function (location) {
      if (location.length === 0){
        navigator.geolocation.getCurrentPosition(this.setDefaultLocation);
      } else {
        var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                          location + "&key=AIzaSyCgpLQ3tKe3gpdI5oraHqYI6Wu0I4oLf-0";
        ApiUtil.findGeocodeOfAddress(geocodeUrl);
      }
    },

    componentDidMount: function () {
      FilterStore.addChangeListener(this._setMapOnDOM);
      MarkerStore.addChangeListener(this._updateMarkers);

      this.updateMap(this.props.latLngLocation);
    },

    componentWillReceiveProps: function (newProps) {
      this.updateMap(newProps.latLngLocation);
    },

    render: function () {
      return (<div className="map" ref="map"/>);
    }
  });
}(this));
