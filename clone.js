const toggleLayer_0 = document.querySelector('label[for="' + "bigsearch-query-location-input" + '"]');
const toggleLayer_1 = document.querySelector('#structured-search-input-field-split-dates-0');
const toggleLayer_2 = document.querySelector('#structured-search-input-field-split-dates-1');
const toggleLayer_3 = document.querySelector('#structured-search-input-field-guests-button');
const toggleLayers = [toggleLayer_0, toggleLayer_1, toggleLayer_2, toggleLayer_3];
const layer_0 = document.querySelector('#structured-search-input-field-query-panel');
const layer_1 = document.querySelector('#structured-search-input-field-dates-panel');
const layer_2 = document.querySelector('#structured-search-input-field-guests-panel');
const layers = [layer_0, layer_1, layer_2];
const dynamicSearchButton = document.querySelector('#structured-search-input-search-button');
let isPanelFocus = false;
const application = document.querySelector('#js-application');

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

// 여행지 - 여행지 검색
function travelDestination(target) {
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
}
// 체크인 - 날짜 추가
function checkIn(target) {
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
}
// 체크아웃 - 날짜 추가
function checkOut(target) {
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
}
// 여행자 - 게스트 추가
function traveler(target) {
    target.classList.remove('pb_hover-left-0');
    layer_2.classList.remove('visibility-hidden');

    toggleLayer_2.classList.remove('pb_hover-right--1');
    toggleLayer_2.classList.add('pb_hover-right--30');
    toggleLayer_2.classList.add('pb_hover-grey-gradient-img-reverse');
    toggleLayer_2.classList.add('pb_hover-background-color-transparent');
    toggleLayer_2.classList.add('pb_hover-width-100-31');
}

// 선택된 패널에 효과
function focusedToggleLayer(target) {
    isPanelFocus = true;

    // 전체 검색 패널 배경색 조정
    const searchPanel = document.querySelector('#search-tabpanel');
    searchPanel.classList.remove('background-color-basic');
    searchPanel.classList.remove('search-shadow');
    searchPanel.classList.add('background-color-235');
    // 선택된 패널의 클래스 조정
    target.classList.remove('pb_hover-grey-border-right-255');
    target.classList.remove('pb_hover-height-32');
    target.classList.remove('pb_hover-absolute');
    target.classList.remove('pb_hover-align-self-center');
    target.classList.remove('pb_hover-top-33');
    target.classList.remove('pb_hover-margin-top--16');
    target.classList.remove('pa_hover-grey-235');
    target.classList.remove('pa_transparent-border');
    target.classList.add('pa_grey-border-221');
    target.classList.add('pa_search-panel-shadow');
    target.classList.add('pa_background-color-basic');
    target.classList.add('pa_background-color-221');
    target.classList.add('z-index-3');
}

