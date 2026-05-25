  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function alterEgosDrop() {
  document.getElementById("alterEgoesDropdown").classList.toggle("show");
  document.querySelector(".The-Alteregoes-Dropdown-Btn").textContent = "The Alteregoes ▲";
  play("https://www.myinstants.com/media/sounds/we-are-venom.mp3")
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.The-Alteregoes-Dropdown-Btn')) {
    var dropdowns = document.getElementsByClassName("The-Alteregoes-Dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
