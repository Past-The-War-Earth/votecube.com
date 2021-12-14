import { IUiSituation } from '@votecube/model'
import {
    writable
} from 'svelte/store'

export interface ISituationActions {
    ageSuitabilitySave?: boolean
    checkBuild?: boolean
    confirmSolution?: boolean
    savingSituation?: boolean
    situationAlter?: boolean
    showOutcomes?: boolean
}

export const situationActions = writable<ISituationActions>({})

export const situation = writable<IUiSituation>(null)
