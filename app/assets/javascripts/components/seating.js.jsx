(function(root){

  "use strict"

  var Seating = root.Seating = React.createClass({
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
            <img src="http://res.cloudinary.com/goworkspace/image/upload/v1445637611/seating-1_b0ir3z.png" height="30px" width="150px"/>
            <div id="rating-type-seating">
              SEATING
            </div>
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445637614/seating-2_fwrx83.png" height="30px" width="150px"/>
            <div id="rating-type-seating">
              SEATING
            </div>
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <img src="http://res.cloudinary.com/goworkspace/image/upload/v1445637631/seating-3_bzkbsr.png" height="30px" width="150px"/>
            <div id="rating-type-seating">
              SEATING
            </div>
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445637641/seating-4_vj3vc3.png" height="30px" width="150px"/>
            <div id="rating-type-seating">
              SEATING
            </div>
          </div>
        );
        break;
      case 5:
        return (
          <div>
            <img src="https://res.cloudinary.com/goworkspace/image/upload/v1445637649/seating-5_dopd7h.png" height="30px" width="150px"/>
            <div id="rating-type-seating">
              SEATING
            </div>
          </div>
        );
        break;

      }
    }
  });
}(this));
