const tabsSeo = document.querySelectorAll('#tabs-seo > button');
const tabsPlacesByAreasTabId = document.querySelectorAll('#tabs-placesByAreasTabId > button');
const toggleLayer_0 = document.querySelector('label[for="' + "bigsearch-query-location-input" + '"]');
const toggleLayer_1 = document.querySelector('#structured-search-input-field-split-dates-0');
const toggleLayer_2 = document.querySelector('#structured-search-input-field-split-dates-1');
const toggleLayer_3 = document.querySelector('#structured-search-input-field-guests-button');
const toggleLayers = [toggleLayer_0, toggleLayer_1, toggleLayer_2, toggleLayer_3];
const layer_0 = document.querySelector('#structured-search-input-field-query-panel');
const layer_1 = document.querySelector('#structured-search-input-field-dates-panel');
const layer_2 = document.querySelector('#structured-search-input-field-guests-panel');

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
    target.classList.remove('pb_hover-right-0');
    target.classList.add('pa_grey-border-221');
    layer_0.classList.remove('visibility-hidden');

    toggleLayer_1.classList.remove('pb_hover-left--1');
    toggleLayer_1.classList.remove('pb_hover-right--1');
    toggleLayer_1.classList.add('pb_hover-right-0');
    toggleLayer_1.classList.add('pb_hover-left--30');
    toggleLayer_1.classList.add('pb_hover-grey-gradient-img');
    toggleLayer_1.classList.add('pb_hover-background-color-transparent');
    toggleLayer_1.classList.add('pb_hover-width-100-31');
    toggleLayerButton(target, 0);
}
function toggleLayerButtonStadle(event) {
    const target = event.currentTarget;
    target.classList.remove('pb_hover-right--1');
    target.classList.remove('pb_hover-left--1');
    layer_1.classList.remove('visibility-hidden');
    
    toggleLayer_0.classList.remove('pb_hover-right-0');
    toggleLayer_0.classList.add('pb_hover-background-color-grey-221');
    toggleLayer_0.classList.add('pb_hover-right--30');
    toggleLayer_0.classList.add('pb-hover-width-80');
    toggleLayer_2.classList.remove('pb_hover-left--1');
    toggleLayer_2.classList.remove('pb_hover-right--1');
    toggleLayer_2.classList.add('pb_hover-right-0');
    toggleLayer_2.classList.add('pb_hover-left--30');
    toggleLayer_2.classList.add('pb_hover-grey-gradient-img');
    toggleLayer_2.classList.add('pb_hover-background-color-transparent');
    toggleLayer_2.classList.add('pb_hover-width-100-31');
    toggleLayerButton(target, 1);
}
function toggleLayerButtonMidend(event) {
    const target = event.currentTarget;
    target.classList.remove('pb_hover-right--1');
    target.classList.remove('pb_hover-left--1');
    layer_1.classList.remove('visibility-hidden');
    
    toggleLayer_1.classList.remove('pb_hover-right--1');
    toggleLayer_1.classList.add('pb_hover-right--30');
    toggleLayer_1.classList.add('pb_hover-grey-gradient-img-reverse');
    toggleLayer_1.classList.add('pb_hover-background-color-transparent');
    toggleLayer_1.classList.add('pb_hover-width-100-31');

    toggleLayer_3.classList.remove('pb_hover-left-0');
    toggleLayer_3.classList.add('pb_hover-grey-gradient-img');
    toggleLayer_3.classList.add('pb_hover-background-color-transparent');
    toggleLayer_3.classList.add('pb_hover-width-100-29');
    toggleLayer_3.classList.add('pb_hover-left--30');
    toggleLayer_3.classList.add('pb_hover-radius-right-32');
    toggleLayerButton(target, 2);
}
function toggleLayerButtonEnd(event) {
    const target = event.currentTarget;
    target.classList.remove('pb_hover-left-0');
    layer_2.classList.remove('visibility-hidden');

    toggleLayer_2.classList.remove('pb_hover-right--1');
    toggleLayer_2.classList.add('pb_hover-right--30');
    toggleLayer_2.classList.add('pb_hover-grey-gradient-img-reverse');
    toggleLayer_2.classList.add('pb_hover-background-color-transparent');
    toggleLayer_2.classList.add('pb_hover-width-100-31');
    toggleLayerButton(target, 3);
}

function toggleLayerButton(event, count) {
    const searchPanel = document.querySelector('#search-tabpanel');
    searchPanel.classList.remove('background-color-basic');
    searchPanel.classList.remove('search-shadow');
    searchPanel.classList.add('background-color-235');
    event.classList.remove('pb_hover-grey-border-right-255');
    event.classList.remove('pb_hover-height-32');
    event.classList.remove('pb_hover-absolute');
    event.classList.remove('pb_hover-align-self-center');
    event.classList.remove('pb_hover-top-33');
    event.classList.remove('pb_hover-margin-top--16');
    event.classList.remove('pa_hover-grey-235');
    event.classList.add('pa_search-panel-shadow');
    event.classList.add('pa_background-color-basic');
    event.classList.add('z-index-3');

    toggleLayers.forEach((button, index) => {
        const nearLeft = index - 1;
        const nearRight = index + 1;
        const childText = button.querySelector(':scope > div > :last-child');

        button.classList.remove('pb_hover-grey-border-left-255');
        button.classList.remove('pb_hover-grey-border-right-255'); 
        // 선택된 패널 양 옆의 패널의 클래스 조정
        if(count === nearLeft || count === nearRight) {
            button.classList.remove('pb_hover-height-32');
            button.classList.remove('pb_hover-top-33');
            button.classList.remove('pb_hover-margin-top--16');
            button.classList.add('pb_hover-top-1');
            button.classList.add('pb_hover-height-100--20');
        }
        // 선택되지 않은 패널의 클래스 조정
        if(count !== index) {
            childText.classList.remove('font-grey-113');
            childText.classList.remove('ph_font-grey-113');
            childText.classList.add('font-black');
            childText.classList.add('ph_font-black');
            button.classList.remove('pa_hover-grey-235');
            button.classList.add('pa_hover-grey-221');
            if (count < 1) {
                button.classList.add('pb_hover-grey-border-right-235');
            }
            else if (count > 2) {
                button.classList.add('pb_hover-grey-border-left-235');
            }
            else {
                button.classList.add('pb_hover-grey-border-left-235');
                button.classList.add('pb_hover-grey-border-right-235');
            }
        }
        
        
    });
    
}

tabsSeo.forEach(tab => {
    tab.addEventListener("click", tabButton)
});
tabsPlacesByAreasTabId.forEach(tab => {
    tab.addEventListener("click", tabButton)
});

toggleLayer_0.addEventListener("focusin", toggleLayerButtonStart);
toggleLayer_1.addEventListener("click", toggleLayerButtonStadle);
toggleLayer_2.addEventListener("click", toggleLayerButtonMidend);
toggleLayer_3.addEventListener("click", toggleLayerButtonEnd);


