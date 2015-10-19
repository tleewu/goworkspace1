(function(root){

  "use strict"

  var ReviewIndex = root.ReviewIndex = React.createClass({
    getInitialState: function () {
      return {reviews: []};
    },

    _updateAllReviews: function () {
      this.setState({reviews: ReviewStore.all()});
    },

    componentDidMount: function () {
      ReviewStore.addChangeListener(this._updateAllReviews);
    },

    componentWillUnmount: function () {
      ReviewStore.removeChangeListener(this._updateAllReviews);
    },

    render: function () {
      return (
        <div>
          <b> All Reviews </b>
          {
            this.state.reviews.map (function (review) {
              return (
                <div> {review} </div>
              )
            })
          }
        </div>
      )
    }
  });
}(this));
