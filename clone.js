const tabsSeo = document.querySelectorAll('#tabs-seo > button');
const tabsPlacesByAreasTabId = document.querySelectorAll('#tabs-placesByAreasTabId > button')
const toggleLayer_0 = document.querySelector('label[for="bigsearch-query-location-input"]');
const toggleLayer_1 = document.querySelector('#toggle-layer-1');
const toggleLayer_2 = document.querySelector('#toggle-layer-2');
const toggleLayer_3 = document.querySelector('#toggle-layer-3');

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

function toggleLayerButton(event) {
    const target = event.target;
    const searchPanel = document.querySelector('#search-panel');

    searchPanel.classList.remove('background-color-basic');
    searchPanel.classList.add('background-color-grey-235');
    target.classList.remove('hide-dividing-line-start:hover::after');

    
}

tabsSeo.forEach(tab => {
    tab.addEventListener("click", tabButton)
});
tabsPlacesByAreasTabId.forEach(tab => {
    tab.addEventListener("click", tabButton)
});

toggleLayer_0.addEventListener("focusin", toggleLayerButton);
toggleLayer_1.addEventListener("click", toggleLayerButton);
toggleLayer_2.addEventListener("click", toggleLayerButton);
toggleLayer_3.addEventListener("click", toggleLayerButton);

