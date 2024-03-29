const tabsSeo = document.querySelectorAll('#tab-seo button');
const panelsSeo = document.querySelectorAll('#panel-seo div');

function tabSeoButton(event) {
    const button = event.target;
    // 선택한 aria-selected만 true가 되게 하는 기능
    tabsSeo.forEach(tab => {
        tab.setAttribute("aria-selected", "false");
    });
    button.setAttribute("aria-selected", "true");
    // aria-selected가 true인 버튼만 검은색 폰트 적용하는 기능
    tabsSeo.forEach((tab, index) => {
        if(tab !== button) {
            tab.classList.remove("font-black");
            tab.classList.add("font-grey");
            panelsSeo[index].setAttribute("hidden", true);
        }
        else {
            tab.classList.remove("font-grey");
            tab.classList.add("font-black");
            panelsSeo[index].removeAttribute("hidden");
        }
    });
    
}

tabsSeo.forEach(tabSeo => {
    tabSeo.addEventListener("click", tabSeoButton);
  });

