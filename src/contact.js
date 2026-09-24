const loadContact = (container) => {
  const page = document.createElement("main");
  page.className = "page contact-page";

  const title = document.createElement("h1");
  title.textContent = "Come say hello";
  page.append(title);

  const details = document.createElement("div");
  details.className = "contact-details";
  details.innerHTML = `
    <p><strong>Address</strong><br />42 Orchard Lane<br />Briarwood, WV 25001</p>
    <p><strong>Hours</strong><br />Tuesday–Saturday, 5–10 PM<br />Sunday brunch, 10 AM–2 PM</p>
    <p><strong>Reservations</strong><br /><a href="tel:+13045550198">(304) 555-0198</a></p>
  `;
  page.append(details);
  container.append(page);
};

export default loadContact;
