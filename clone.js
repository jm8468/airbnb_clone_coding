const toggleLayers = [document.querySelector('#structured-search-input-field-place-label'), document.querySelector('#structured-search-input-field-split-dates-0'), document.querySelector('#structured-search-input-field-split-dates-1'), document.querySelector('#structured-search-input-field-guests-button')];
const layers = [document.querySelector('#structured-search-input-field-query-panel'), document.querySelector('#structured-search-input-field-dates-panel'), document.querySelector('#structured-search-input-field-guests-panel')];
const searchTabPanel = document.querySelector('#search-tabpanel');
const application = document.querySelector('#js-application');
const category_item_scrollbar = document.querySelector('#category-item-scrollbar');

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
    toggleLayers[0].classList.add('pb_hover-background-color-221');
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
    const searchButton = document.querySelector('#structured-search-input-search-button');
    const searchText = searchButton.querySelector('div > div:last-child');
    //검색 버튼 조정정
    searchButton.classList.remove('max-width-48');
    searchButton.classList.add('max-width-200');
    searchButton.classList.remove('pb_opacity-0');
    searchText.classList.remove('opacity-0');
    searchText.classList.add('opacity-10');
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
    const searchButton = document.querySelector('#structured-search-input-search-button');
    const searchText = searchButton.querySelector('div > div:last-child');
    toggleLayers.forEach(element => {
        element.className = initialClasses[element.id].join(' ');
        const childText = element.querySelector(':scope > div > :last-child');
        childText.classList.add('font-grey-113');
        childText.classList.add('ph_font-grey-113');
        childText.classList.remove('font-black-34');
        childText.classList.remove('ph_font-black-34');
    });
    layers.forEach(element => {
        element.className = initialClasses[element.id].join(' ');
    });
    searchTabPanel.className = initialClasses[searchTabPanel.id].join(' ');
    searchButton.classList.add('max-width-48');
    searchButton.classList.remove('max-width-200');
    searchButton.classList.add('pb_opacity-0');
    searchText.classList.add('opacity-0');
    searchText.classList.remove('opacity-10');
}

// 스크롤바의 양 끝에 접근 시 스크롤 버튼 숨김
function hiddenScrollButton(event) {
    const target = event.target;
    const scrollLeft = target.scrollLeft;
    const scrollWidth = target.scrollWidth;
    const clientWidth = target.clientWidth;
    if (scrollLeft === 0) {
        target.previousElementSibling.classList.add('visibility-hidden');
        target.previousElementSibling.classList.add('opacity-0');
        target.previousElementSibling.classList.remove('opacity-10');
    }
    else {
        target.previousElementSibling.classList.remove('visibility-hidden');
        target.previousElementSibling.classList.add('opacity-10');
        target.previousElementSibling.classList.remove('opacity-0');
    }
    if (scrollLeft + clientWidth >= scrollWidth) {
        target.nextElementSibling.classList.add('visibility-hidden');
        target.nextElementSibling.classList.add('opacity-0');
        target.nextElementSibling.classList.remove('opacity-10');
    }
    else {
        target.nextElementSibling.classList.remove('visibility-hidden');
        target.nextElementSibling.classList.add('opacity-10');
        target.nextElementSibling.classList.remove('opacity-0');
    }
}

// 왼쪽 스크롤
function categoryItemLeftScroll() {
    const scrollBar = document.querySelector('#category-item-scrollbar');
    scrollBar.scrollTo({
        left: scrollBar.scrollLeft - 830,
        behavior: 'smooth'
    })
   
}

// 오른쪽 스크롤
function categoryItemRightScroll() {
    const scrollBar = document.querySelector('#category-item-scrollbar');
    scrollBar.scrollTo({
        left: scrollBar.scrollLeft + 830,
        behavior: 'smooth'
    })
}

