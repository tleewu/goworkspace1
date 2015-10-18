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
      this.setState({overall: e.currentTarget.value});
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

    render: function () {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <input type="number" placeholder = "Number of stars"
              value={this.state.overall} onChange = {this.updateOverall}/>
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
