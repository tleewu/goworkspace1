(function(root){

  "use strict"

  var Star = root.Star = React.createClass({
    getInitialState: function () {
      return ({filled: false});
    },

    componentDidMount: function () {
      if (this.props.filled) {
        this.setState({filled: true});
      }
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
      if (this.props.updateHover) {
        this.props.updateHover(this.props.id);
      }
    },

    updateClick: function () {
      if (this.props.updateClick) {
        this.props.updateClick(this.props.id);
      }
    },

    updateUnhover: function () {
      if (this.props.updateUnhover) {
        this.props.updateUnhover();
      }
    },

    render: function () {
      var star;
      if (this.state.filled) {
        star = <span className="glyphicon glyphicon-star" id="ratings-star"> </span>;
      } else {
        star = <span className="glyphicon glyphicon-star-empty" id="ratings-star"></span>;
      }

      return (
        <span onMouseOver={this.updateHover} onClick={this.updateClick} onMouseOut={this.updateUnhover}>
          {star}
        </span>
      )
    }
  });
}(this));
