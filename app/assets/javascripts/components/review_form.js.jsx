(function(root){

  "use strict"

  var ReviewForm = root.ReviewForm = React.createClass({
    getInitialState: function () {
      return ({body: '', overall: null, wifi: null, power: null, seating: null, pricing: null});
    },

    updateBody: function (e) {
      e.preventDefault();
      this.setState({body: e.currentTarget.value});
    },

    updateOverall: function (e) {
      e.preventDefault();

      var numStars = parseInt(e.currentTarget.id[5]);
      this.setState({overall: numStars});
    },

    updateWifi: function (e) {
      e.preventDefault();
      this.setState({wifi: e.currentTarget.value});
    },

    updatePower: function (e) {
      e.preventDefault();
      this.setState({power: e.currentTarget.value});
    },

    updateSeating: function (e) {
      e.preventDefault();
      this.setState({seating: e.currentTarget.value});
    },

    updatePricing: function (e) {
      e.preventDefault();
      this.setState({pricing: e.currentTarget.value});
    },

    handleSubmit: function (e) {
      e.preventDefault();
      this.props.createReview({body: this.state.body, overall: this.state.overall,
                               wifi: this.state.wifi, power: this.state.power,
                               seating: this.state.seating, pricing: this.state.pricing});
      this.setState({body: '', overall: null, wifi: null, power: null, pricing: null, seating: null });
    },

    starHovered: function (e) {
      e.preventDefault();
      var id = parseInt(e.currentTarget.id[5]);
      while (id !== 0) {
        var starId = "star-" + id;
        document.getElementById(starId).className = "glyphicon glyphicon-star";
        id -= 1;
      }
    },

    clearAllStars: function (e) {
      e.preventDefault();
      var id = 1;
      if (this.state.overall) {
        id = this.state.overall+1;
      }
      while (id <= 5) {
        var starId = "star-" + id;
        document.getElementById(starId).className = "glyphicon glyphicon-star-empty";
        id += 1;
      }
    },

    render: function () {

      var that = this;
      var emptyStars, filledStars;
      if (this.state.overall) {
        emptyStars = [];
        filledStars = [];
        var id = 1;

        while (id <= this.state.overall) {
          filledStars.push(id);
          id+=1;
        }

        while (id <= 5) {
          emptyStars.push(id);
          id+=1;
        }

      } else {
        filledStars = [];
        emptyStars = [1,2,3,4,5];
      }

      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <span>
              {
                filledStars.map(function(id) {
                  var starId = "star-" + id;
                  return (<span className="glyphicon glyphicon-star" id={starId}
                           onClick={that.updateOverall}></span>);
                })
              }
            </span>
            <span>
              {
                emptyStars.map(function(id) {
                  var starId = "star-" + id;
                  return (<span className="glyphicon glyphicon-star-empty" id={starId}
                    onMouseOver={that.starHovered} onMouseOut={that.clearAllStars}
                    onClick={that.updateOverall}></span>);
                })
              }
            </span>
          </div>
          <div className="form-group">
            <input type="textarea" placeholder = "What did you think?" value = {this.state.body}
              onChange={this.updateBody}/>
          </div>
          <div className="form-group">
            <input type="number" placeholder = "wifi" value = {this.state.wifi}
              onChange={this.updateWifi}/>
            <input type="number" placeholder = "power" value = {this.state.power}
              onChange={this.updatePower}/>
            <input type="number" placeholder = "seating" value = {this.state.seating}
              onChange={this.updateSeating}/>
            <input type="number" placeholder = "pricing" value = {this.state.pricing}
              onChange={this.updatePricing}/>
          </div>
          <input type="submit" value = "Create review" />
        </form>
      )
    }
  });
}(this));
