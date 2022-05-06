import { IOC } from "@airport/direction-indicator";
import { IDEA_API } from "../tokens";
export class IdeaApiClient {
    async getIdeasForLabels(labels) {
        const ideaApi = await IOC.get(IDEA_API);
        return await ideaApi.getIdeasForLabels(labels);
    }
    async getLeafIdeas(idea) {
        const ideaApi = await IOC.get(IDEA_API);
        return await ideaApi.getLeafIdeas(idea);
    }
    async getStemIdea(idea) {
        const ideaApi = await IOC.get(IDEA_API);
        return await ideaApi.getStemIdea(idea);
    }
    async getIdea(repositorySource, ideaRepositoryUuId) {
        const ideaApi = await IOC.get(IDEA_API);
        return await ideaApi.getIdea(repositorySource, ideaRepositoryUuId);
    }
    async saveExistingIdea(idea) {
        const ideaApi = await IOC.get(IDEA_API);
        return await ideaApi.saveExistingIdea(idea);
    }
    async saveNewIdea(idea) {
        const ideaApi = await IOC.get(IDEA_API);
        return await ideaApi.saveNewIdea(idea);
    }
}
//# sourceMappingURL=IdeaApiClient.js.map