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
        var newLeft = e.pageX - shiftX - maskContainer.offsetWidth / 2 - mask.offsetWidth * 2;
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
	  $('.owl-carousel').owlCarousel({
						items: 1,
                        touchDrag:false,
                        mouseDrag:false,
						nav:true,
						navText: ['','<button class="custom-btn owl-next">Следующий проект</button>'],
						loop: true
					});
      $(window).scroll(function () {
          if ($(this).scrollTop() > 1) {
            $('#navbar-bg').fadeIn("3000")
          } else {
            $('#navbar-bg').fadeOut("3000")
          }
        });
	  $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
      $("form1").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
      $("form2").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
      $("form3").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
      $("form4").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
      $("form5").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
      $("form6").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
});