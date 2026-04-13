const tabsPanel = document.getElementById("tab-panel");
tabsPanel.addEventListener('click', onTabClick, false);

function onTabClick(e){
    let activeTabs = document.querySelectorAll(".active");
    activeTabs.forEach((tab) => {
        tab.className = tab.className.replace('active', " ");
    });
    e.target.className += ' active';
    let tabId = e.target.href.split("#")[1];
    document.getElementById(tabId).className += ' active'
}