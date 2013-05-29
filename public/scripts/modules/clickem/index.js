
define([], function() {
  return {
    init : function(params){
      //the containing div
      $('[data-url]', this).each(function(i, el){
        var $c = $(el);
        var url = $c.data("url");
        $c.click(function(evt){
          window.location = url;
        });
      });
    }
  };
});
