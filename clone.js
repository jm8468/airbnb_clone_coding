const tabsSeo = document.querySelectorAll('#tabs-seo > button');
const tabsPlacesByAreasTabId = document.querySelectorAll('#tabs-placesByAreasTabId > button')
const layerContainers = document.querySelectorAll('.layer-container');

function tabButton(event) {
    const button = event.target;
    const parentButton = button.parentElement.parentElement;
    const buttons = parentButton.querySelectorAll('div[id^="tabs-"] > button[id^="tab-"]')
    const panels = parentButton.querySelectorAll('div[id^="panels-"] > div[id^="panel-"]');
    // 선택한 aria-selected만 true가 되게 하는 기능
    buttons.forEach(tab => {
        tab.setAttribute("aria-selected", "false");
    });
    button.setAttribute("aria-selected", "true");

    // aria-selected가 true인 버튼만 강조하는 기능
    buttons.forEach((tab, index) => {
        if (tab.getAttribute("aria-selected") === "false") {
            tab.classList.remove("font-black");
            tab.classList.remove("selected-button-highlight");
            tab.classList.add("font-grey-113");
            panels[index].setAttribute("hidden", true);
        }
        else {
            tab.classList.remove("font-grey-113");
            tab.classList.add("font-black");
            tab.classList.add("selected-button-highlight");
            panels[index].removeAttribute("hidden");
        }
    });

}

function showLayer(event) {
    const target = event.target;
    const layerItems = document.querySelectorAll('.layer-item');

    layerContainers.forEach((container, index) => {
        if(target === container) {
            layerItems[index].classList.remove('visibility-hidden');
        }
    });
}

function removeLayer(event) {
    const target = event.target;
    const layerItems = document.querySelectorAll('.layer-item');
}


tabsSeo.forEach(tab => {
    tab.addEventListener("click", tabButton)
});
tabsPlacesByAreasTabId.forEach(tab => {
    tab.addEventListener("click", tabButton)
});

layerContainers.forEach(container => {
    container.addEventListener("click", showLayer, true)
});

document.addEventListener("click", removeLayer);
