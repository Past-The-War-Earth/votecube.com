"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../tokens");
const CubeMovement_1 = require("./CubeMovement");
// export const TOUCH = document.ontouchmove !== undefined
class CubeEventListener {
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
            const eventListenerMap = di_1.container(this).getSync(tokens_1.EVENT_LISTENER_MAP);
            this.dLM = eventListenerMap.ad(document);
            this.addCubeAdjustmentToELM(this.dLM);
        }
    }
    addCubeAdjustmentToELM(eventListenerMap) {
        eventListenerMap.ad('keydown', ev => {
            if (this.suspended) {
                return;
            }
            const [cubeUtils, viewport] = di_1.container(this).getSync(tokens_1.CUBE_UTILS, tokens_1.VIEWPORT);
            this.rmMmTm();
            switch (ev.keyCode) {
                case 37: // left
                    viewport.move(CubeMovement_1.Bool.False, CubeMovement_1.Move.None, CubeMovement_1.Bool.True, CubeMovement_1.Move.Down);
                    break;
                case 38: // up
                    // prevent default
                    cubeUtils.pD(ev);
                    viewport.move(CubeMovement_1.Bool.True, CubeMovement_1.Move.Up);
                    break;
                case 39: // right
                    viewport.move(CubeMovement_1.Bool.False, CubeMovement_1.Move.None, CubeMovement_1.Bool.True, CubeMovement_1.Move.Up);
                    break;
                case 40: // down
                    // prevent default
                    cubeUtils.pD(ev);
                    viewport.move(CubeMovement_1.Bool.True, CubeMovement_1.Move.Down);
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
        const viewport = di_1.container(this).getSync(tokens_1.VIEWPORT);
        delete viewport.el[elementId];
    }
    resumeInteraction() {
        this.suspended = false;
    }
    setPositionData(vote, factorNumbers = [1, 2, 3]) {
        const factorToAxisMapping = {
            1: null,
            2: null,
            3: null
        };
        factorToAxisMapping[factorNumbers[0]] = 'x';
        factorToAxisMapping[factorNumbers[1]] = 'y';
        factorToAxisMapping[factorNumbers[2]] = 'z';
        const viewport = di_1.container(this).getSync(tokens_1.VIEWPORT);
        viewport.pd = {
            // axisToFactorMapping: {
            // 	x: factorNumbers[0],
            // 	y: factorNumbers[1],
            // 	z: factorNumbers[2]
            // },
            factorToAxisMapping,
            vote,
            x: this.getUiVoteDimension(1, 
            // 'x',
            vote
            // , 100
            ),
            y: this.getUiVoteDimension(2, 
            // 'y',
            vote),
            z: this.getUiVoteDimension(3, 
            // 'z',
            vote),
        };
        return !!vote;
    }
    setPositionDataAndMove(vote) {
        if (this.setPositionData(vote)) {
            const viewport = di_1.container(this).getSync(tokens_1.VIEWPORT);
            viewport.moveToDegree();
        }
    }
    setView(elementId) {
        const [cubeUtils, viewport] = di_1.container(this).getSync(tokens_1.CUBE_UTILS, tokens_1.VIEWPORT);
        viewport.el[elementId] = cubeUtils.gQ('#' + elementId);
    }
    setViewPort(forCube, cb) {
        const viewport = di_1.container(this).getSync(tokens_1.VIEWPORT);
        viewport.reset();
        viewport.cb = (uiVote) => {
            // this.populateVoteFactor('x', uiVote)
            // this.populateVoteFactor('y', uiVote)
            // this.populateVoteFactor('z', uiVote)
            cb(uiVote.vote);
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
        const mutationApi = di_1.container(this).getSync(tokens_1.MUTATION_API);
        return mutationApi;
    }
    suspendInteraction() {
        this.suspended = true;
    }
    getUiVoteDimension(factorNumber, 
    // axis: Factor_Axis,
    vote) {
        if (!vote) {
            return null;
        }
        // let dir: Position_Dir = 0
        // if (!vote) {
        // 	return {
        // 		axis,
        // 		dir,
        // 		valid: true,
        // 		value
        // 	}
        // }
        const voteFactor = vote[factorNumber];
        // if (voteFactor.outcome === 'A') {
        // 	dir = 1
        // } else if (voteFactor.outcome === 'B') {
        // 	dir = -1
        // }
        // return {
        // 	axis,
        // 	dir,
        // 	valid: true,
        // 	value: voteFactor.value
        // }
        voteFactor.valid = true;
        return voteFactor;
    }
    moveViewport(event, // event
    viewport) {
        const [cubeDirection, cubeMovement] = di_1.container(this).getSync(tokens_1.CUBE_DIRECTION, tokens_1.CUBE_MOVEMENT);
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
        const [cubeMovement, cubeUtils, viewport] = di_1.container(this).getSync(tokens_1.CUBE_MOVEMENT, tokens_1.CUBE_UTILS, tokens_1.VIEWPORT);
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
        const viewport = di_1.container(this).getSync(tokens_1.VIEWPORT);
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
    private populateVoteFactor(
        axis: Factor_Axis,
        uiVote: IUiVote
    ): void {
        const vote                    = uiVote.vote
        const voteFactor: IVoteFactor = vote[uiVote.axisToFactorMapping[axis]]
        const voteDimension           = uiVote[axis]
        voteFactor.outcome            = null
        if (voteDimension.dir === 1) {
            voteFactor.outcome = 'A'
        } else if (voteDimension.dir === -1) {
            voteFactor.outcome = 'B'
        }
        voteFactor.value = voteDimension.value
    }
*/
    /**
     * Remove mousemove or touchmove
     */
    rmMmTm() {
        const viewport = di_1.container(this).getSync(tokens_1.VIEWPORT);
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
exports.CubeEventListener = CubeEventListener;
di_1.DI.set(tokens_1.CUBE_EVENT_LISTENER, CubeEventListener);
//# sourceMappingURL=CubeEventListener.js.map