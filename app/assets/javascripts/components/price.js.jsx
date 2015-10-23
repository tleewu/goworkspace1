(function(root){

  "use strict"

  var Price = root.Price = React.createClass({
    getInitialState: function () {
      return ({filled: false});
    },

    componentDidMount: function () {
      if (this.props.filled) {
        this.setState({filled: true});
      }
    },

    componentWillReceiveProps: function (newProps) {
      if (newProps.pricing >= this.props.id) {
        this.setState({filled: true});
      } else {
        if (newProps.hoverId >= this.props.id) {
          this.setState({filled: true});
        } else {
          this.setState({filled: false});
        }
      }
    },

    updateHover: function () {
      if (this.props.updatePriceHover) {
        this.props.updatePriceHover(this.props.id);
      }
    },

    updateClick: function () {
      if (this.props.updatePriceClick) {
        this.props.updatePriceClick(this.props.id);
      }
    },

    updateUnhover: function () {
      if (this.props.updatePriceUnhover) {
        this.props.updatePriceUnhover();
      }
    },

    render: function () {
      var price;
      if (this.state.filled) {
        price = <img src="http://res.cloudinary.com/goworkspace/image/upload/v1445633349/dollar_a0unnh.png" height="25px" width="25px"/>;
      } else {
        price = <img src="http://res.cloudinary.com/goworkspace/image/upload/v1445633351/dollar-empty_hmwuva.png" height="25px" width="25px"/>;
      }

      return (
        <span onMouseOver={this.updateHover} onClick={this.updateClick} onMouseOut={this.updateUnhover}>
          {price}
        </span>
      )
    }
  });
}(this));