// 게스트 표시
function guestIndicator(guest) {
    const adultsDecreaseButton = document.querySelector('[data-testid = "stepper-adults-decrease-button"]');
    let adults = parseInt(document.querySelector('#stepper-adults-value').textContent, 10);
    const children = parseInt(document.querySelector('#stepper-children-value').textContent, 10);
    const infants = parseInt(document.querySelector('#stepper-infants-value').textContent, 10);
    const pets = parseInt(document.querySelector('#stepper-pets-value').textContent, 10);
    const sum = adults + children + infants + pets;
    const indicator = document.querySelector('#structured-search-input-field-guests-button > div > div:last-child');

    const decreaseButton = document.querySelector('[data-testid = "stepper-' + guest + '-decrease-button"]');
    const value = parseInt(document.querySelector('#stepper-' + guest + '-value').textContent);
    
    // 게스트 수 증감
    if (value === 0) {
        decreaseButton.disabled = true;
        decreaseButton.classList.add('cursor-not-allowed');
        decreaseButton.classList.add('font-grey-235');
        decreaseButton.classList.add('grey-border-235');
        decreaseButton.classList.remove('font-grey-106');
        decreaseButton.classList.remove('black-border-176');
        decreaseButton.classList.remove('hover-black-border-34');
        decreaseButton.classList.remove('hover-font-black-34');
    } else if (guest !== 'adults' && value === 1) {
        decreaseButton.disabled = false;
        decreaseButton.classList.remove('cursor-not-allowed');
        decreaseButton.classList.remove('font-grey-235');
        decreaseButton.classList.remove('grey-border-235');
        decreaseButton.classList.add('font-grey-106');
        decreaseButton.classList.add('black-border-176');
        decreaseButton.classList.add('hover-black-border-34');
        decreaseButton.classList.add('hover-font-black-34');
    } 
    
    if (adults === 0 && guest !== 'adults' && children + infants + pets > 0) {
        adults = 1;
        document.querySelector('#stepper-adults-value').textContent = adults;
        adultsDecreaseButton.disabled = true;
        console.log(decreaseButton);
        console.log(adultsDecreaseButton);
        adultsDecreaseButton.classList.add('cursor-not-allowed');
        adultsDecreaseButton.classList.add('font-grey-235');
        adultsDecreaseButton.classList.add('grey-border-235');
        adultsDecreaseButton.classList.remove('font-grey-106');
        adultsDecreaseButton.classList.remove('black-border-176');
        adultsDecreaseButton.classList.remove('hover-black-border-34');
        adultsDecreaseButton.classList.remove('hover-font-black-34');
    } else if (adults === 1) {
        if (children + infants + pets > 0) {
            adultsDecreaseButton.disabled = true;
            adultsDecreaseButton.classList.add('cursor-not-allowed');
            adultsDecreaseButton.classList.add('font-grey-235');
            adultsDecreaseButton.classList.add('grey-border-235');
            adultsDecreaseButton.classList.remove('font-grey-106');
            adultsDecreaseButton.classList.remove('black-border-176');
            adultsDecreaseButton.classList.remove('hover-black-border-34');
            adultsDecreaseButton.classList.remove('hover-font-black-34');
        } else {
            adultsDecreaseButton.disabled = false;
            adultsDecreaseButton.classList.remove('cursor-not-allowed');
            adultsDecreaseButton.classList.remove('font-grey-235');
            adultsDecreaseButton.classList.remove('grey-border-235');
            adultsDecreaseButton.classList.add('font-grey-106');
            adultsDecreaseButton.classList.add('black-border-176');
            adultsDecreaseButton.classList.add('hover-black-border-34');
            adultsDecreaseButton.classList.add('hover-font-black-34');
        }
    } else if (adults === 2) {
        adultsDecreaseButton.disabled = false;
        adultsDecreaseButton.classList.remove('cursor-not-allowed');
        adultsDecreaseButton.classList.remove('font-grey-235');
        adultsDecreaseButton.classList.remove('grey-border-235');
        adultsDecreaseButton.classList.add('font-grey-106');
        adultsDecreaseButton.classList.add('black-border-176');
        adultsDecreaseButton.classList.add('hover-black-border-34');
        adultsDecreaseButton.classList.add('hover-font-black-34');
    }

    // 게스트 종류 별 수 표시
    if (sum === 0) indicator.textContent = '게스트 추가';
    else {
        indicator.textContent = '게스트 ' + (adults + children) + '명';
        if (infants >= 1) indicator.textContent += ', 유아 ' + infants + '명';
        if (pets >= 1) indicator.textContent += ', 반려동물 ' + pets + '마리';
    }

    
}

