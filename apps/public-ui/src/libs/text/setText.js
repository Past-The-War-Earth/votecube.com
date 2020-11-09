import {text} from '@votecube/vc-logic'
import {get}  from 'svelte/store'

export function setText(
	textString
) {
	text.set({
		...JSON.parse(textString),
		...get(text)
	})
}
