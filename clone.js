const tabsSeo = document.querySelectorAll('#tabs-seo > button');
const tabsPlacesByAreasTabId = document.querySelectorAll('#tabs-placesByAreasTabId > button');
const toggleLayer_0 = document.querySelector('label[for="' + "bigsearch-query-location-input" + '"]');
const toggleLayer_1 = document.querySelector('#structured-search-input-field-split-dates-0');
const toggleLayer_2 = document.querySelector('#structured-search-input-field-split-dates-1');
const toggleLayer_3 = document.querySelector('#structured-search-input-field-guests-button');
const toggleLayers = [toggleLayer_0, toggleLayer_1, toggleLayer_2, toggleLayer_3];

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
            tab.classList.remove("pa_absolute");
            tab.classList.remove('pa_height-2');
            tab.classList.remove('pa_width-calc-100-20');
            tab.classList.remove('pa_bottom--6');
            tab.classList.remove('pa_left-10');
            tab.classList.remove('pa_background-color-34');
            tab.classList.add("font-grey-113");
            panels[index].setAttribute("hidden", true);
        }
        else {
            tab.classList.remove("font-grey-113");
            tab.classList.add("font-black");
            tab.classList.add("pa_absolute");
            tab.classList.add('pa_height-2');
            tab.classList.add('pa_width-calc-100-20');
            tab.classList.add('pa_bottom--6');
            tab.classList.add('pa_left-10');
            tab.classList.add('pa_background-color-34');
            panels[index].removeAttribute("hidden");
        }
    });

}

function toggleLayerButtonStart(event) {
    const target = event.currentTarget;
    toggleLayerButton(target);
}
function toggleLayerButtonMiddle(event) {
    const target = event.currentTarget;
    toggleLayerButton(target);
}
function toggleLayerButtonEnd(event) {
    const target = event.currentTarget;
    toggleLayerButton(target);
}

function toggleLayerButton(event) {
    const searchPanel = document.querySelector('#search-tabpanel');
    console.log(event);

    searchPanel.classList.remove('background-color-basic');
    searchPanel.classList.add('background-color-235');
    event.classList.add('pa_background-color-basic');
    event.classList.remove('pa_hover-grey-235');
    event.classList.add('z-index-3');
}

tabsSeo.forEach(tab => {
    tab.addEventListener("click", tabButton)
});
tabsPlacesByAreasTabId.forEach(tab => {
    tab.addEventListener("click", tabButton)
});

toggleLayer_0.addEventListener("focusin", toggleLayerButtonStart);
toggleLayer_1.addEventListener("click", toggleLayerButtonMiddle);
toggleLayer_2.addEventListener("click", toggleLayerButtonMiddle);
toggleLayer_3.addEventListener("click", toggleLayerButtonEnd);


