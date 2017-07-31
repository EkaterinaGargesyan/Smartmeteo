"use strict";
// Toggle class name of background
function toggleClassBg(bgClass) {
    var container = document.querySelector(".container-bg");

    container.classList.remove(container.classList[1]);
    container.classList.add(bgClass);
}

// Toggle class name of switcher on load
function toogleClassSwitchOnLoad() {
    var bg = document.querySelector(".container-bg").classList[1].split("-");
    bg = bg[2];

    document
        .querySelectorAll(".switcher")
        .forEach(function (switcher) {
            switcher.classList.remove("visible");

            if(bg === switcher.classList[1]) {
                switcher.classList.remove("invisible");
                switcher.classList.add("visible");
            }
        });
}

// Toggle class name of background and switcher in depends on time of day on load
function switchBgOnLoad(data) {
    var hour = getCurrentTime(data);

    if(hour >= 6 && hour < 12){
        toggleClassBg("js-container-morning");
    }
    if(hour >= 12 && hour < 18){
        toggleClassBg("js-container-afternoon");
    }
    if(hour >= 18 && hour < 24){
        toggleClassBg("js-container-evening");
    }
    if(hour >= 0 && hour < 6){
        toggleClassBg("js-container-night");
    }

    toogleClassSwitchOnLoad();
}


// Toggle class name of switcher on click
function toogleClassSliderOnClick(btn) {
    document
        .querySelectorAll(".switcher")
        .forEach(function (switcher) {
            if(btn.classList[1] === switcher.classList[1]){
                switcher.classList.remove("invisible");
                switcher.classList.add("visible");
            } else {
                if(switcher.classList.contains("visible")){
                    switcher.classList.remove("visible");
                    switcher.classList.add("invisible");
                }
            }
        });
}

// Toggle class name of background and switcher in depends on time of day on click
function switchOnClick(btn) {
    switch(btn.className){
        case "slider__btn morning":
            toggleClassBg("js-container-morning");
            break;
        case "slider__btn afternoon":
            toggleClassBg("js-container-afternoon");
            break;
        case "slider__btn evening":
            toggleClassBg("js-container-evening");
            break;
        case "slider__btn night":
            toggleClassBg("js-container-night");
            break;
        default:
            break;
    }

    toogleClassSliderOnClick(btn);
}



