"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const internal_1 = require("svelte/internal");
const tokens_1 = require("./tokens");
class LogicUtils {
    copyProperties(from, to, properties) {
        for (const property of properties) {
            if (from[property] !== undefined) {
                to[property] = from[property];
            }
        }
    }
    getArrayValueTexts(arrayValue) {
        return arrayValue
            .map(value => value.text)
            .reduce((accumulator, text) => accumulator + (accumulator
            ? ', ' + text
            : text), '');
    }
    getColor(color) {
        if (!color) {
            return `FFF`;
        }
        const { blue, green, red } = color;
        return this.ensure2Digits(red.toString(16))
            + this.ensure2Digits(green.toString(16))
            + this.ensure2Digits(blue.toString(16));
    }
    getDate(date) {
        if (!date) {
            return 'N/A';
        }
        return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
    }
    getTextColor(color) {
        const red = parseInt(color.red);
        const green = parseInt(color.green);
        const blue = parseInt(color.blue);
        if (red + green + blue > 384) {
            return '000';
        }
        else if (red < 10 && blue < 10 && green >= 240) {
            return '000';
        }
        return 'FFF';
    }
    getVoteFactorNodesInValueOrder(vote) {
        if (!vote) {
            return [];
        }
        const node1 = {
            voteFactor: vote[1]
        };
        const node2 = {
            voteFactor: vote[2]
        };
        const node3 = {
            voteFactor: vote[3]
        };
        let headNode;
        if (vote[2].value >= vote[3].value) {
            node2.next = node3;
            headNode = node2;
        }
        else {
            node3.next = node2;
            headNode = node3;
        }
        if (headNode.voteFactor.value < vote[1].value) {
            node1.next = headNode;
            headNode = node1;
        }
        else if (headNode.next.voteFactor.value < vote[1].value) {
            const lastNode = headNode.next;
            headNode.next = node1;
            node1.next = lastNode;
        }
        else {
            headNode.next.next = node1;
        }
        return [
            headNode.voteFactor,
            headNode.next.voteFactor,
            headNode.next.next.voteFactor
        ];
    }
    overlay(from, to) {
        for (const propertyName in from) {
            if (to[propertyName] !== undefined) {
                const fromProperty = from[propertyName];
                if (fromProperty instanceof Object) {
                    this.overlay(fromProperty, to[propertyName]);
                }
            }
            else {
                to[propertyName] = from[propertyName];
            }
        }
    }
    setDeltas(from, to, delta, excludeKeys = ['createdAt', 'id', 'marks', 'path', 'userId']) {
        if (!from) {
            return;
        }
        for (const propertyName in from) {
            if (excludeKeys.indexOf(propertyName) > -1) {
                continue;
            }
            if (from[propertyName] instanceof Object) {
                this.setDeltas(from[propertyName], to[propertyName], delta[propertyName]);
            }
            else if (to[propertyName] !== from[propertyName]) {
                delta[propertyName] = true;
            }
        }
    }
    transition(elementId, transitionFunction, options) {
        setTimeout(() => {
            const domElementToTransition = document.getElementById(elementId);
            if (!domElementToTransition) {
                return;
            }
            const figureIntro = internal_1.create_bidirectional_transition(domElementToTransition, transitionFunction, options, true);
            figureIntro.run(1);
        });
    }
    ensure2Digits(colorString) {
        return colorString.length === 1 ? '0' + colorString : colorString;
    }
}
exports.LogicUtils = LogicUtils;
di_1.DI.set(tokens_1.LOGIC_UTILS, LogicUtils);
//# sourceMappingURL=LogicUtils.js.map