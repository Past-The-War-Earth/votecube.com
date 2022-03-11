import { DI } from '@airport/di';
import { create_bidirectional_transition } from 'svelte/internal';
import { LOGIC_UTILS } from './tokens';
export class LogicUtils {
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
    getAgreementFactorNodesInValueOrder(agreement) {
        if (!agreement) {
            return [];
        }
        const node1 = {
            agreementFactor: agreement[1]
        };
        const node2 = {
            agreementFactor: agreement[2]
        };
        const node3 = {
            agreementFactor: agreement[3]
        };
        let headNode;
        if (agreement[2].value >= agreement[3].value) {
            node2.next = node3;
            headNode = node2;
        }
        else {
            node3.next = node2;
            headNode = node3;
        }
        if (headNode.agreementFactor.value < agreement[1].value) {
            node1.next = headNode;
            headNode = node1;
        }
        else if (headNode.next.agreementFactor.value < agreement[1].value) {
            const lastNode = headNode.next;
            headNode.next = node1;
            node1.next = lastNode;
        }
        else {
            headNode.next.next = node1;
        }
        return [
            headNode.agreementFactor,
            headNode.next.agreementFactor,
            headNode.next.next.agreementFactor
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
    isDifferent(original, changed, excludeKeys = ['createdAt', 'id', 'marks', 'path', 'userId']) {
        if (!original) {
            return true;
        }
        let isDifferent = false;
        for (const propertyName in original) {
            if (excludeKeys.indexOf(propertyName) > -1) {
                continue;
            }
            if (original[propertyName] instanceof Object) {
                isDifferent = this.isDifferent(original[propertyName], changed[propertyName], excludeKeys);
            }
            else if (changed[propertyName] !== original[propertyName]) {
                return true;
            }
            if (isDifferent) {
                return true;
            }
        }
    }
    transition(elementId, transitionFunction, options) {
        setTimeout(() => {
            const domElementToTransition = document.getElementById(elementId);
            if (!domElementToTransition) {
                return;
            }
            const figureIntro = create_bidirectional_transition(domElementToTransition, transitionFunction, options, true);
            figureIntro.run(1);
        });
    }
    ensure2Digits(colorString) {
        return colorString.length === 1 ? '0' + colorString : colorString;
    }
}
DI.set(LOGIC_UTILS, LogicUtils);
//# sourceMappingURL=LogicUtils.js.map