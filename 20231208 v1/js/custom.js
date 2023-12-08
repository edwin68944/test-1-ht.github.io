var hero = $(".hero_area");
var menu = $(".custom_menu-container");
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > hero.height()) {
        menu.addClass("menu_fixed-position");
        $(".custom_menu-container + section").addClass("mt-5");
    } else {
        menu.removeClass("menu_fixed-position");
        $(".custom_menu-container + section").removeClass("mt-5");
    }
});


var myCircle = Circles.create({
    id: "circles-1",
    radius: 65,
    value: 85,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-2",
    radius: 65,
    value: 55,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-3",
    radius: 65,
    value: 65,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-4",
    radius: 65,
    value: 85,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});

        // 跳出式提示框的JavaScript代码
    var modal = document.getElementById('modal');
    var timerElement = document.getElementById('timer');
var secondsRemaining = 60; // 休息时间，单位：60秒

    function showPopup() {
        modal.style.display = 'block';
    updateTime();
        }

    function closePopup() {
        modal.style.display = 'none';
    clearInterval(timerInterval);
        alert('繼續工作,不能休息！');
        }

    function updateTime() {
            var minutes = Math.floor(secondsRemaining / 60);
    var seconds = secondsRemaining % 60;

    // 格式化时间，例如：10:00
    var formattedTime = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

    timerElement.textContent = formattedTime;

            if (secondsRemaining > 0) {
        secondsRemaining--;
            } else {
        closePopup();
            }
        }

    var timerInterval;

    setTimeout(showPopup, 5000); // 在10秒后弹出提示框

    modal.addEventListener('click', closePopup);