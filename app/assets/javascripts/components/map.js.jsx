(function(root){

  "use strict"

  var Map = root.Map = React.createClass({

    getInitialState: function () {
      return ({lat: MapStore.getCenter().lat, lng: MapStore.getCenter().lat});
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

    _setMapOnDOM: function () {
      var newCoords = MapStore.getCenter();
      this.setState({lat: newCoords.lat, lng: newCoords.lat});

      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: newCoords,
        zoom: 13
      };

      this.map = new google.maps.Map(map,mapOptions);
      this.map.addListener('idle', this.updateSearch);
    },

    componentDidMount: function () {
      var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            this.props.latLngLocation + "&key=AIzaSyCgpLQ3tKe3gpdI5oraHqYI6Wu0I4oLf-0";
      MapStore.addChangeListener(this._setMapOnDOM);
      ApiUtil.findGeocodeOfAddress(geocodeUrl);

    },

    componentWillReceiveProps: function (newProps) {
      var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            newProps.latLngLocation + "&key=AIzaSyCgpLQ3tKe3gpdI5oraHqYI6Wu0I4oLf-0";
      ApiUtil.findGeocodeOfAddress(geocodeUrl);
    },

    render: function () {
      return (<div className="map" ref="map"/>);
    }
  });
}(this));
