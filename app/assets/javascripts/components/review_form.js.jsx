(function(root){

  "use strict"

  var ReviewForm = root.ReviewForm = React.createClass({
    getInitialState: function () {
      return ({body: '',
              overall: 0,
              wifi: null,
              power: null,
              seating: null,
              pricing: null,
              hover: 0
            });
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

    _updateHover: function (id) {
      this.setState({hover: parseInt(id)});
    },

    _updateClick: function (id) {
      this.setState({overall: parseInt(id)});
    },

    _updateUnhover: function () {
      this.setState({hover: this.state.overall});
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
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Star id="1" updateHover={this._updateHover} hoverId={this.state.hover}
              overall={this.state.overall} updateClick={this._updateClick}
              updateUnhover={this._updateUnhover}/>
            <Star id="2" updateHover={this._updateHover} hoverId={this.state.hover}
              overall={this.state.overall} updateClick={this._updateClick}
              updateUnhover={this._updateUnhover}/>
            <Star id="3" updateHover={this._updateHover} hoverId={this.state.hover}
              overall={this.state.overall} updateClick={this._updateClick}
              updateUnhover={this._updateUnhover}/>
            <Star id="4" updateHover={this._updateHover} hoverId={this.state.hover}
              overall={this.state.overall} updateClick={this._updateClick}
              updateUnhover={this._updateUnhover}/>
            <Star id="5" updateHover={this._updateHover} hoverId={this.state.hover}
              overall={this.state.overall} updateClick={this._updateClick}
              updateUnhover={this._updateUnhover}/>
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
