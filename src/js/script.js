require('bootstrap');
// require('font-awesome');
const $ = require('jquery');

	let navWrapper = document.querySelector('.nav-wrapper'),
		navToogler =  document.querySelector('.nav-toogler'),
    navigation = document.querySelector('.navigation')

		navToogler.addEventListener('click', function (event) {
		// navWrapper.classList.toggle('active');
    navigation.classList.toggle('active2');
    navToogler.classList.toggle('active3')

		});

    document.addEventListener('scroll', function(){
    if (window.pageYOffset > 200 && !nav.classList.contains("small")){
        nav.classList.add("small")
    }
    if (window.pageYOffset <= 200 && nav.classList.contains("small")){
        nav.classList.remove("small")
    }
    })

// $(document).ready(function(){});

$("#demo").html("Hello, World!");

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    $(function () {
      $('[data-toggle="popover"]').popover()
    });

    $('#number11').click(function() {
      $(this).find('span').text( $(this).data('last') );
    });
    $('#number22').click(function() {
      $(this).find('span').text( $(this).data('last') );
});