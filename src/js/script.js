$(".navbar-collapse").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$("form").submit(function (e) {

    var error = "";

    if ($("#email").val() == "") {
        error += "The email field is required. <br>";
    }

    if ($("#subject").val() == "") {
        error += "The subject field is required. <br>";
    }

    if ($("#content").val() == "") {
        error += "The content field is required.";
    }

    if (error != "") {
        $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');
        return false;
    } else {
        return true;
    }

});

$('#number11').click(function() {
  $(this).find('span').text( $(this).data('last') );
});
$('#number22').click(function() {
  $(this).find('span').text( $(this).data('last') );
});