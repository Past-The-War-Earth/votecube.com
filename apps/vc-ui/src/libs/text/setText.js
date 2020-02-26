import {text} from '@votecube/public-logic'
import {get}  from 'svelte/store'

export function setText(
	textString
) {
	text.set({
		...JSON.parse(textString),
		...get(text)
	})
}