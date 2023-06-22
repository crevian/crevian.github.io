let activePage = "skills";

function hide(id) {
  $("#" + id).style.display = "none";
}

function show(id) {
  const page = $(`#${id}`);
  page.style.display = "block";
}

function $(selector) {
  return document.querySelector(selector);
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("languages");
  hide("projects");
}

function displayPage(id) {
  hide(activePage);

  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  show(id);
  activePage = id;

  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
}

function clickOnMenu(e) {
  if (e.target.matches("a")) {
    const id = e.target.dataset.page;
    if (id) {
      displayPage(id);
    } else {
      console.warn('please use <a data-page="pageid"');
    }
  }
}

function showSkillsList(skills) {
  var ul = $("#skills ul");

  skills.sort((a, b) => b.endorcements - a.endorcements);

  var skillsHTML = skills.map((skill) => {
    var className = skill.favorite ? "favorite" : "";
    return `<li class = "${className}">${skill.name} <span>- ${skill.endorcements} </span></li>`;
  });
  ul.innerHTML = skillsHTML.join("");
}

function getSkillsRequest() {
  fetch("skills.json")
    .then((r) => r.json())
    .then(showSkillsList);
}

function initEvents() {
  $("#top-menu-bar").addEventListener("click", clickOnMenu);
}

displayPage(activePage);
initEvents();
getSkillsRequest();
