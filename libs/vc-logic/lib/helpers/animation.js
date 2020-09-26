"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("svelte/internal");
function transition(component, elementId, transitionFunction, options) {
    // setTimeout(() => {
    const domElementToTransition = document.getElementById(elementId);
    if (!domElementToTransition) {
        return;
    }
    const figureIntro = internal_1.create_bidirectional_transition(domElementToTransition, transitionFunction, options, true);
    figureIntro.run(1);
    // })
}
exports.transition = transition;
//# sourceMappingURL=animation.js.map