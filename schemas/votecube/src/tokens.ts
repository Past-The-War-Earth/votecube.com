import { system } from "@airport/di";
import { ISituationApi } from "./api/SituationApi";

export const votecube = system('votecube').lib('votecube')

export const SITUATION_API = votecube.token<ISituationApi>('ISituationApi')
