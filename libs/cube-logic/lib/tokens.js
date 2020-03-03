import { system } from '@airport/di';
const cubeLogic = system('votecube-ui').lib('cube-logic');
export const CUBE_DIRECTION = cubeLogic.token();
export const CUBE_EVENT_LISTENER = cubeLogic.token();
export const CUBE_MOVE_MATRIX = cubeLogic.token();
export const CUBE_MOVEMENT = cubeLogic.token();
export const CUBE_UTILS = cubeLogic.token();
export const DEGREE_POSITION_CHOOSER = cubeLogic.token();
export const EVENT_LISTENER_MAP = cubeLogic.token();
export const FINAL_POSITION_FINDER = cubeLogic.token();
export const MATRIX_VALUE_CHOOSER = cubeLogic.token();
export const MUTATION_API = cubeLogic.token();
export const PERCENTAGE_POSITION_CHOOSER = cubeLogic.token();
export const VIEWPORT = cubeLogic.token();
//# sourceMappingURL=tokens.js.map