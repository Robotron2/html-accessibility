// When I click the menu trigger the menu should appear
function app() {
	const menuTrigger = document.querySelector("#profile-menu")
	const menu = document.querySelector("#profile-menu-content")
	menuTrigger.addEventListener("click", function () {
		const isExpanded = menuTrigger.attributes["aria-expanded"].value == "true"
		menu.classList.toggle("menu-active")
		if (isExpanded) {
			menuTrigger.ariaExpanded = "false"
		} else {
			menuTrigger.ariaExpanded = "true"
		}
	})
	console.log(menu)
}
app()
