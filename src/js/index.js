const changeThemeButton = document.getElementById("change-theme-button");

const body = document.querySelector("body");

const buttonImageChangeTheme = document.querySelector(".image-button");

changeThemeButton.addEventListener("click", () => {
  const darkModeOn = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkModeOn)
    buttonImageChangeTheme.setAttribute("src", "./src/images/sun.png");
  else 
    buttonImageChangeTheme.setAttribute("src", "./src/images/moon.png");
});
