(function(root){

  "use strict"

  var ReviewIndex = root.ReviewIndex = React.createClass({
    getInitialState: function () {
      return {reviews: [], currentUser: this.props.currentUser};
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({reviews: newProps.allReviews, currentUser: newProps.currentUser});
    },

    _deleteReview: function (reviewId, e) {
      e.preventDefault();
      ApiUtil.deleteReview(reviewId);
    },

    render: function () {
      var that = this;
      var currentUser = this.state.currentUser;
      if (currentUser.id) {
        return (
          <div>
            {
              this.state.reviews.map(function (review) {
                var firstLetterLastName = review.user.last_name[0];
                var deleteReview;
                if (review.user.id == currentUser.id) {
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
                    <div className="col-md-8" id="review-body">
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
      } else {
        return (<div> </div>);
      }
    }
  });
}(this));
