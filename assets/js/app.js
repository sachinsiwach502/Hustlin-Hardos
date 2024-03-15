$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slick-slider-1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

let sub = document.querySelector(".sub");
let add = document.querySelector(".add");
let num = document.querySelector(".num");
let i = 100;


sub.addEventListener("click", () => {
    num.innerHTML = --i;
});
add.addEventListener("click", () => {
    num.innerHTML = ++i;
});



function intervel() {
    let time = document.querySelector(".time");
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let milsec = date.getMilliseconds();
    let time_string = `${hour}:${mins}:${sec}:${milsec}`;

    time.innerHTML = time_string;
}

intervel();

setInterval(intervel, 1);


let acc_part = document.querySelectorAll(".full-part");
let one_part = document.querySelector(".click-part");
let add_icon = document.querySelector(".add-click");
let sub_icon = document.querySelector(".sub-click");


acc_part.forEach(element => {
    let one_part = element.querySelector(".click-part");
    let add_icon = element.querySelector(".add-click");
    let sub_icon = element.querySelector(".sub-click");
    let txt = element.querySelector(".hidden-txt")

    one_part.addEventListener("click", () => {
        acc_part.forEach(other => {
            if (other !== element) {
                let text = other.querySelector(".hidden-txt");
                let add_icon = other.querySelector(".add-click");
                let sub_icon = other.querySelector(".sub-click");
                sub_icon.style.display = "none";
                add_icon.style.display = "block";
                text.style.display = "none";
            }
        });
        let disp_text = window.getComputedStyle(txt).display;
        if (disp_text === "none") {
            add_icon.style.display = "none"
            sub_icon.style.display = "block"
            txt.style.display = "block"
        } else {
            add_icon.style.display = "block"
            sub_icon.style.display = "none"
            txt.style.display = "none"
        }
    });
});


