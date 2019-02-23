import {Store} from 'svelte/store.js';

class VCStore
	extends Store {

	toggleMainMenu() {
		const showMainMenu = !this.get().showMainMenu
		this.set({showMainMenu})
	}

	toggleTopMenu() {
		const showTopMenu = !this.get().showTopMenu
		this.set({showTopMenu})
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

export default new VCStore({
	showMainMenu: false,
	showTopMenu: false,
	textToast: {}
});