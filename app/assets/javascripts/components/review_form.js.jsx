(function(root){

  "use strict"

  var ReviewForm = root.ReviewForm = React.createClass({
    getInitialState: function () {
      return ({body: '',
              overall: 0,
              wifi: 1,
              power: 1,
              seating: 1,
              pricing: 1,
              hover: 0,
              currentUser: {}
            });
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({currentUser: newProps.currentUser});
    },

    componentWillUnmount: function () {
      this.setState({currentUser: UserStore.get()});
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
      this.setState({wifi: parseInt(e.currentTarget.value)});
    },

    updatePower: function (e) {
      e.preventDefault();
      this.setState({power: parseInt(e.currentTarget.value)});
    },

    updateSeating: function (e) {
      e.preventDefault();
      this.setState({seating: parseInt(e.currentTarget.value)});
    },

    updatePricing: function (e) {
      e.preventDefault();
      this.setState({pricing: parseInt(e.currentTarget.value)});
    },

    handleSubmit: function (e) {
      e.preventDefault();
      this.props.createReview({body: this.state.body, overall: this.state.overall,
                               wifi: this.state.wifi, power: this.state.power,
                               seating: this.state.seating, pricing: this.state.pricing});
      this.setState({body: '', overall: 0, wifi: 1, power: 1, pricing: 1, seating: 1, hover:0 });
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

    render: function () {
      var firstLetterLastName = '';
      if (this.state.currentUser.last_name) {
        firstLetterLastName = this.state.currentUser.last_name[0];
      }
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-1" id="user-profile-pic-review" >
              <img src={this.state.currentUser.profile_image_url} className='img-circle' height="30px" width="30px"/>
            </div>
            <div className="col-md-1" id="user-info-review">
              {this.state.currentUser.first_name} {firstLetterLastName}.
              <br/>
              {this.state.currentUser.location}
            </div>
            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <textarea id="review-form-input" placeholder = "What did you think?" value = {this.state.body}
                    onChange={this.updateBody}/>
                </div>
                <div className="row" id="ratings">
                  <div className="col-md-4">
                    <Wifi rating={this.state.wifi} />
                  </div>
                  <div className="col-md-4">
                    <Power rating={this.state.power} />
                  </div>
                </div>
                <div className="form-group" >
                  <input type="range" id="input-slider-bar" value = {this.state.wifi} min="1" max="5" step="1"
                    onChange={this.updateWifi}/>
                  <input type="range" id="input-slider-bar" value = {this.state.power} min="1" max="5" step="1"
                     onChange={this.updatePower}/>
                  <input type="range" id="input-slider-bar" value = {this.state.seating} min="1" max="5" step="1"
                     onChange={this.updateSeating}/>
                </div>
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
                <input type="submit" value = "Create review" />
              </form>
            </div>
          </div>
        </div>
      )
    }
  });
}(this));
