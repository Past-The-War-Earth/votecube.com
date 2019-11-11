import {Store} from 'svelte/store.js'

class VCStore
	extends Store {

	toggleMainMenu() {
		const showMainMenu = !this.get().showMainMenu
		this.set({showMainMenu})
	}

	toggleTopMenu(
		topMenuShown = !this.get().topMenuShown
	) {
		this.set({topMenuShown})
	}

	setTextToast(
		text,
		seconds = 3
	) {
		const textToast = {
			seconds,
			text,
			time: new Date().getTime()

		}
		this.set({
			textToast
		})
		this.fire('setTextToast', {textToast})
	}

}

var vcStore = new VCStore({
	showMainMenu: false,
	textToast: {},
	topMenuShown: false
})

vcStore.compute(
	'showTopMenu',
	['showMainMenu', 'topMenuShown'],
	(
		showMainMenu,
		topMenuShown
	) => !showMainMenu && topMenuShown
)

export default vcStore