(function(root){

  "use strict"

  var Map = root.Map = React.createClass({

    getInitialState: function () {
      return ({lat: MapStore.getCenter().lat,
               lng: MapStore.getCenter().lat,
               markers: []});
    },

    updateSearch: function () {
      var mapBounds = this.map.getBounds()

      var bounds = {
        northEast: {"lat": mapBounds.getNorthEast().lat(),
                    "lng": mapBounds.getNorthEast().lng()},
        southWest: {"lat": mapBounds.getSouthWest().lat(),
                    "lng": mapBounds.getSouthWest().lng()}
      };

      this.props.updateSearch(bounds);
    },

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

    _setMapOnDOM: function () {
      var newCoords = MapStore.getCenter();
      this.setState({lat: newCoords.lat, lng: newCoords.lat});

      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: newCoords,
        zoom: 13
      };

      this.map = new google.maps.Map(map, mapOptions);
      this.map.addListener('idle', this.updateSearch);
      MarkerStore.addChangeListener(this._updateMarkers);
    },

    applyDefault: function (position) {
      var lat = position.coords.latitude,
          lng = position.coords.longitude;
      var location = {lat: lat, lng: lng};
      ApiActions.resetMapCenter(location);
    },

    componentDidMount: function () {
      if (this.props.latLngLocation.length === 0){
        navigator.geolocation.getCurrentPosition(this.applyDefault);
      } else {
        var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
              this.props.latLngLocation + "&key=AIzaSyCgpLQ3tKe3gpdI5oraHqYI6Wu0I4oLf-0";
        ApiUtil.findGeocodeOfAddress(geocodeUrl);
      }
      MapStore.addChangeListener(this._setMapOnDOM);
    },

    componentWillReceiveProps: function (newProps) {

      if (this.props.latLngLocation.length === 0){
        navigator.geolocation.getCurrentPosition(this.applyDefault);
      } else {
        var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
              newProps.latLngLocation + "&key=AIzaSyCgpLQ3tKe3gpdI5oraHqYI6Wu0I4oLf-0";
        ApiUtil.findGeocodeOfAddress(geocodeUrl);
      }

    },

    render: function () {
      return (<div className="map" ref="map"/>);
    }
  });
}(this));
