import { app } from '@votecube/dependency-injection';
const cubeLogic = app('cube-logic');
export const CUBE_DIRECTION = cubeLogic.token('CUBE_DIRECTION');
export const CUBE_EVENT_LISTENER = cubeLogic.token('CUBE_EVENT_LISTENER');
export const CUBE_MOVE_MATRIX = cubeLogic.token('CUBE_MOVE_MATRIX');
export const CUBE_MOVEMENT = cubeLogic.token('CUBE_MOVEMENT');
export const CUBE_UTILS = cubeLogic.token('CUBE_UTILS');
export const DEGREE_POSITION_CHOOSER = cubeLogic.token('DEGREE_POSITION_CHOOSER');
export const EVENT_LISTENER_MAP = cubeLogic.token('EVENT_LISTENER_MAP');
export const FINAL_POSITION_FINDER = cubeLogic.token('FINAL_POSITION_FINDER');
export const MATRIX_VALUE_CHOOSER = cubeLogic.token('MATRIX_VALUE_CHOOSER');
export const MUTATION_API = cubeLogic.token('MUTATION_API');
export const PERCENTAGE_POSITION_CHOOSER = cubeLogic.token('PERCENTAGE_POSITION_CHOOSER');
export const VIEWPORT = cubeLogic.token('VIEWPORT');
//# sourceMappingURL=tokens.js.map