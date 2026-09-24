import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.querySelector("#content");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabs = { home: loadHome, menu: loadMenu, contact: loadContact };

const switchTab = (tabName) => {
  content.replaceChildren();
  tabs[tabName](content);

  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

switchTab("home");
