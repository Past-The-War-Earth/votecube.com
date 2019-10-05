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
	const figure_intro = wrapTransition(
		component, domElementToTransition, transitionFunction, options, true)
	figure_intro.run(1)
	// })
}