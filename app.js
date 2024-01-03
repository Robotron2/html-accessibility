// When I click the menu trigger the menu should appear
function app() {
	const menuTrigger = document.querySelector("#profile-menu")
	const menu = document.querySelector("#profile-menu-content")
	menuTrigger.addEventListener("click", function () {
		const allMenuItems = document.querySelectorAll('[role="menuitem"]')
		console.log(allMenuItems)
		const isExpanded = menuTrigger.attributes["aria-expanded"].value == "true"
		menu.classList.toggle("menu-active")
		if (isExpanded) {
			menuTrigger.ariaExpanded = "false"
			menuTrigger.focus()
		} else {
			menuTrigger.ariaExpanded = "true"
			allMenuItems.item(0).focus()
		}
	})
}
app()
