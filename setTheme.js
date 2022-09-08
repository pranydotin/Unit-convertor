const theme = document.querySelector(".mode");
const themeIcon = document.querySelector(".mode>i");

// setting theme based on system default theme
let themeMode = window.matchMedia("(prefers-color-scheme:dark)").matches
  ? "Dark Mode"
  : "Light Mode";
//default value of themeMode

/********************************************************************* */
window.addEventListener("load", () => {
  document.querySelector(".pre-loader").style.display = "none";
  setTheme();
  theme.addEventListener("click", setThemeMode);
});
/************************************************************************* */

function setTheme() {
  const body = document.querySelector("body");
  if (themeMode === "Dark Mode") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  changeThemeIcon();
}
function changeThemeIcon() {
  if (themeMode === "Light Mode") {
    themeIcon.classList.add("fa-moon");
    themeIcon.classList.remove("fa-sun");
  } else {
    themeIcon.classList.add("fa-sun");
    themeIcon.classList.remove("fa-moon");
  }

  themeIcon.classList.contains("fa-moon")
    ? theme.setAttribute("title", "Dark Mode")
    : theme.setAttribute("title", "Light Mode");
}

function setThemeMode() {
  theme.getAttribute("title") === "Dark Mode"
    ? theme.setAttribute("title", "Dark Mode")
    : theme.setAttribute("title", "Light Mode");
  themeMode = theme.getAttribute("title");
  setTheme();
}
