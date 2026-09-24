const createElement = (tag, text, className) => {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (className) element.className = className;
  return element;
};

const loadHome = (container) => {
  const page = createElement("main", null, "page home-page");
  page.append(
    createElement("p", "Seasonal cooking since 1987", "eyebrow"),
    createElement("h1", "Good food, gathered around the table.", "page-title"),
    createElement(
      "p",
      "Hearth & Harvest brings local ingredients, warm hospitality, and the comfort of a meal made with care to every plate.",
      "page-copy",
    ),
    createElement("button", "Explore our menu", "call-to-action"),
  );
  container.append(page);
};

export default loadHome;
