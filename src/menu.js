const loadMenu = (container) => {
  const page = document.createElement("main");
  page.className = "page";

  const title = document.createElement("h1");
  title.textContent = "Our Menu";
  page.append(title);

  const menuItems = [
    ["Roasted garden vegetables", "Herbs, whipped feta, and toasted seeds", "$12"],
    ["Hearth-baked chicken", "Root vegetables, pan jus, and sourdough", "$24"],
    ["Harvest mushroom risotto", "Local mushrooms, parmesan, and fresh thyme", "$21"],
    ["Honey pear tart", "Vanilla cream and cinnamon oat crumble", "$9"],
  ];

  const list = document.createElement("div");
  list.className = "menu-list";
  menuItems.forEach(([name, description, price]) => {
    const item = document.createElement("article");
    item.className = "menu-item";
    item.innerHTML = `<div><h2>${name}</h2><p>${description}</p></div><strong>${price}</strong>`;
    list.append(item);
  });

  page.append(list);
  container.append(page);
};

export default loadMenu;
