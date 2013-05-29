var interval = 10000,
    animation = 2000;

define([], function() {
  return {
    init : function(params){
      //the containing div
      var $this = $(this),
          $ul = $('ul', $this);

      var slides = $('li', $ul);

      setTimeout(function(){

        swap(slides, 0, 1);
      }, interval);
    }
  };
});

function swap(slides, currentSlideIndex, nextSlideIndex) {
  if(nextSlideIndex > slides.length - 1) {
    nextSlideIndex = 0;
  }

  console.log('currentSlideIndex:', currentSlideIndex);
  console.log('nextSlideIndex:', nextSlideIndex);

  var currentSlide = $(slides[currentSlideIndex]),
      nextSlide = $(slides[nextSlideIndex]);

  console.log(currentSlide);
  console.log(nextSlide);

  currentSlide.fadeOut(animation, function(){

  });
  nextSlide.fadeIn(animation, function(){

  });

  setTimeout(function(){
    swap(slides, nextSlideIndex, nextSlideIndex + 1);
  }, interval);
}
