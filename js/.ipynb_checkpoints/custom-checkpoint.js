
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


 const canvas = document.getElementById('matrixCanvas');
         const ctx = canvas.getContext('2d');
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
         
      const characters = '゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾゝゞー１２３４５６７８９０';
         
         const fontSize = 15;
         const columns = canvas.width / fontSize;
         
         const drops = [];
         for (let i = 0; i < columns; i++) {
         	drops[i] = 1;
         }
         
         function draw() {
         	ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
         	ctx.fillRect(0, 0, canvas.width, canvas.height);
         
         	ctx.fillStyle = '#474866';
         	ctx.font = `${fontSize}px monospace`;
         
         	for (let i = 0; i < drops.length; i++) {
         		const text = characters.charAt(Math.floor(Math.random() * characters.length));
         		ctx.fillText(text, i * fontSize, drops[i] * fontSize);
         
         		if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
         			drops[i] = 0;
         		}
         		drops[i]++;
         	}
         }
         
         setInterval(draw, 33);