const tabsSeo = document.querySelectorAll('#tab-seo button');
let experiences = document.querySelectorAll('.experience-button');
let experiencesDiv = document.querySelectorAll('.experience-button > div');
experiences = Array.from(experiences).slice(0, 2);

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

function highlightToggle(event) {
    const btn = event.target;
}

tabsSeo.forEach(tabSeo => {
    tabSeo.addEventListener("click", tabSeoButton);
});
experiences.forEach(experience => {
    experience.addEventListener("click", highlightToggle);
});

