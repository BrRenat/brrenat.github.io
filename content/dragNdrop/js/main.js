$(document).ready(function(){
    function clearSelection() {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else { // старый IE
      document.selection.empty();
    }
  }
    var mask = $('.mask-arrow'),
        mask = mask[0],
        maskBox = $('.mask'),
        maskBox = maskBox[0];

    mask.onmousedown = function(e) { 
    // 1. отследить нажатие
    mask.style.position = 'absolute';
    // moveAt(e);

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    mask.style.left = e.pageX - mask.offsetWidth / 2 + 'px';
    mask.style.top = 0;
  }

  // 3, перемещать по экрану
  var isStop = false;
  
  document.onmousemove = function(e) {
    var string = mask.style.left,
        leftPosition = string.substr( 0, string.length-2),
        leftPosition = Number(leftPosition),
        leftMax = 400;
    // if (leftPosition > leftMax) {
    //     return;
    // };
    if ((leftPosition <= leftMax && isStop == false) || (leftPosition >= leftMax && isStop == true)) {
        isStop = false;
        maskBox.style.width = leftPosition + mask.offsetWidth / 2 + 'px';
        moveAt(e);
        mask.style.top = 0;
        clearSelection();
    } else {
        isStop = true;
        document.onmousemove = null;
        console.log(leftPosition);
    }
  }

  // 4. отследить окончание переноса
  mask.onmouseup = function() {
    document.onmousemove = null;
    mask.onmouseup = null;
    clearSelection();
  }
}
mask.ondragstart = function() {
  return false;
};
});
