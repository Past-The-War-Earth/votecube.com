"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../../../tokens");
class DetailedCubeLogic {
    async getCubeSides(revision, container) {
        const [cubeLogic, logicUtils] = await container.get(tokens_1.CUBE_LOGIC, tokens_1.LOGIC_UTILS);
        const cubeSides = cubeLogic.getDefaultCubePositions();
        const cubeSideMap = {
            x: {},
            y: {},
            z: {}
        };
        for (const cubeSide of cubeSides) {
            cubeSideMap[cubeSide.axis][cubeSide.dir]
                = cubeSide;
        }
        for (const factorNumber in revision.factors) {
            const factor = revision.factors[factorNumber];
            for (const outcome in factor.positions) {
                const position = factor.positions[outcome];
                const cubeSide = cubeSideMap[factor.axis][position.dir];
                cubeSide.colorRGB = logicUtils.getColor(factor.color);
                cubeSide.factor = factor;
                cubeSide.outcome = outcome;
                cubeSide.position = position;
                cubeSide.textColorRGB = logicUtils.getTextColor(factor.color);
            }
        }
        return {
            cubeSideMap,
            cubeSides
        };
    }
    move(cubeSideMap, cubeSide, switchToDefinitions) {
        const switchPositions = this.getSwitchArray(cubeSide.axis, cubeSide.dir, switchToDefinitions);
        this.moveFactorPair(switchPositions[0], cubeSideMap);
        this.movePositionPair(switchPositions[0], cubeSideMap);
        this.movePositionPair(switchPositions[1], cubeSideMap);
    }
    switchPoles(cubeSideMap, cubeSide) {
        const axis = cubeSide.axis;
        const dir = cubeSide.dir;
        const switchPositions = [{
                axis,
                dir
            },
            {
                axis,
                dir: dir === 1 ? -1 : 1
            }];
        const cubeSideFrom = cubeSideMap[switchPositions[0].axis][switchPositions[0].dir];
        const cubeSideTo = cubeSideMap[switchPositions[1].axis][switchPositions[1].dir];
        const toDir = cubeSideTo.position.dir;
        cubeSideTo.position.dir = cubeSideFrom.position.dir;
        cubeSideFrom.position.dir = toDir;
    }
    getSwitchArray(axis, dir, switchToDefinitions) {
        const switchPositionMap = {
            x: {
                '-1': 1,
                '1': 0,
            },
            y: {
                '-1': 3,
                '1': 2,
            },
            z: {
                '-1': 5,
                '1': 4,
            }
        };
        const to = switchToDefinitions[switchPositionMap[axis][dir]];
        const [toAxis, toDir] = to;
        const oppositeDir = dir === 1 ? -1 : 1;
        const toOppositeDir = toDir === 1 ? -1 : 1;
        return [{
                from: {
                    axis,
                    dir
                },
                to: {
                    axis: toAxis,
                    dir: toDir
                }
            }, {
                from: {
                    axis,
                    dir: oppositeDir
                },
                to: {
                    axis: toAxis,
                    dir: toOppositeDir
                }
            }];
    }
    moveFactorPair(switchPosition, cubeSideMap) {
        const cubeSideFrom = cubeSideMap[switchPosition.from.axis][switchPosition.from.dir];
        const cubeSideTo = cubeSideMap[switchPosition.to.axis][switchPosition.to.dir];
        const toAxis = cubeSideTo.factor.axis;
        cubeSideTo.factor.axis = cubeSideFrom.factor.axis;
        cubeSideFrom.factor.axis = toAxis;
    }
    movePositionPair(switchPosition, cubeSideMap) {
        const cubeSideFrom = cubeSideMap[switchPosition.from.axis][switchPosition.from.dir];
        const cubeSideTo = cubeSideMap[switchPosition.to.axis][switchPosition.to.dir];
        const toDir = cubeSideTo.position.dir;
        cubeSideTo.position.dir = cubeSideFrom.position.dir;
        cubeSideFrom.position.dir = toDir;
    }
}
exports.DetailedCubeLogic = DetailedCubeLogic;
di_1.DI.set(tokens_1.DETAILED_CUBE_LOGIC, DetailedCubeLogic);
//# sourceMappingURL=DetailedCubeLogic.js.map