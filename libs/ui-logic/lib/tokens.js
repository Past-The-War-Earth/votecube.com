import { system } from '@airport/di';
const publicLogic = system('votecube-ui')
    .lib('ui-logic');
export const AUTH = publicLogic.token('AUTH');
export const ROUTES = publicLogic.token('ROUTES');
export const REPOSITORY_RECORD_CONVERTER = publicLogic
    .token('REPOSITORY_RECORD_CONVERTER');
//# sourceMappingURL=tokens.js.map