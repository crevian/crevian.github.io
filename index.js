var activePage = "skills";

function hide(id) {
  $("#" + id).style.display = "none";
}

function show(id) {
  var page = $(`#${id}`);
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
    var id = e.target.datasets.page;
    if (id) {
      displayPage(id);
    } else {
      console.warn('please use <a data-page="pageid"');
    }
  }
}

function showSkillsList() {
  var skills = [
    { name: "HTML", favorite: true },
    { name: "CSS" },
    { name: "JS", favorite: true },
  ];

  var ul = $("#skills ul");

  var skillsHTML = skills.map(function (skill) {
    var className = skill.favorite ? "favorite" : "";
    return `<li class = "${className}">${skill.name}</li>`;
  });

  ul.innerHTML = skillsHTML.join("");
}

displayPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
showSkillsList();
