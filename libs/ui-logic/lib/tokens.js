import { app } from '@votecube/dependency-injection';
import { Auth } from './Auth';
import { Routes } from './Routes';
import { RepositoryRecordConverter } from './converter/RepositoryRecordConverter';
const publicLogic = app('ui-logic');
export const AUTH = publicLogic.token({
    class: Auth,
    interface: 'IAuth',
    token: 'AUTH'
});
export const ROUTES = publicLogic.token({
    class: Routes,
    interface: 'IRoutes',
    token: 'ROUTES'
});
export const REPOSITORY_RECORD_CONVERTER = publicLogic
    .token({
    class: RepositoryRecordConverter,
    interface: 'IRepositoryRecordConverter',
    token: 'REPOSITORY_RECORD_CONVERTER'
});
//# sourceMappingURL=tokens.js.map