var $scroll = $('.scrool').flickity({
    imagesLoaded: true,
    prevNextButtons: false,
    freeScroll: true,
    wrapAround: true,
    autoPlay: 2500,
    pauseAutoPlayOnHover: false

  });
  
  var $imgs = $scroll.find('.member img');
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  var flkty = $scroll.data('flickity');
  
  $scroll.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/4;
      img.style[ transformProp ] = 'translateX(' + x  + 'px)';
    });
  });