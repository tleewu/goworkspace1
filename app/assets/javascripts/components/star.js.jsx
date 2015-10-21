(function(root){

  "use strict"

  var Star = root.Star = React.createClass({
    getInitialState: function () {
      return ({filled: false});
    },

    componentWillReceiveProps: function (newProps) {
      if (newProps.overall >= this.props.id) {
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
      this.props.updateHover(this.props.id);
    },

    updateClick: function () {
      this.props.updateClick(this.props.id);
    },

    updateUnhover: function () {
      this.props.updateUnhover();
    },

    render: function () {
      var star;
      if (this.state.filled) {
        star = <span className="glyphicon glyphicon-star"> </span>;
      } else {
        star = <span className="glyphicon glyphicon-star-empty"></span>;
      }

      return (
        <span onMouseOver={this.updateHover} onClick={this.updateClick} onMouseOut={this.updateUnhover}>
          {star}
        </span>
      )
    }
  });
}(this));
