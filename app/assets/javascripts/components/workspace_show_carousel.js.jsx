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
      return (
        <div className="workspace-carousel">
          {
            allImages.map(function(image) {
              return (
                <img src={image.url} height="200px" width="200px" />
              );
            })
          }
        </div>
      )
    }
  });


}(this));


// {
//   this.props.images.map (function (image) {
//     return (
//       <div id="workspace-image">
//         <img src = {image.url} height="198px"/>
//       </div>
//     )
//   })
// }
