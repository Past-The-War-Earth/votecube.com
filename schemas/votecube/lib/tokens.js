import { system } from "@airport/di";
export const votecube = system('votecube').lib('votecube');
votecube.signature = 'votecube';
export const SITUATION_API = votecube.token('SITUATION_API');
export const SOLUTION_API = votecube.token('SOLUTION_API');
//# sourceMappingURL=tokens.js.map