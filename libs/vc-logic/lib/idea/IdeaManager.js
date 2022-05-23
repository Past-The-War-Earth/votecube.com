var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from '@airport/direction-indicator';
import { IdeaApi } from '@votecube/votecube';
let IdeaManager = class IdeaManager {
    constructor() {
        this.ideaApi = new IdeaApi();
        this.theCachedIdea = {
            db: null,
            form: null,
            originalUi: null,
            ui: null,
        };
    }
    get cachedIdea() {
        return this.theCachedIdea;
    }
    async getIdea(hostingPlatform, repositoryUuId) {
        const ui = this.cachedIdea.ui;
        if (!repositoryUuId || repositoryUuId === ':repositoryUuId'
            || (ui && ui.repository.source === hostingPlatform
                && ui.repository.uuId === repositoryUuId)) {
            return ui;
        }
        const dbIdea = await this.ideaApi
            .getIdea(hostingPlatform, repositoryUuId);
        this.cachedIdea.db = dbIdea;
        this.cachedIdea.ui = this.ideaConverter.dbToUi(dbIdea);
        return this.cachedIdea.ui;
    }
    async getAllIdeas() {
        return [];
    }
    async getIdeasForCategory(category) {
        return [];
    }
    async getLeafIdeas(stemIdeaRepositoryUuId) {
        return [];
    }
    async getStemIdea(leafIdeaUuId) {
        return null;
    }
    async mergeForm() {
        const form = this.cachedIdea.form;
        if (!form) {
            return;
        }
        const ui = this.ideaFormManager
            .fromForm(form.value, this.cachedIdea.ui);
        const oldUiIdea = this.cachedIdea.ui;
        if (oldUiIdea) {
            this.logicUtils.overlay(oldUiIdea, ui);
        }
        else {
            this.logicUtils.overlay({
                factors: this.cubeLogic.getReasonDefault()
            }, ui);
        }
        if (oldUiIdea) {
            this.logicUtils.copyProperties(oldUiIdea, ui, [
                // 'actorId',
                // 'actorRecordId',
                'ageSuitability',
                // 'repositoryId',
                // 'repositoryUuId',
            ]);
        }
        this.cachedIdea.ui = ui;
    }
    /*
     * Publishing a idea makes it publically accessable by adding it
     * to Vepsa FTS and showing it in search results either by direct
     * text match or by label match.
     */
    async publishIdea(idea) {
        // TODO: implement publish once saving across devices works
        // (using votecube.com backend)
    }
    /*
     * For now saving the idea saves it in votecube via ScyllaDb.
     * it becomes accessible privately (if you know the private votecube UUID of
     * the user) and supports data syncing (via retrieval of new transaction
     * log entries)
     *
     * Eventually, on initial save the user will be presented with a choice
     *  of where they want to save it - privately in IPFS or semi-privately
     * in the host application.  They can set that choice in Turbase.App settings
     * (to say that by default save all private repositories to IPFS or to
     * host applications).  Note saving of private repos is done via Turbase,
     * the host application is still free to save this data as it chooses fit
     * (since there is no way to enforce what network connections the host application
     * UI makes in a standard browser).
     *
     * The user choice of where to save can be passed in from the application UI.  If
     * that choice conflicts with the user settings the Turbase.App parent frame
     * will pop-up a dialog asking the user to confirm their choice.
     *
     * Once the repository is saved the user's choice of where to save becomes
     * persistent and will take an explict action from the user to change it.  The
     * application is aware of the choice and should put it into the URL, thus
     * allowing the user to retrieve the private repository from the correct location
     * via a saved link.
     *
     * On initial save the user is redirected from the build screen to the
     * screen with the same entity but the correct URL for where it is stored.
     *
     */
    async saveIdea(idea, createNewRepository) {
        const originalUi = this.cachedIdea.originalUi;
        const ui = this.cachedIdea.ui;
        if (!this.logicUtils.isDifferent(originalUi, ui)) {
            return;
        }
        const dbIdea = this.ideaConverter.uiToDb(ui, this.cachedIdea.db);
        let repositoryIdentifier;
        if (createNewRepository) {
            repositoryIdentifier = await this.ideaApi
                .saveNewIdea(dbIdea);
        }
        else {
            repositoryIdentifier = await this.ideaApi
                .saveExistingIdea(dbIdea);
        }
        this.cachedIdea.db = dbIdea;
        this.theCachedIdea = {
            db: dbIdea,
            form: null,
            originalUi: null,
            ui: null,
        };
        return repositoryIdentifier;
    }
    async saveCachedIdea(user, createNewRepository) {
        return await this.saveIdea(this.cachedIdea.ui, createNewRepository);
    }
};
__decorate([
    Inject()
], IdeaManager.prototype, "cubeLogic", void 0);
__decorate([
    Inject()
], IdeaManager.prototype, "logicUtils", void 0);
__decorate([
    Inject()
], IdeaManager.prototype, "ideaFormManager", void 0);
__decorate([
    Inject()
], IdeaManager.prototype, "ideaConverter", void 0);
IdeaManager = __decorate([
    Injected()
], IdeaManager);
export { IdeaManager };
//# sourceMappingURL=IdeaManager.js.map