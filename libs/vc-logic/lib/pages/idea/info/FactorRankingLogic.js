var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { cardMove } from '@votecube/ui-logic';
import { fly } from 'svelte/transition';
import { Injected } from '@airport/direction-indicator';
let FactorRankingLogic = class FactorRankingLogic {
    getFactorInfoAtCoords(x, y, factorNumberToExclude) {
        if (!x || !y) {
            return null;
        }
        let nodes;
        const msDoc = document;
        if (msDoc.msElementsFromPoint) {
            nodes = msDoc.msElementsFromPoint(x, y);
        }
        else {
            nodes = document.elementsFromPoint(x, y);
        }
        if (!nodes || !nodes.forEach) {
            return null;
        }
        let matchingFactorInfo = null;
        nodes.forEach(node => {
            const factorInfo = this.getFactorInfo(node);
            if (!matchingFactorInfo && factorInfo
                && factorInfo.factorNumber !== factorNumberToExclude) {
                matchingFactorInfo = factorInfo;
            }
        });
        return matchingFactorInfo;
    }
    getInElementOffset(event) {
        // event (directly for mouse/via touches[0] for touch)
        // 	pageX/Y gives the cursor position on screen at mouse/touchDown
        const cursorPositionX = event.pageX;
        const cursorPositionY = event.pageY;
        const factorInfoAtCoords = this.getFactorInfoAtCoords(cursorPositionX, cursorPositionY, -1);
        if (!factorInfoAtCoords) {
            return null;
        }
        // target (directly on event for mouse/via touches[0].target for touch)
        // 	has the information for the top left corner of the element:
        const boundingClientRect = event.target.getBoundingClientRect();
        const elemTopLeftCornerX = boundingClientRect.left;
        const elemTopLeftCornerY = boundingClientRect.top;
        // factorPosition places the element based on the top left corner
        // so need to know the offset by which to move the picture to top and left:
        return {
            topLeft: {
                x: elemTopLeftCornerX,
                y: elemTopLeftCornerY
            },
            x: cursorPositionX - elemTopLeftCornerX,
            y: cursorPositionY - elemTopLeftCornerY
        };
        // Whereever the cursor is at we need to substract the offsets from it
        // to show the element.
    }
    getAlternateIndex(absDy, dy, originalIndex, have3) {
        switch (originalIndex) {
            case 0: {
                if (dy > 0) {
                    if (absDy < 200) {
                        return 1;
                    }
                    else {
                        return have3 ? 2 : 1;
                    }
                }
                break;
            }
            case 1: {
                if (dy > 0) {
                    return 2;
                }
                else {
                    return 0;
                }
            }
            case 2: {
                if (dy < 0) {
                    if (absDy < 200) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
                break;
            }
        }
        return originalIndex;
    }
    addOrRemoveAFactor(agreementFactors, index, addOrRemove, agreement, logicUtils) {
        const [_, secondFactor, thirdFactor] = agreementFactors;
        let numMoved = 0;
        let placeholder = false;
        if (index === 0) {
            if (
            // Cannot add the first factor
            addOrRemove === 'add'
                // Cannot remove the first factor if there are no other factors
                || (!secondFactor.outcome && !thirdFactor.outcome)) {
                return {
                    numMoved,
                    placeholder
                };
            }
            placeholder = true;
            // scheduleFactorPlaceholder()
            agreement.changeMillis = 550;
            // Remove first factor
            this.removeFirstFactor(agreementFactors, agreement, !!thirdFactor.outcome, logicUtils);
            return {
                numMoved: 1,
                placeholder
            };
        }
        numMoved = 1;
        const outcome = agreementFactors[index].outcome;
        if (addOrRemove === 'remove') {
            // remove
            if (!outcome) {
                // Don't remove if it's already removed
                return {
                    numMoved: 0,
                    placeholder,
                };
            }
            agreement.changeMillis = 550;
            placeholder = true;
            // scheduleFactorPlaceholder(index, direction)
            if (index === 1 && thirdFactor.outcome) {
                this.onMove(1, [2, 1]);
                this.swapOnRemove(
                // agreementFactors,
                agreement, secondFactor, thirdFactor, null, 2, logicUtils);
                this.moveUpOne(1, logicUtils);
            }
            else {
                this.setOutcome(agreementFactors, index, null);
                this.adjustRanking(agreementFactors, index, null);
            }
        }
        else {
            // add
            if (outcome) {
                // Don't add if it's already added
                return {
                    numMoved: 0,
                    placeholder
                };
            }
            agreement.changeMillis = 550;
            if (index === 2 && !secondFactor.outcome) {
                this.setOutcome(agreementFactors, 1, 'A');
                this.adjustRanking(agreementFactors, 1, 'A');
                numMoved = 2;
            }
            this.setOutcome(agreementFactors, index, 'A');
            this.adjustRanking(agreementFactors, index, 'A');
        }
        return {
            numMoved,
            placeholder
        };
    }
    move(index, options, logicUtils) {
        logicUtils.transition('factor_' + index, fly, options);
    }
    moveFactorDown(agreementFactors, agreement, originalIndex, newIndex, logicUtils) {
        switch (originalIndex) {
            // Started the move from 1st Factor
            case 0: {
                if (newIndex === 1) {
                    this.onMove(1, [0, 1]);
                    agreement.changeMillis = 200;
                    this.setFactorOrder(agreementFactors, originalIndex, -1, agreement, logicUtils);
                    this.moveUpOne(0, logicUtils);
                }
                else {
                    this.onMove(2, [0, 2]);
                    agreement.changeMillis = 600;
                    this.setFactorOrder(agreementFactors, originalIndex, -1, agreement, logicUtils, agreementFactors[0], agreementFactors[2], 0);
                    this.moveUpTwo(0, logicUtils);
                }
                return true;
            }
            // Started the move from 2nd Factor
            case 1: {
                this.onMove(1, [1, 2]);
                agreement.changeMillis = 200;
                this.setFactorOrder(agreementFactors, originalIndex, -1, agreement, logicUtils);
                this.moveUpOne(1, logicUtils);
                return true;
            }
            // Started the move from 3rd Factor
            // case 2: {
            // Not possible, nothing to do
            // return
            // }
        }
        return false;
    }
    moveFactorUp(agreementFactors, agreement, originalIndex, newIndex, logicUtils) {
        switch (originalIndex) {
            // Started the move from 1st Factor
            // case 0: {
            // 	// Not possible, nothing to do
            // 	return
            // }
            // Started the move from 2nd Factor
            case 1: {
                this.onMove(1, [1, 0]);
                agreement.changeMillis = 200;
                this.setFactorOrder(agreementFactors, originalIndex, 1, agreement, logicUtils);
                this.moveDownOne(1, logicUtils);
                return true;
            }
            // Started the move from 3rd Factor
            case 2: {
                if (newIndex === 1) {
                    this.onMove(1, [2, 1]);
                    agreement.changeMillis = 200;
                    this.setFactorOrder(agreementFactors, originalIndex, 1, agreement, logicUtils);
                    this.moveDownOne(2, logicUtils);
                }
                else {
                    this.onMove(2, [2, 0]);
                    agreement.changeMillis = 600;
                    this.setFactorOrder(agreementFactors, originalIndex, 1, agreement, logicUtils, agreementFactors[0], agreementFactors[2], 0);
                    this.moveDownTwo(2, logicUtils);
                }
                return true;
            }
        }
        return false;
    }
    setOutcome(agreementFactors, index, outcome) {
        agreementFactors[index].outcome = outcome;
        // if (adjustRanking) {
        // 	dispatch('rankingAdjusted')
        // }
    }
    adjustRanking(agreementFactors, index, outcome) {
        const [firstAgreementFactor, secondAgreementFactor, thirdAgreementFactor] = agreementFactors;
        switch (index) {
            case 0: {
                // firstFactor.dir = dir
                // Don't have to worry about dir === 0 - 1st factor cannot have it as such
                if (
                // If there the 1st factor is present in agreement
                this.factorsAt(100, 0, 0, agreementFactors)
                    // Or its another standard distribution
                    || this.factorsAt(66, 34, 0, agreementFactors)
                    || this.factorsAt(55, 30, 15, agreementFactors)) {
                    // Nothing to do, just change direction
                }
                else {
                    // set default distribution
                    firstAgreementFactor.value = 55;
                    secondAgreementFactor.value = 30;
                    thirdAgreementFactor.value = 15;
                }
                break;
            }
            case 1: {
                // secondFactor.dir = dir
                // If the 2nd factor is being removed from the agreement
                if (!outcome) {
                    firstAgreementFactor.value = 100;
                    secondAgreementFactor.value = 0;
                    thirdAgreementFactor.value = 0;
                    // thirdFactor.dir    = 0
                    break;
                }
                // Otherwise the 2nd factor is now present in the agreement
                if (this.factorsAt(55, 30, 15, agreementFactors)
                    || this.factorsAt(66, 34, 0, agreementFactors)) {
                    // Factors are already at reserved values, no need to adjust values
                }
                else if (this.factorsAt(100, 0, 0, agreementFactors)) {
                    // Add the second factor
                    firstAgreementFactor.value = 66;
                    secondAgreementFactor.value = 34;
                }
                else {
                    // set default distribution
                    firstAgreementFactor.value = 55;
                    secondAgreementFactor.value = 30;
                    thirdAgreementFactor.value = 15;
                }
                break;
            }
            case 2: {
                // If the 3rd factor is being removed from the agreement
                if (!outcome) {
                    firstAgreementFactor.value = 66;
                    secondAgreementFactor.value = 34;
                    thirdAgreementFactor.value = 0;
                    break;
                }
                // Otherwise the 3rd factor is now present in the agreement
                if (this.factorsAt(55, 30, 15, agreementFactors)) {
                    // Factors are already at reserved values, no need to adjust values
                }
                else {
                    // set default distribution
                    firstAgreementFactor.value = 55;
                    secondAgreementFactor.value = 30;
                    thirdAgreementFactor.value = 15;
                }
                break;
            }
            default:
                return false;
        }
        return true;
        // if (doAdjust) {
        // 	dispatch('rankingAdjusted')
        // }
    }
    swapOnRemove(
    // agreementFactors,
    agreement, removedFactor, movedFactor1, movedFactor2, adjustRankingIndex, logicUtils) {
        if (movedFactor2) {
            movedFactor2.value = movedFactor1.value;
        }
        movedFactor1.value = removedFactor.value;
        removedFactor.value = 0;
        removedFactor.outcome = null;
        // page.set({factorOrderDelta: page.get().factorOrderDelta + 1})
        if (!adjustRankingIndex) {
            adjustRankingIndex = movedFactor2 ? 2 : 1;
        }
        this.adjustRanking(logicUtils.getAgreementFactorNodesInValueOrder(agreement), adjustRankingIndex, null);
    }
    removeFirstFactor(agreementFactors, agreement, move3, logicUtils) {
        if (move3) {
            this.onMove(1, [2, 1, 0]);
        }
        else {
            this.onMove(1, [1, 0]);
        }
        const [firstFactor, secondFactor, thirdFactor] = agreementFactors;
        this.swapOnRemove(
        // agreementFactors,
        agreement, firstFactor, secondFactor, move3 ? thirdFactor : null, 0, logicUtils);
        if (move3) {
            this.moveUpOne(1, logicUtils);
        }
        this.moveUpOne(0, logicUtils);
    }
    setFactorOrder(agreementFactors, index, delta, agreement, logicUtils, oldHigherFactor, oldLowerFactor, deltaIndex) {
        const [firstAgreementFactor, secondAgreementFactor, thirdAgreementFactor] = agreementFactors;
        let oldHigherOutcome;
        let oldHigherValue;
        if (!oldHigherFactor) {
            switch (index) {
                case 0: {
                    // Only Down arrow can be pressed, no need to check delta
                    deltaIndex = 0;
                    oldHigherFactor = firstAgreementFactor;
                    oldLowerFactor = secondAgreementFactor;
                    break;
                }
                case 1: {
                    if (delta > 0) {
                        deltaIndex = 0;
                        oldHigherFactor = firstAgreementFactor;
                        oldLowerFactor = secondAgreementFactor;
                    }
                    else {
                        deltaIndex = 1;
                        oldHigherFactor = secondAgreementFactor;
                        oldLowerFactor = thirdAgreementFactor;
                    }
                    break;
                }
                case 2: {
                    // Only Up arrow can be pressed, no need to check delta
                    deltaIndex = 1;
                    oldHigherFactor = secondAgreementFactor;
                    oldLowerFactor = thirdAgreementFactor;
                    break;
                }
            }
        }
        oldHigherOutcome = oldHigherFactor.outcome;
        oldHigherValue = oldHigherFactor.value;
        oldHigherFactor.value = oldLowerFactor.value;
        oldLowerFactor.value = oldHigherValue;
        // page.set({factorOrderDelta: page.get().factorOrderDelta + 1})
        return this.adjustRanking(logicUtils.getAgreementFactorNodesInValueOrder(agreement), deltaIndex, oldHigherOutcome);
    }
    onMove(move, moved) {
        cardMove.set({
            move,
            moved
        });
    }
    moveDownOne(index, logicUtils, duration = 400) {
        this.move(index, { y: -100, duration }, logicUtils);
    }
    moveDownTwo(index, logicUtils) {
        this.move(index, { y: -200, duration: 800 }, logicUtils);
    }
    moveUpOne(index, logicUtils, duration = 400) {
        this.move(index, { y: 100, duration }, logicUtils);
    }
    moveUpTwo(index, logicUtils) {
        this.move(index, { y: 200, duration: 800 }, logicUtils);
    }
    factorsAt(firstFactorValue, secondFactorValue, thirdFactorValue, agreementFactors) {
        return agreementFactors[0].value === firstFactorValue
            && agreementFactors[1].value === secondFactorValue
            && agreementFactors[2].value === thirdFactorValue;
    }
    getFactorInfo(node) {
        if (!node) {
            return null;
        }
        while (node.getAttribute
            && !node.getAttribute('factorNumber')
            && node.parentNode) {
            node = node.parentNode;
        }
        if (node.getAttribute
            && node.getAttribute('factorNumber')) {
            return {
                factorNumber: parseInt(node.getAttribute('factorNumber')),
                factorTd: node
            };
        }
        return null;
    }
};
FactorRankingLogic = __decorate([
    Injected()
], FactorRankingLogic);
export { FactorRankingLogic };
//# sourceMappingURL=FactorRankingLogic.js.map