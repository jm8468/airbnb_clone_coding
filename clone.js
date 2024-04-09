const tabsSeo = document.querySelectorAll('#tab-seo > button');
const tabsPlacesByAreasTabId = document.querySelectorAll('#tab-placesByAreasTabId > button')

function tabButton(event) {
    const button = event.target;
    const parentButton = button.parentElement.parentElement;
    const panels = parentButton.querySelectorAll('div[id^="panel"] > div');
    console.log(panels);
    
    // 선택한 aria-selected만 true가 되게 하는 기능
    tabsSeo.forEach(tab => {
        tab.setAttribute("aria-selected", "false");
    });
    button.setAttribute("aria-selected", "true");

    // aria-selected가 true인 버튼만 강조하는 기능
    tabsSeo.forEach((tab, index) => {
        if (tab.getAttribute("aria-selected") === "false") {
            tab.classList.remove("font-black");
            tab.classList.remove("selected-button-highlight");
            tab.classList.add("font-grey");
            panels[index].setAttribute("hidden", true);
        }
        else {
            tab.classList.remove("font-grey");
            tab.classList.add("font-black");
            tab.classList.add("selected-button-highlight");
            panels[index].removeAttribute("hidden");
        }
    });

}

tabsSeo.forEach(tab => {
    tab.addEventListener("click", tabButton)
});
tabsPlacesByAreasTabId.forEach(tab => {
    tab.addEventListener("click", tabButton)
});
