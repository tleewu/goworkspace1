(function(root){

  "use strict"

  var Wifi = root.Wifi = React.createClass({
    getInitialState: function () {
      return ({rating: 1});
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({rating: newProps.rating});
    },

    render: function () {
      switch (this.state.rating) {
      case 1:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445540515/wifi-1_usukcq.png" height="50px" width="50px"/>
            <div id="rating-type">
              WIFI
            </div>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445540506/wifi-2_gg5nm9.png" height="50px" width="50px"/>
            <div id="rating-type">
              WIFI
            </div>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445540494/wifi-3_hrkpht.png" height="50px" width="50px"/>
            <div id="rating-type">
              WIFI
            </div>
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445540486/wifi-4_p35clq.png" height="50px" width="50px"/>
            <div id="rating-type">
              WIFI
            </div>
          </div>
        );
        break;
      case 5:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445539250/wifi-icon_wi7mdd.png" height="50px" width="50px"/>
            <div id="rating-type">
              WIFI
            </div>
          </div>
        );
        break;

      }
    }
  });
}(this));
