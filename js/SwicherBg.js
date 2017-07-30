"use strict";
// Toggle class name of background
function toggleClassBg(bgClass) {
    var container = document.querySelector(".container-bg");

    container.classList.remove(container.classList[1]);
    container.classList.add(bgClass);
}

// Toggle class name of background in depends on time of day on load
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
}

// Toggle class name of background in depends on time of day on click
function switchBgOnClick(btn) {
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
}



