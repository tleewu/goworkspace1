(function(root){

  "use strict"

  var ReviewIndex = root.ReviewIndex = React.createClass({
    getInitialState: function () {
      var reviews = [], currentUser = {};
      if (this.props.allReviews) {
        reviews = this.props.allReviews;
      }

      if (this.props.currentUser) {
        currentUser = this.props.currentUser;
      }
      return {reviews: reviews, currentUser: currentUser};
    },

    _updateAllReviews: function () {
      this.setState({reviews: ReviewStore.all()});
    },

    _updateCurrentUser: function () {
      this.setState({currentUser: UserStore.get()});
    },

    componentDidMount: function () {
      UserStore.addChangeListener(this._updateCurrentUser);
      ReviewStore.addChangeListener(this._updateAllReviews);
    },

    componentWillUnmount: function () {
      ReviewStore.removeChangeListener(this._updateAllReviews);
    },

    _deleteReview: function (reviewId, e) {
      e.preventDefault();
      ApiUtil.deleteReview(reviewId);
    },

    render: function () {
      var that = this;
      return (
        <div>
          {
            this.state.reviews.map(function (review) {
              var firstLetterLastName = review.user.last_name[0];
              var deleteReview;

              if (review.user_id == that.state.currentUser.id) {
                deleteReview = <div> <button onClick={that._deleteReview.bind(null, review.id)}> Delete </button> </div>;
              }

              return (
                <div className="row">
                  <div className="col-md-2" id="user-profile-pic-review">
                    <img src={review.user.profile_image_url} className='img-circle' height='30px' width='30px'/>
                  </div>
                  <div className="col-md-2" id="user-info-review">
                    {review.user.first_name} {firstLetterLastName}.
                    <br />
                    {review.user.location}
                    {deleteReview}
                  </div>
                  <div className="col-md-6" id="review-body">
                      <div className="col-md-2 col-md-offset-1">
                        Overall: {review.overall}
                      </div>
                      <div className="col-md-2">
                        Wifi: {review.wifi}
                      </div>
                      <div className="col-md-2">
                        Outlets: {review.power}
                      </div>
                      <div className="col-md-2">
                        Seating: {review.seating}
                      </div>
                      <div className="col-md-2">
                        Pricing: {review.pricing}
                      </div>

                      {review.body}

                  </div>
                </div>
              );
            })
          }
        </div>
      )
    }
  });
}(this));
