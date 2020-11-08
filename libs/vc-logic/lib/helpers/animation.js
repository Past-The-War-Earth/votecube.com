import { create_bidirectional_transition } from 'svelte/internal';
export function transition(component, elementId, transitionFunction, options) {
    // setTimeout(() => {
    const domElementToTransition = document.getElementById(elementId);
    if (!domElementToTransition) {
        return;
    }
    const figureIntro = create_bidirectional_transition(domElementToTransition, transitionFunction, options, true);
    figureIntro.run(1);
    // })
}
//# sourceMappingURL=animation.js.map