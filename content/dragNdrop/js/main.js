$(document).ready(function(){
  function custom(i) {
    var mask = $('.mask-arrow'),
        mask = mask[i],
        maskContainer = mask.closest('.gallery-image'),
        maskBox = $('.mask');
    maskBox = maskBox[i];

    mask.onmousedown = function(e) { 
      var thumbCoords = getCoords(mask);
      var sliderCoords = getCoords(maskBox);
      var shiftX = e.pageX - thumbCoords.left;
    // mask.style.position = 'absolute';
      document.onmousemove = function custom(e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;
        maskBox.style.width = (newLeft + mask.offsetWidth / 2) + "px";
        if (newLeft < -mask.offsetWidth / 2) {
          newLeft = -mask.offsetWidth / 2;
        };

        var rightEdge = maskContainer.offsetWidth - mask.offsetWidth / 2 ;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        };
        mask.style.left = newLeft + 'px';
        // 4. отследить окончание переноса
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
        return false;
      };
    };
    function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    };
  mask.ondragstart = function() {
      return false;
    };
   };
  for (var k = 0; k < $('.gallery-image').length; k++) {
    custom(k);
  }
});