// 선택되지 않은 패널 효과
function unfocusedToggleLayer(count) {
    toggleLayers.forEach((button, index) => {
        const nearLeft = index - 1;
        const nearRight = index + 1;
        const childText = button.querySelector(':scope > div > :last-child');

        button.classList.remove('pb_hover-grey-border-left-255');
        button.classList.remove('pb_hover-grey-border-right-255');
        // 선택된 패널 양 옆의 패널의 클래스 조정
        if (count === nearLeft || count === nearRight) {
            button.classList.remove('pb_hover-height-32');
            button.classList.remove('pb_hover-top-33');
            button.classList.remove('pb_hover-margin-top--16');
            button.classList.add('pb_hover-top-1');
            button.classList.add('pb_hover-height-100--20');
        }
        // 선택되지 않은 패널의 클래스 조정
        if (count !== index) {
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

// focusedToggleLayer와 unfocusedToggleLayer 함수 무력화
function outFocusedToggleLayer(event) {
    
}

// 패널 focus시 검색 버튼 크기 변경, 그라데이션
function dynamicHighlightButton() {
    if (isPanelFocus === true) {
        const searchButtonSpan = document.createElement('span');
        const searchButtonSpan2 = document.createElement('span');
        const searchButtonSpanSpan = document.createElement('span');
        const searchButtonDiv = dynamicSearchButton.querySelector(':scope > div');
        searchButtonSpan.classList.add('radius-8');
        searchButtonSpan.classList.add('height-full');
        searchButtonSpan.classList.add('width-full');
        searchButtonSpan.classList.add('overflow-hidden');
        searchButtonSpan.classList.add('absolute');
        searchButtonSpan.classList.add('top-0');
        searchButtonSpan.classList.add('right-0');
        searchButtonSpan.classList.add('bottom-0');
        searchButtonSpan.classList.add('left-0');
        searchButtonSpan.classList.add('block');
        searchButtonSpan2.classList.add('pointer-none')
        searchButtonSpanSpan.classList.add('background-position-full');
        searchButtonSpanSpan.classList.add('block');
        searchButtonSpanSpan.classList.add('background-size-200');
        searchButtonSpanSpan.classList.add('height-full');
        searchButtonSpanSpan.classList.add('width-full');
        searchButtonSpanSpan.classList.add('min-width-200');
        searchButtonSpanSpan.classList.add('delay-0ms');
        searchButtonSpanSpan.classList.add('duration-125ms');
        searchButtonSpanSpan.classList.add('transition-opacity');
        searchButtonSpanSpan.classList.add('opacity-0');
        searchButtonSpanSpan.classList.add('background-image-circle');
        searchButtonSpanSpan.style.backgroundPosition = 'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)';
        dynamicSearchButton.appendChild(searchButtonSpan);
        searchButtonSpan.appendChild(searchButtonSpanSpan);
        dynamicSearchButton.appendChild(searchButtonSpan2);
        searchButtonSpan2.appendChild(searchButtonDiv);
    }
    
}

// 마우스 위치 계산
function calcMousePosition(event) {
    const target = event.target;
    searchButtonSpanSpan.style.setProperty('--mouse-x', event.offsetX);
    searchButtonSpanSpan.style.setProperty('--mouse-y', event.offsetY);

}


// click 이벤트
application.addEventListener('click', function (event) {
    const target = event.target;
    // 탭 변경
    if (target.id.includes('tab-seo') || target.id.includes('tab-placesByAreasTabId')) {
        tabButton(event);
    }
    // 체크인 - 날짜 추가
    else if (target.id === 'structured-search-input-field-split-dates-0') {
        outFocusedToggleLayer();
        checkIn(target);
        focusedToggleLayer(target);
        unfocusedToggleLayer(1);
        dynamicHighlightButton();
    }
    // 체크아웃 - 날짜 추가
    else if (target.id === 'structured-search-input-field-split-dates-1') {
        outFocusedToggleLayer();
        checkOut(target);
        focusedToggleLayer(target);
        unfocusedToggleLayer(2);        
        dynamicHighlightButton();
    }
    // 여행자 - 게스트 추가
    else if (target.id === 'structured-search-input-field-guests-button') {
        outFocusedToggleLayer();
        traveler(target);
        focusedToggleLayer(target);
        unfocusedToggleLayer(3);
        dynamicHighlightButton();
    }
    else {
        document.reset();
        outFocusedToggleLayer(event);
    }
});

// focusin 이벤트
application.addEventListener('focusin', function (event) {
    const target = event.target;
    // 여행지 - 여행지 검색
    if (target.id === 'bigsearch-query-location-input') {
        const targetLabel = document.querySelector('label[for="' + "bigsearch-query-location-input" + '"]');
        outFocusedToggleLayer();
        travelDestination(targetLabel);
        focusedToggleLayer(targetLabel);
        unfocusedToggleLayer(0);
        dynamicHighlightButton();
    }
    else {
        outFocusedToggleLayer(event);
    }
});

searchButtonSpanSpan.addEventListener("mousemove", function(event) { 
    if(isPanelFocus) {
        calcMousePosition(event);
    }
});