// window.scrollTop의 위치에 따른 함수
function windowScrollTop() {
    const scrollTop = window.scrollY;
    const smallSearchbar = document.querySelector('div[data-searchbar-open]');
    const bigSearchbar = smallSearchbar.nextElementSibling;
    const headerDiv = document.querySelector('#js-application > div');
    const header = document.querySelector('header');
    const travelDetailsMenu = document.querySelector('#travel-details-menu');
    
    if (scrollTop === 0) {
        headerDiv.classList.remove('height-80');
        headerDiv.classList.remove('intrinsic-height-80');
        headerDiv.classList.add('height-168');
        headerDiv.classList.add('intrinsic-height-168');
        headerDiv.classList.add('header-parent-bottom-shadow');
        header.classList.remove('pa_opacity-10');
        header.classList.add('pa_opacity-0');
        header.classList.remove('pa_header-box-shadow');
        header.classList.remove('pa_header-after-transition-changed');
        header.classList.add('pa_header-after-transition-inital');
        header.classList.remove('pa_transform-initial');
        header.classList.add('pa_transform-scaleY-2-1point');
        bigSearchbar.classList.remove('opacity-0');
        bigSearchbar.classList.remove('visibility-hidden');
        bigSearchbar.classList.add('opacity-10');
        bigSearchbar.style.transform = 'scale(1, 1) translateY(0px)';
        smallSearchbar.classList.remove('opacity-10');
        smallSearchbar.classList.add('visibility-hidden');
        smallSearchbar.classList.add('opacity-0');
        smallSearchbar.style.transform = 'scale(2.44, 1.375) translateY(58px)';
        travelDetailsMenu.classList.remove('pa_travel-details-menu-shadow');
        smallSearchbar.setAttribute('data-searchbar-open', 'true');
    } else if (scrollTop !== 0 && smallSearchbar.getAttribute('data-searchbar-open') === 'false') {
        restoreInitialClasses();
        headerDiv.classList.remove('height-168');
        headerDiv.classList.remove('intrinsic-height-168');
        headerDiv.classList.add('height-80');
        headerDiv.classList.add('intrinsic-height-80');
        headerDiv.classList.remove('header-parent-bottom-shadow');
        header.classList.remove('pa_opacity-0');
        header.classList.add('pa_opacity-10');
        header.classList.add('pa_header-box-shadow');
        header.classList.remove('pa_header-after-transition-inital');
        header.classList.add('pa_header-after-transition-changed');
        header.classList.remove('pa_transform-scaleY-2-1point');
        header.classList.add('pa_transform-initial');
        bigSearchbar.classList.add('opacity-0');
        bigSearchbar.classList.add('visibility-hidden');
        bigSearchbar.classList.remove('opacity-10');
        bigSearchbar.style.transform = 'scale(0.41, 0.73) translateY(-58px)';
        smallSearchbar.classList.add('opacity-10');
        smallSearchbar.classList.remove('visibility-hidden');
        smallSearchbar.classList.remove('opacity-0');
        smallSearchbar.style.transform = 'scale(1, 1) translateY(0)';
        travelDetailsMenu.classList.add('pa_travel-details-menu-shadow');
    } else if (scrollTop !== 0 && smallSearchbar.getAttribute('data-searchbar-open') === 'true') {
        if(header.nextElementSibling !== null) header.nextElementSibling.remove();
        header.classList.remove('pa_transform-scaleY-2-1point');
        header.classList.add('pa_transform-initial');
        header.classList.remove('pa_header-after-transition-inital');
        header.classList.add('pa_header-after-transition-changed');
        smallSearchbar.setAttribute('data-searchbar-open', 'false');
    }
}

