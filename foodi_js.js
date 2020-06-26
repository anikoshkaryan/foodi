$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});

$("document").ready(function () {
    let menuIcon = document.querySelector('.hamburger-menu');
    let navBar = document.querySelector(".navBar");
    menuIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        navBar.classList.toggle("change");
    });
    $(".nav-list .nav-link").click(function () {
        let id = $(this).attr("href");
        let scrollElem = $(id);
        let offsetTop = $(scrollElem).offset().top;
        $("html, body").animate({
            scrollTop: offsetTop - 100,
        }, 1000);
    });
    $("body").click(function () {
        $(".navBar").removeClass("change");
        $(".hamburger-menu").removeClass("change");

    });
    $(".food-gallery-text").click(function () {
        $(".modal").addClass("open");
        let img = $(this).closest(".food-gallery-item").attr("data-picture");
        let title = $(this).closest(".food-gallery-item").find(".food-gallery-text-title").text();
        let text = $(this).closest(".food-gallery-item").find(".food-gallery-text-desc").text();
        let price = $(this).closest(".food-gallery-item").find(".food-gallery-text-money").text();
        setDishInfo(img, title, text, price);
    });

    function setDishInfo(img, title, text, price) {
        $(".modal-image img").attr("src", img);
        $(".modal-title").text(title);
        $(".modal-price").text(price);
        $(".modal-text").text(text);

    }

    $(".close-button").click(function () {
        $(".modal").removeClass("open");
    });
    $(".modal").click(function (event) {
        $(".modal").removeClass("open");
    });
    $(".modal-content").click(function (event) {
        event.stopPropagation();

    });
    $("#form_container").validate(
        {
            rules: {
                firstname: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                message: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                email: "Please enter a valid email address",
                message: "Please enter your message"
            }
        }
    );
    $(".chef-link").click(function () {
        $(".mCHef").addClass("open");
    });
    $(".closeButtonChef").click(function () {
        $(".mCHef").removeClass("open");
    });
    $(".mCHef").click(function (event) {
        $(".mCHef").removeClass("open");
    });
    $(".mContentChef").click(function (event) {
        event.stopPropagation();

    });
    /*slider*/
    $('.owl-carousel').owlCarousel({
        animateIn: 'animate__backInUp',
        items: 1,
        loop: true,
        nav: true,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        dots: false,
    });
    /*slider end*/
    

});