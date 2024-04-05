const tabsSeo = document.querySelectorAll('#tab-seo button');
const mapImgPressEffects = document.querySelectorAll('.press-effect')

function tabSeoButton(event) {
    const panelsSeo = document.querySelectorAll('#panel-seo div');
    const button = event.target;
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
            panelsSeo[index].setAttribute("hidden", true);
        }
        else {
            tab.classList.remove("font-grey");
            tab.classList.add("font-black");
            tab.classList.add("selected-button-highlight");
            panelsSeo[index].removeAttribute("hidden");
        }
    });

}

// 마우스 이벤트에 따라 세계지도 크기를 바꾸는 애니메이션 효과
function addMapImgEffect(event) {
    event = event.currentTarget;
    event.classList.add('scale-90percent');
}
function removeMapImgEffect(event) {
    event = event.currentTarget;
    event.classList.remove('scale-90percent');
}

tabsSeo.forEach(tabSeo => {
    tabSeo.addEventListener("click", tabSeoButton);
});
mapImgPressEffects.forEach(effect => {
    effect.addEventListener("mousedown", addMapImgEffect);
});
mapImgPressEffects.forEach(effect => {
    effect.addEventListener("mouseup", removeMapImgEffect);
});
mapImgPressEffects.forEach(effect => {
    effect.addEventListener("mouseleave", removeMapImgEffect);
});