// little-searchbar의 버튼이 클릭됐을 때 big-searchbar 활성화
function activateLittleSearchbar() {
    const smallSearchbar = document.querySelector('div[data-searchbar-open]');
    const bigSearchbar = smallSearchbar.nextElementSibling;
    const headerDiv = document.querySelector('#js-application > div');
    const header = document.querySelector('header');
    const travelDetailsMenu = document.querySelector('#travel-details-menu')
    const div = document.createElement('div');
    const blackDiv = headerDiv.appendChild(div);
    smallSearchbar.setAttribute('data-searchbar-open', 'true');
    
    headerDiv.classList.remove('height-168');
    headerDiv.classList.remove('intrinsic-height-168');
    headerDiv.classList.add('height-80');
    headerDiv.classList.add('intrinsic-height-80');
    header.classList.remove('pa_transform-initial');
    header.classList.add('pa_transform-scaleY-2-1point');
    header.classList.remove('pa_header-after-transition-changed');
    header.classList.add('pa_header-after-transition-inital');
    bigSearchbar.classList.remove('opacity-0');
    bigSearchbar.classList.remove('visibility-hidden');
    bigSearchbar.classList.add('opacity-10');
    bigSearchbar.style.transform = 'scale(1, 1) translateY(0px)';
    smallSearchbar.classList.remove('opacity-10');
    smallSearchbar.classList.add('visibility-hidden');
    smallSearchbar.classList.add('opacity-0');
    smallSearchbar.style.transform = 'scale(2.44, 1.375) translateY(58px)';
    travelDetailsMenu.classList.remove('pa_travel-details-menu-shadow');
    blackDiv.classList.add('height-100vh');
    blackDiv.classList.add('top-0');
    blackDiv.classList.add('right-0');
    blackDiv.classList.add('bottom-0');
    blackDiv.classList.add('left-0');
    blackDiv.classList.add('fixed');
    blackDiv.classList.add('background-color-0-25');
    blackDiv.classList.add('z-index-99');
}

//activateLittleSearchBar()가 활성화된 상태에서 검은 배경화면 클릭 시
function detectBlackDivClicked(target) {
    const smallSearchbar = document.querySelector('div[data-searchbar-open]');
    const bigSearchbar = smallSearchbar.nextElementSibling;
    const headerDiv = document.querySelector('#js-application > div');
    const header = document.querySelector('header');
    const travelDetailsMenu = document.querySelector('#travel-details-menu');

    target.remove();
    smallSearchbar.setAttribute('data-searchbar-open', 'false');
    headerDiv.classList.remove('height-168');
    headerDiv.classList.remove('intrinsic-height-168');
    headerDiv.classList.add('height-80');
    headerDiv.classList.add('intrinsic-height-80');
    header.classList.remove('pa_opacity-0');
    header.classList.add('pa_opacity-10');
    header.classList.add('pa_header-box-shadow');
    header.classList.remove('pa_header-after-transition-inital');
    header.classList.add('pa_header-after-transition-changed');
    header.classList.remove('pa_transform-scaleY-2-1point');
    header.classList.add('pa_transform-initial');
    bigSearchbar.classList.add('opacity-0');
    bigSearchbar.classList.add('visibility-hidden');
    bigSearchbar.classList.remove('opacity-10');
    bigSearchbar.style.transform = 'scale(0.41, 0.73) translateY(-58px)';
    smallSearchbar.classList.add('opacity-10');
    smallSearchbar.classList.remove('visibility-hidden');
    smallSearchbar.classList.remove('opacity-0');
    smallSearchbar.style.transform = 'scale(1, 1) translateY(0)';
    travelDetailsMenu.classList.add('pa_travel-details-menu-shadow');
}

