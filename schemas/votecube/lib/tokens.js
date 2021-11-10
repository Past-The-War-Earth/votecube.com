import { system } from "@airport/di";
export const votecube = system('votecube').lib('votecube');
export const SITUATION_API = votecube.token('ISituationApi');
export const SITUATION_DAO = votecube.token('ISituationDao');
export const SOLUTION_API = votecube.token('ISolutionApi');
//# sourceMappingURL=tokens.js.map