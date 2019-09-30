import {IFieldGroup} from '@votecube/forms'
import {
	derived,
	writable
}                    from 'svelte/store'


export const checkSizeIntervalId = writable(null)
export const currentPage         = writable(null)
export const emInPx              = writable(12)
export const form                = writable(null as IFieldGroup)
export const isDesktop           = writable(false)
export const PageComp            = writable(null)
export const pageTitle           = writable('VOTECUBE')
export const portalHeight        = writable(400)
export const resized             = writable(false)
export const routeParams         = writable(null)
export const showMainMenu        = writable(false)
export const topMenuShown        = writable(true)
export const verticalLayout      = writable(true)
export const windowWidth         = writable(320)

export const showTopMenu = derived([
		showMainMenu,
		topMenuShown
	], ([
		    $showMainMenu,
		    $topMenuShown
	    ]) => !$showMainMenu && $topMenuShown
)

export interface ITextToast {
	seconds: number
	text: string
	time: number
}

function createTextToast() {
	const {subscribe, set} = writable(null as ITextToast)

	return {
		set: (
			text,
			seconds = 3
		) => set({
			seconds,
			text,
			time: new Date().getTime()
		}),
		subscribe
	}
}

export const textToast = createTextToast()

/*
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
*/
