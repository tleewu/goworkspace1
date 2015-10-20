$('#myCarousel').carousel({
  interval: 4000
});

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}

    next.children(':first-child').clone().appendTo($(this));
  }
});

(function(root){

  "use strict"

  var WorkspaceShowCarousel = root.WorkspaceShowCarousel = React.createClass({

    render: function () {
      return (
        <div className="col-md-12 text-center">
          <div className="col-md-6 col-md-offset-3">
          <div className="carousel slide" id="myCarousel">
            <div className="carousel-inner">
              <div className="item active">
                <div className="col-xs-3"><a href="#"><img src="http://placehold.it/500/e499e4/fff&amp;text=1" className="img-responsive"></a></div>
              </div>
              <div className="item">
                <div className="col-xs-3"><a href="#"><img src="http://placehold.it/500/e477e4/fff&amp;text=2" className="img-responsive"></a></div>
              </div>
              <div className="item">
                <div className="col-xs-3"><a href="#"><img src="http://placehold.it/500/eeeeee&amp;text=3" className="img-responsive"></a></div>
              </div>
              <div className="item">
                <div className="col-xs-3"><a href="#"><img src="http://placehold.it/500/f4f4f4&amp;text=4" className="img-responsive"></a></div>
              </div>
              <div className="item">
                <div className="col-xs-3"><a href="#"><img src="http://placehold.it/500/f566f5/333&amp;text=5" className="img-responsive"></a></div>
              </div>
              <div className="item">
                <div className="col-xs-3"><a href="#"><img src="http://placehold.it/500/f477f4/fff&amp;text=6" className="img-responsive"></a></div>
              </div>
              <div className="item">
                <div className="col-xs-3"><a href="#"><img src="http://placehold.it/500/eeeeee&amp;text=7" className="img-responsive"></a></div>
              </div>
              <div className="item">
                <div className="col-xs-3"><a href="#"><img src="http://placehold.it/500/fcfcfc/333&amp;text=8" className="img-responsive"></a></div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
          </div>
        </div>
      );
    }
  });
}(this));
