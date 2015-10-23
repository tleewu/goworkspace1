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
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445635122/wifi-icon-1_wjakkk.png" height="50px" width="50px"/>
            <div id="rating-type">
              WIFI
            </div>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445635133/wifi-icon-2_auzwsv.png" height="50px" width="50px"/>
            <div id="rating-type">
              WIFI
            </div>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <img src="http://res.cloudinary.com/goworkspace/image/upload/v1445635283/wifi-icon-3_oaf5oj.png" height="50px" width="50px"/>
            <div id="rating-type">
              WIFI
            </div>
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445635150/wifi-icon-4_mc8m2e.png" height="50px" width="50px"/>
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
