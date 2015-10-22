(function(root){

  "use strict"

  var Power = root.Power = React.createClass({
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
            <img id="power-ratings" src="https://res.cloudinary.com/goworkspace/image/upload/v1445548278/battery-1_cifz6p.jpg" height="50px" width="50px"/>
            <div id="rating-type">
              OUTLETS
            </div>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <img id="power-ratings" src="https://res.cloudinary.com/goworkspace/image/upload/v1445548285/battery-2_zjoif3.jpg" height="50px" width="50px"/>
            <br />
            <div id="rating-type">
              OUTLETS
            </div>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <img id="power-ratings" src="https://res.cloudinary.com/goworkspace/image/upload/v1445548290/battery-3_eyo0qx.jpg" height="50px" width="50px"/>
            <br />
            <div id="rating-type">
              OUTLETS
            </div>
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <img id="power-ratings" src="https://res.cloudinary.com/goworkspace/image/upload/v1445548295/battery-4_cqvwnh.jpg" height="50px" width="50px"/>
            <br />
            <div id="rating-type">
              OUTLETS
            </div>
          </div>
        );
        break;
      case 5:
        return (
          <div>
            <img id="power-ratings" src="https://res.cloudinary.com/goworkspace/image/upload/v1445548303/battery-5_jornsd.jpg" height="50px" width="50px"/>
            <br />
            <div id="rating-type">
              OUTLETS
            </div>
          </div>
        );
        break;

      }
    }
  });
}(this));
