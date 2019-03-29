import {diToken}  from '@airport/di'
import {IPollDao} from './dao/poll/PollDao'

export const POLL_DAO = diToken<IPollDao>()
