(function(root){

  "use strict"

  var Map = root.Map = React.createClass({

    componentDidMount: function () {
      var map = React.findDOMNode(this.refs.map);
      var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            this.props.latLngLocation + "&key=AIzaSyCgpLQ3tKe3gpdI5oraHqYI6Wu0I4oLf-0";

      $.ajax ({
        url: geocodeUrl,
        success: function (result) {
          var mapOptions = {
            center: result.results[0].geometry.location,
            zoom: 13
          };

          this.map = new google.maps.Map (map, mapOptions);
        }
      });
    },

    render: function () {
      return (<div className="map" ref="map"/>);
    }
  });
}(this));
