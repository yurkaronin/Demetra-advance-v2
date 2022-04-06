if (document.querySelectorAll("#js-price-section")) {
  const tabsBtn = document.querySelectorAll(".tabs__buttons");
  const tabsItems = document.querySelectorAll(".custom-price__tabs-item");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('active');
        });

        tabsItems.forEach(function (item) {
          item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }
}

if (document.querySelectorAll("#js-cabinet-tabs")) {
  const tabsBtn = document.querySelectorAll(".cabinet-tabs__navigation-link");
  const tabsItems = document.querySelectorAll(".cabinet-tabs__tab-details");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('active');
        });

        tabsItems.forEach(function (item) {
          item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }
}