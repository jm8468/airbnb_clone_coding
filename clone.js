const tabsSeo = document.querySelectorAll('#tab-seo button');
const panelsSeo = document.querySelectorAll('#panel-seo div');

function tabSeoButton(event) {
    const button = event.target;

    // 선택한 aria-selected만 true가 되게 하는 기능
    tabsSeo.forEach(tab => {
        tab.setAttribute("aria-selected", "false");
    });
    button.setAttribute("aria-selected", "true");
    console.log(button);
    // aria-selected가 true인 버튼만 검은색 폰트 적용하는 기능
    tabsSeo.forEach(tab => {
        if(tab !== button) {
            tab.classList.remove("font-black");
            tab.classList.add("font-grey");
            
        }
        else {
            tab.classList.remove("font-grey");
            tab.classList.add("font-black");
        }
    });
    
}

tabsSeo.forEach(tabSeo => {
    tabSeo.addEventListener("click", tabSeoButton);
  });