import {wrapTransition} from 'svelte/shared'

export function transition(
	component,
	elementId,
	transitionFunction,
	options
) {
	// setTimeout(() => {
	const domElementToTransition = document.getElementById(elementId)
	if (!domElementToTransition) {
		return
	}
	const figureIntro = wrapTransition(
		component, domElementToTransition, transitionFunction, options, true)
	figureIntro.run(1)
	// })
}
