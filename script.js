// var sendButton = document.getElementById("send_btn")
// sendButton.addEventListener('click', function() {
//     var message = document.getElementById("thanksMessage")
//     if (message.classList.contains("d-none")) {
//         message.classList.remove("d-none")
//     } else {
//         message.classList.add("d-none")
//     }

// })
$(window).on('scroll', function() {
    if ($(window).scrollTop() >= 95 && !$('nav').hasClass('sticky')) {
        $('nav').addClass("sticky")
    } else if ($(window).scrollTop() < 95 && $('nav').hasClass('sticky')) {
        $('nav').removeClass("sticky")
    }
});