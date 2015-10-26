(function(root){

  "use strict"

  var WorkspaceShowCarousel = root.WorkspaceShowCarousel = React.createClass({
    getInitialState: function () {
      return ({allImages: []});
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({allImages: newProps.images});
    },

    render: function () {
      var allImages = this.state.allImages;
      var settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };

      return (
        <Slider {...settings}>
          {
            allImages.map(function(image) {
              return (
                <div> <img src={image.url} height="200px" width="200px"/> </div>
              );
            })
          }
        </Slider>
      )
    }
  });


}(this));
