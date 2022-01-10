document.addEventListener("DOMContentLoaded", function(){
		
    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 450) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            console.log(navbar_height);
        } else {
             document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        } 
    });
}); 
