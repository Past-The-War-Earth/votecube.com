import { container, DI } from '@airport/di';
import { CUBE_DIRECTION, CUBE_EVENT_LISTENER, CUBE_MOVEMENT, CUBE_UTILS, EVENT_LISTENER_MAP, MUTATION_API, VIEWPORT } from '../tokens';
import { Bool, Move } from './CubeMovement';
export const TOUCH = document.ontouchmove !== undefined;
export class CubeEventListener {
    constructor() {
        this.lastMove = 0;
        this.suspended = false;
    }
    addCubeAdjustment() {
        if (this.suspended) {
            return;
        }
        // let moveSpeed = 256
        if (this.dLM) {
            this.addCubeAdjustmentToELM(this.dLM);
        }
        else {
            const eventListenerMap = container(this).getSync(EVENT_LISTENER_MAP);
            this.dLM = eventListenerMap.ad(document);
            this.addCubeAdjustmentToELM(this.dLM);
        }
    }
    addCubeAdjustmentToELM(eventListenerMap) {
        eventListenerMap.ad('keydown', ev => {
            if (this.suspended) {
                return;
            }
            const [cubeUtils, viewport] = container(this).getSync(CUBE_UTILS, VIEWPORT);
            this.rmMmTm();
            switch (ev.keyCode) {
                case 37: // left
                    viewport.move(Bool.False, Move.None, Bool.True, Move.Down);
                    break;
                case 38: // up
                    // prevent default
                    cubeUtils.pD(ev);
                    viewport.move(Bool.True, Move.Up);
                    break;
                case 39: // right
                    viewport.move(Bool.False, Move.None, Bool.True, Move.Up);
                    break;
                case 40: // down
                    // prevent default
                    cubeUtils.pD(ev);
                    viewport.move(Bool.True, Move.Down);
                    break;
                case 27: // esc
                    viewport.reset();
                    break;
                // case 109:
                // 	if (!viewport.el) {
                // 		return
                // 	}
                // 	if (moveSpeed > 128) {
                // 		moveSpeed /= 2
                // 	}
                // 	break
                // case 107:
                // 	if (!viewport.el) {
                // 		return
                // 	}
                // 	if (moveSpeed < 4096) {
                // 		moveSpeed *= 2
                // 	}
                // 	break
                default:
                    break;
            }
        })('mousedown', event => this.safeOMdTs(event))('touchstart', event => {
            // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/
            // Supporting_both_TouchEvent_and_MouseEvent
            try {
                event.preventDefault();
            }
            catch (_) {
            }
            this.safeOMdTs(event);
        })('mouseup', _ => this.safeRmMmTm())('touchend', _ => this.safeRmMmTm());
    }
    clearCubeAdjustment() {
        this.dLM.rm('keydown')('mousedown')('touchstart')('mouseup')('touchend');
    }
    clearView(elementId) {
        const viewport = container(this).getSync(VIEWPORT);
        delete viewport.el[elementId];
    }
    resumeInteraction() {
        this.suspended = false;
    }
    setPositionData(agreement, factorNumbers = [1, 2, 3]) {
        const factorToAxisMapping = {
            1: null,
            2: null,
            3: null
        };
        factorToAxisMapping[factorNumbers[0]] = 'x';
        factorToAxisMapping[factorNumbers[1]] = 'y';
        factorToAxisMapping[factorNumbers[2]] = 'z';
        const viewport = container(this).getSync(VIEWPORT);
        viewport.pd = {
            // axisToFactorMapping: {
            // 	x: factorNumbers[0],
            // 	y: factorNumbers[1],
            // 	z: factorNumbers[2]
            // },
            factorToAxisMapping,
            agreement,
            x: this.getUIUiAgreementDimension(1, 
            // 'x',
            agreement
            // , 100
            ),
            y: this.getUIUiAgreementDimension(2, 
            // 'y',
            agreement),
            z: this.getUIUiAgreementDimension(3, 
            // 'z',
            agreement),
        };
        return !!agreement;
    }
    setPositionDataAndMove(agreement) {
        if (this.setPositionData(agreement)) {
            const viewport = container(this).getSync(VIEWPORT);
            viewport.moveToDegree();
        }
    }
    setView(elementId) {
        const [cubeUtils, viewport] = container(this).getSync(CUBE_UTILS, VIEWPORT);
        viewport.el[elementId] = cubeUtils.gQ('#' + elementId);
    }
    setViewPort(forCube, cb) {
        const viewport = container(this).getSync(VIEWPORT);
        viewport.reset();
        viewport.cb = (uIUiAgreement) => {
            // this.populateAgreementFactor('x', uIUiAgreement)
            // this.populateAgreementFactor('y', uIUiAgreement)
            // this.populateAgreementFactor('z', uIUiAgreement)
            cb(uIUiAgreement.agreement);
        };
        if (forCube) {
            if (cb) {
                this.addCubeAdjustment();
            }
            else {
                this.clearCubeAdjustment();
            }
        }
        if (!cb) {
            return null;
        }
        const mutationApi = container(this).getSync(MUTATION_API);
        return mutationApi;
    }
    suspendInteraction() {
        this.suspended = true;
    }
    getUIUiAgreementDimension(factorNumber, 
    // axis: Factor_Axis,
    agreement) {
        if (!agreement) {
            return null;
        }
        // let dir: Position_Dir = 0
        // if (!agreement) {
        // 	return {
        // 		axis,
        // 		dir,
        // 		valid: true,
        // 		value
        // 	}
        // }
        const agreementFactor = agreement[factorNumber];
        // if (agreementFactor.outcome === 'A') {
        // 	dir = 1
        // } else if (agreementFactor.outcome === 'B') {
        // 	dir = -1
        // }
        // return {
        // 	axis,
        // 	dir,
        // 	valid: true,
        // 	value: agreementFactor.value
        // }
        agreementFactor.valid = true;
        return agreementFactor;
    }
    moveViewport(event, // event
    viewport) {
        const [cubeDirection, cubeMovement] = container(this).getSync(CUBE_DIRECTION, CUBE_MOVEMENT);
        const mouseObject = cubeMovement.mouse;
        const startCoords = mouseObject.start;
        let lastCoords = mouseObject.last;
        const now = new Date().getTime();
        if (!cubeMovement.mouse.last) {
            cubeMovement.mouse.last = lastCoords = cubeMovement.mouse.start;
            this.lastMove = now;
        }
        const { moveX, moveY, xBy, yBy } = cubeDirection.getMove(startCoords, event);
        if (now - this.lastMove >= 8) {
            startCoords.x = lastCoords.x;
            startCoords.y = lastCoords.y;
            if (moveX || moveY) {
                viewport.move(moveX, xBy, moveY, yBy);
            }
            this.lastMove = now;
        }
        lastCoords.x = event.x;
        lastCoords.y = event.y;
    }
    /**
     * On mousedown or touchstart
     */
    oMdTs(ev) {
        const [cubeMovement, cubeUtils, viewport] = container(this).getSync(CUBE_MOVEMENT, CUBE_UTILS, VIEWPORT);
        if (!Object.keys(viewport.el).length) {
            return;
        }
        this.rmMmTm();
        delete cubeMovement.mouse.last;
        // clicks on links, images, or videos
        if (cubeUtils.iT(ev.target, 'A')('IFRAME')()) {
            return;
        }
        this.populateStartCoords(ev, cubeMovement.mouse.start);
        this.dLM
            .ad('mousemove', event => {
            this.oMmTm(event);
        })('touchmove', event => {
            this.oMmTm(event);
        });
    }
    /**
     * On mousemove or touchmove
     */
    oMmTm(ev) {
        const viewport = container(this).getSync(VIEWPORT);
        if (!Object.keys(viewport.el).length) {
            return;
        }
        const touches = ev.touches;
        // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
        if (!document.ontouchmove !== undefined || !(touches && touches.length > 1)) {
            try {
                ev.preventDefault();
            }
            catch (_) {
            }
            const point = touches ? touches[0] : ev;
            // Get touch co-ords
            // ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
            // dispatch 'move-viewport' event
            this.moveViewport({ x: point.screenX, y: point.screenY }, viewport);
        }
    }
    populateCoords(ev, // Event,
    touches, start) {
        const p = touches
            ? touches[0]
            : ev;
        start.x = p.pageX;
        start.y = p.pageY;
    }
    populateEndCoords(ev, // Event,
    end) {
        return this.populateCoords(ev, ev.changedTouches, end);
    }
    populateStartCoords(ev, // Event,
    start) {
        // ev.originalEvent.touches ? ev = ev.originalEvent.touches[0] : null
        return this.populateCoords(ev, ev.touches, start);
    }
    /*
    private populateAgreementFactor(
        axis: Factor_Axis,
        uiAgreement: ICubeAgreement
    ): void {
        const agreement                    = uiAgreement.agreement
        const agreementFactor: IUiAgreementFactor = agreement[uiAgreement.axisToFactorMapping[axis]]
        const agreementDimension           = uiAgreement[axis]
        agreementFactor.outcome            = null
        if (agreementDimension.dir === 1) {
            agreementFactor.outcome = 'A'
        } else if (agreementDimension.dir === -1) {
            agreementFactor.outcome = 'B'
        }
        agreementFactor.value = agreementDimension.value
    }
*/
    /**
     * Remove mousemove or touchmove
     */
    rmMmTm() {
        const viewport = container(this).getSync(VIEWPORT);
        if (!Object.keys(viewport.el).length) {
            return;
        }
        this.dLM.rm('mousemove')('touchmove');
    }
    safeOMdTs(event) {
        if (this.suspended) {
            return;
        }
        this.oMdTs(event);
    }
    safeRmMmTm() {
        if (this.suspended) {
            return;
        }
        this.rmMmTm();
    }
}
DI.set(CUBE_EVENT_LISTENER, CubeEventListener);
//# sourceMappingURL=CubeEventListener.js.map