windowScrollTop();
storeInitialClasses();
// click 이벤트
application.addEventListener('click', function (event) {
    const target = event.target;
    const closestGuestButton = target.closest('button[data-testid*="stepper"]');
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
    // 카테고리 아이템 스크롤바의 왼쪽 스크롤
    else if (target.getAttribute('data-shared-element-id') === 'previous-button') {
        categoryItemLeftScroll();
    }
    // 카테고리 아이템 스크롤바의 오른쪽 스크롤
    else if (target.getAttribute('data-shared-element-id') === 'next-button') {
        categoryItemRightScroll();
    }
    //성인 게스트 수
    else if (closestGuestButton && closestGuestButton.getAttribute('data-testid') === 'stepper-adults-decrease-button') {
        let value = document.querySelector('#stepper-adults-value');
        value.textContent = parseInt(value.textContent) - 1;
        guestIndicator('adults');
    }
    else if (closestGuestButton && closestGuestButton.getAttribute('data-testid') === 'stepper-adults-increase-button') {
        let value = document.querySelector('#stepper-adults-value');
        value.textContent = parseInt(value.textContent) + 1; 
        guestIndicator('adults');
    }
    //어린이 게스트 수
    else if (closestGuestButton && closestGuestButton.getAttribute('data-testid') === 'stepper-children-decrease-button') {
        let value = document.querySelector('#stepper-children-value');
        value.textContent = parseInt(value.textContent) - 1;
        guestIndicator('children');
    }
    else if (closestGuestButton && closestGuestButton.getAttribute('data-testid') === 'stepper-children-increase-button') {
        let value = document.querySelector('#stepper-children-value');
        value.textContent = parseInt(value.textContent) + 1;
        guestIndicator('children');
    }
    //유아 게스트 수
    else if (closestGuestButton && closestGuestButton.getAttribute('data-testid') === 'stepper-infants-decrease-button') {
        let value = document.querySelector('#stepper-infants-value');
        value.textContent = parseInt(value.textContent) - 1;
        guestIndicator('infants');
    }
    else if (closestGuestButton && closestGuestButton.getAttribute('data-testid') === 'stepper-infants-increase-button') {
        let value = document.querySelector('#stepper-infants-value');
        value.textContent = parseInt(value.textContent) + 1;
        guestIndicator('infants');
    }
    //반려동물 게스트 수
    else if (closestGuestButton && closestGuestButton.getAttribute('data-testid') === 'stepper-pets-decrease-button') {
        let value = document.querySelector('#stepper-pets-value');
        value.textContent = parseInt(value.textContent) - 1;
        guestIndicator('pets');
    }
    else if (closestGuestButton && closestGuestButton.getAttribute('data-testid') === 'stepper-pets-increase-button') {
        let value = document.querySelector('#stepper-pets-value');
        value.textContent = parseInt(value.textContent) + 1;
        guestIndicator('pets');
    }

    else if (target.id === 'little-search-location' || target.closest('#little-search-location')) {
        const targetLabel = document.querySelector('label[for="' + "bigsearch-query-location-input" + '"]');
        activateLittleSearchbar();
        restoreInitialClasses();
        travelDestination(targetLabel);
        focusedToggleLayer(targetLabel);
        unfocusedToggleLayer(0);
    }
    else if (target.id === 'little-search-anytime' || target.closest('#little-search-anytime')) {
        const matchTarget = document.querySelector('#structured-search-input-field-split-dates-0');
        activateLittleSearchbar();
        restoreInitialClasses();
        checkIn(matchTarget);
        focusedToggleLayer(matchTarget);
        unfocusedToggleLayer(1);
    }
    else if (target.id === 'little-search-guests' || target.closest('#little-search-guests')) {
        const matchTarget = document.querySelector('#structured-search-input-field-guests-button');
        activateLittleSearchbar();
        restoreInitialClasses();
        traveler(matchTarget);
        focusedToggleLayer(matchTarget);
        unfocusedToggleLayer(3);
    }

    else if (target.classList.contains('background-color-0-25')) {
        detectBlackDivClicked(target);
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
category_item_scrollbar.addEventListener('scroll', function (event) {
    hiddenScrollButton(event);
})

window.addEventListener('scroll', function (event) {
    const target = event.target;
    windowScrollTop();
})




