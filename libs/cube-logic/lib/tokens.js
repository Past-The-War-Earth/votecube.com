"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const cubeLogic = di_1.system('votecube-ui').lib('cube-logic');
exports.CUBE_DIRECTION = cubeLogic.token();
exports.CUBE_EVENT_LISTENER = cubeLogic.token();
exports.CUBE_MOVE_MATRIX = cubeLogic.token();
exports.CUBE_MOVEMENT = cubeLogic.token();
exports.CUBE_UTILS = cubeLogic.token();
exports.DEGREE_POSITION_CHOOSER = cubeLogic.token();
exports.EVENT_LISTENER_MAP = cubeLogic.token();
exports.FINAL_POSITION_FINDER = cubeLogic.token();
exports.MATRIX_VALUE_CHOOSER = cubeLogic.token();
exports.MUTATION_API = cubeLogic.token();
exports.PERCENTAGE_POSITION_CHOOSER = cubeLogic.token();
exports.VIEWPORT = cubeLogic.token();
//# sourceMappingURL=tokens.js.map