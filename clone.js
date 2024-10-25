const toggleLayers = [document.querySelector('#structured-search-input-field-place-label'), document.querySelector('#structured-search-input-field-split-dates-0'), document.querySelector('#structured-search-input-field-split-dates-1'), document.querySelector('#structured-search-input-field-guests-button')];
const layers = [document.querySelector('#structured-search-input-field-query-panel'), document.querySelector('#structured-search-input-field-dates-panel'), document.querySelector('#structured-search-input-field-guests-panel')];
const searchTabPanel = document.querySelector('#search-tabpanel');
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
            tab.classList.remove("font-black-34");
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
            tab.classList.add("font-black-34");
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
    layers[0].classList.remove('visibility-hidden');

    toggleLayers[1].classList.remove('pb_hover-left--1');
    toggleLayers[1].classList.remove('pb_hover-right--1');
    toggleLayers[1].classList.add('pb_hover-right-0');
    toggleLayers[1].classList.add('pb_hover-left--30');
    toggleLayers[1].classList.add('pb_hover-grey-gradient-img');
    toggleLayers[1].classList.add('pb_hover-background-color-transparent');
    toggleLayers[1].classList.add('pb_hover-width-100-31');
}
// 체크인 - 날짜 추가
function checkIn(target) {
    target.classList.remove('pb_hover-right--1');
    target.classList.remove('pb_hover-left--1');
    layers[1].classList.remove('visibility-hidden');

    toggleLayers[0].classList.remove('pb_hover-right-0');
    toggleLayers[0].classList.add('pb_hover-background-color-grey-221');
    toggleLayers[0].classList.add('pb_hover-right--30');
    toggleLayers[0].classList.add('pb-hover-width-80');

    toggleLayers[2].classList.remove('pb_hover-left--1');
    toggleLayers[2].classList.remove('pb_hover-right--1');
    toggleLayers[2].classList.add('pb_hover-right-0');
    toggleLayers[2].classList.add('pb_hover-left--30');
    toggleLayers[2].classList.add('pb_hover-grey-gradient-img');
    toggleLayers[2].classList.add('pb_hover-background-color-transparent');
    toggleLayers[2].classList.add('pb_hover-width-100-31');
}
// 체크아웃 - 날짜 추가
function checkOut(target) {
    target.classList.remove('pb_hover-right--1');
    target.classList.remove('pb_hover-left--1');
    layers[1].classList.remove('visibility-hidden');

    toggleLayers[1].classList.remove('pb_hover-right--1');
    toggleLayers[1].classList.add('pb_hover-right--30');
    toggleLayers[1].classList.add('pb_hover-grey-gradient-img-reverse');
    toggleLayers[1].classList.add('pb_hover-background-color-transparent');
    toggleLayers[1].classList.add('pb_hover-width-100-31');

    toggleLayers[3].classList.remove('pb_hover-left-0');
    toggleLayers[3].classList.add('pb_hover-grey-gradient-img');
    toggleLayers[3].classList.add('pb_hover-background-color-transparent');
    toggleLayers[3].classList.add('pb_hover-width-100-29');
    toggleLayers[3].classList.add('pb_hover-left--30');
    toggleLayers[3].classList.add('pb_hover-radius-right-32');
}
// 여행자 - 게스트 추가
function traveler(target) {
    target.classList.remove('pb_hover-left-0');
    layers[2].classList.remove('visibility-hidden');

    toggleLayers[2].classList.remove('pb_hover-right--1');
    toggleLayers[2].classList.add('pb_hover-right--30');
    toggleLayers[2].classList.add('pb_hover-grey-gradient-img-reverse');
    toggleLayers[2].classList.add('pb_hover-background-color-transparent');
    toggleLayers[2].classList.add('pb_hover-width-100-31');
}

// 선택된 패널에 효과
function focusedToggleLayer(target) {
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
    target.classList.remove('pa_hover-background-color-235');
    target.classList.remove('pa_transparent-border');
    target.classList.add('pa_grey-border-221');
    target.classList.add('pa_search-panel-shadow');
    target.classList.add('pa_background-color-basic');
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
            childText.classList.add('font-black-34');
            childText.classList.add('ph_font-black-34');
            button.classList.remove('pa_hover-background-color-235');
            button.classList.add('pa_hover-background-color-221');
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


// 요소의 클래스 저장
const initialClasses = {};
function storeInitialClasses() {
    toggleLayers.forEach(element => {
        initialClasses[element.id] = Array.from(element.classList);
    });
    layers.forEach(element => {
        initialClasses[element.id] = Array.from(element.classList);
    });
    initialClasses[searchTabPanel.id] = Array.from(searchTabPanel.classList);
}

// 요소의 클래스 복구
function restoreInitialClasses() {
    toggleLayers.forEach(element => {
        element.className = initialClasses[element.id].join(' ');
    });
    layers.forEach(element => {
        element.className = initialClasses[element.id].join(' ');
    });
    searchTabPanel.className = initialClasses[searchTabPanel.id].join(' ');
}

// 스크롤바의 양 끝에 접근 시 스크롤 버튼 숨김
function hiddenScrollButton(target) {
    const scrollLeft = target.scrollLeft;
    const scrollWidth = target.scrollWidth;
    const clientWidth = target.clientWidth;
    
    if (scrollLeft === 0) {
        target.previousElementSibling.hidden = true;
    }
    if (scrollLeft + clientWidth >= scrollWidth) {
        target.nextElementSibling.hidden = true;
    }
}


storeInitialClasses();
// click 이벤트
application.addEventListener('click', function (event) {
    const target = event.target;
    // 탭 변경
    if (target.id.includes('tab-seo') || target.id.includes('tab-placesByAreasTabId')) {
        tabButton(event);
    }
    // 체크인 - 날짜 추가
    else if (target.id === 'structured-search-input-field-split-dates-0') {
        restoreInitialClasses();
        checkIn(target);
        focusedToggleLayer(target);
        unfocusedToggleLayer(1);
    }
    // 체크아웃 - 날짜 추가
    else if (target.id === 'structured-search-input-field-split-dates-1') {
        restoreInitialClasses();
        checkOut(target);
        focusedToggleLayer(target);
        unfocusedToggleLayer(2);
    }
    // 여행자 - 게스트 추가
    else if (target.id === 'structured-search-input-field-guests-button') {
        restoreInitialClasses();
        traveler(target);
        focusedToggleLayer(target);
        unfocusedToggleLayer(3);
    }
});

//mouseup 이벤트
application.addEventListener('mouseup', function (event) {
    const target = event.target;
    const path = event.composedPath();
    if (path.some((element) => element.id === 'search-tabpanel') === false) {
        restoreInitialClasses();
    }
});

// focusin 이벤트
application.addEventListener('focusin', function (event) {
    const target = event.target;
    // 여행지 - 여행지 검색
    if (target.id === 'bigsearch-query-location-input') {
        const targetLabel = document.querySelector('label[for="' + "bigsearch-query-location-input" + '"]');
        restoreInitialClasses();
        travelDestination(targetLabel);
        focusedToggleLayer(targetLabel);
        unfocusedToggleLayer(0);
    }
});

// scroll 이벤트 
application.addEventListener('scroll', function (event) {
    const target = event.target;
    console.log(333);
    if (target.id === 'category-item-scrollbar') {
        hiddenScrollButton(event);
    }
})




