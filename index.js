var activePage = "home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  var page = document.getElementById(id);
  page.style.display = "block";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("languages");
  hide("projects");
}

function displayPage(id) {
  hide(activePage);
  document
    .querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    .classList.remove("active");
  show(id);
  activePage = id;
  console.warn(id, `#top-menu-bar a[data-page="${id}"]`);
  console.warn(document.querySelector(`#top-menu-bar a[data-page="${id}"]`));

  document
    .querySelector(`#top-menu-bar a[data-page="${id}"]`)
    .classList.add("active");
}

displayPage(activePage);
