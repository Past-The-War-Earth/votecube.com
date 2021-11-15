<script lang="ts">
    import { DI } from "@airport/di";
    import { CUBE_EVENT_LISTENER, MUTATION_API } from "@votecube/cube-logic";
    import type {
        ITweenSolution,
        ITweenSolutionFactor,
        IUiSituation,
        IUiSolution,
        IUiSolutionFactor,
    } from "@votecube/model";
    import {
        cardMove,
        cube,
        CUBE_LOGIC,
        DETAILED_CUBE_LOGIC,
        LOGIC_UTILS,
        mode,
        navigateToPage,
        noOverflow,
        SITUATION_FORM,
        SITUATION_LIST,
        SITUATION_MAIN_LOGIC,
        SITUATION_MANAGER,
        RELEASE_PLAN,
        routeParams,
        setResizeCllBck,
        user,
        DERIVATION_LIST,
        SOLUTION_MANAGER,
        ILogicUtils,
    } from "@votecube/vc-logic";
    import { beforeUpdate, onDestroy, onMount } from "svelte";
    import { get } from "svelte/store";
    import BuildButton from "../../../common/control/button/BuildButton.svelte";
    import CancelButton from "../../../common/control/button/CancelButton.svelte";
    import OutcomeButton from "../../../common/control/button/OutcomeButton.svelte";
    import PercentPicker from "../../../common/control/PercentPicker.svelte";
    import ActionPopover from "../../../common/shell/ActionPopover.svelte";
    import AgeSuitability from "../../../components/AgeSuitability.svelte";
    import DetailedCube from "../../../components/situation/DetailedCube.svelte";
    import FactorRanking from "../../../components/situation/FactorRanking.svelte";
    import Outcomes from "../../../components/situation/Outcomes.svelte";
    import SituationFab from "../../../components/situation/SituationFab.svelte";
    import SolutionComponentGraph from "../../../components/solution/SolutionComponentGraph.svelte";
    import {
        getBlankTweenSolution,
        getBlankUiSolution,
        setupCubeView,
    } from "../../../database";
    // import SolutionComponentSummary from '../../../components/solution/SolutionComponentSummary.html'

    let action;
    let ageSuitabilityVisible;
    let beforeCardView = false;
    let beforeCubeView = false;
    let changed: {
        delta: boolean;
    } = {
        delta: false,
    };
    let confirm;
    let cubeSideMap;
    let cubeSides;
    let cubeView = false;
    // cubeTransition: false,

    let container = DI.ui("SituationMain");
    let currentSolution: ITweenSolution = getBlankTweenSolution(container);
    let delta = 0;
    let effectiveCubeView;
    let error;
    let loaded;
    let logicUtils: ILogicUtils;
    let moveDelta = 0;
    let moveType;
    let manualControlsOn = true;
    let mutationApi;
    let outcomesVisible = false;
    let percentMode = false;
    let situation: IUiSituation = null;
    let positionChanges = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
    };
    let positionMode = false;
    let previous = {
        delta: 0,
    };
    let saving = false;
    let savingMessage;
    let theCurrentSolutionFactors: IUiSolutionFactor[] = [];
    let theSolutionFactors: IUiSolutionFactor[] = [];
    let tweenDelta = 0; // Only for the factor cubes
    let verticalLayout = true;
    let solution: IUiSolution;
    let zoomFactor = 0.65;

    $: currentSolutionFactors = f(() => {
        if (logicUtils && currentSolution) {
            theCurrentSolutionFactors =
                logicUtils.getSolutionFactorNodesInValueOrder(currentSolution);
        }

        return theCurrentSolutionFactors as any as ITweenSolutionFactor[];
    }, delta);
    $: dynamicDelta = effectiveCubeView ? delta : tweenDelta;
    $: dynamicSolution = effectiveCubeView ? solution : currentSolution;
    $: effectiveCubeView = cubeView && !beforeCubeView;
    $: horizontalLayout = !verticalLayout;
    $: transformScale = effectiveCubeView
        ? `transform: scale(${zoomFactor}, ${zoomFactor});`
        : "";
    $: solutionFactors = f(() => {
        if (logicUtils && solution) {
            theSolutionFactors =
                logicUtils.getSolutionFactorNodesInValueOrder(solution);
        }

        return theSolutionFactors;
    }, delta);

    onMount(async () => {
        cardMove.set(null);

        let params = get(routeParams);
        let hostingPlatform = params.hostingPlatform;
        let repositoryUuId = params.repositoryUuId;

        resize();
        if (window.location.href.indexOf("card/ClimateChange") > 0) {
            repositoryUuId = "1e62db65-807b-457f-ba34-4410013e8d39";
        }
        cube.set(true);
        noOverflow.set(true);

        const cubeLogicModule = await import("@votecube/cube-logic");

        const [cubeEventListener, cubeLogic, detailedCubeLogic, theLogicUtils] =
            await container.get(
                cubeLogicModule.CUBE_EVENT_LISTENER,
                CUBE_LOGIC,
                DETAILED_CUBE_LOGIC,
                LOGIC_UTILS
            );

        cubeLogic.setCubeViewPort(
            cubeEventListener,
            (theMutationApi) => {
                mutationApi = theMutationApi;
            },
            () => {
                /*
                if (percentMode) {
                    TODO: implement correct card and graph animations for the PercentPicker, IF NEEDED
                }
                */
                delta = delta + 1;
                // 				percentMode = false
            }
        );

        const cubeViewResult = await setupCubeView(
            hostingPlatform,
            repositoryUuId,
            cubeLogic,
            cubeEventListener,
            container
        );

        situation = cubeViewResult.situation;

        const cubeSideResult = await detailedCubeLogic.getCubeSides(
            situation,
            container
        );

        await doToggleView(!cubeView, cubeView);

        solution = cubeViewResult.solution;
        cubeSideMap = cubeSideResult.cubeSideMap;
        cubeSides = cubeSideResult.cubeSides;
        loaded = true;
        logicUtils = theLogicUtils;
        mode.set(params.mode);
    });

    onDestroy(async () => {
        setResizeCllBck(null);

        const [cubeEventListener, cubeLogic] = await container.get(
            CUBE_EVENT_LISTENER,
            CUBE_LOGIC
        );

        cubeLogic.shutDownCubeListener(cubeEventListener);
        mutationApi = null;
        cube.set(false);
        noOverflow.set(false);

        DI.remove(container);
    });

    beforeUpdate(async () => {
        changed.delta = delta !== previous.delta;
        previous.delta = delta;
        if (!changed.delta || !solution) {
            return;
        }

        const logic = await container.get(SITUATION_MAIN_LOGIC);

        if (logic.solutionsEqual(currentSolution, solution)) {
            return;
        }

        let lastSolution = currentSolution;
        currentSolution = logic.copySolutionToTween(solution, lastSolution);

        logic
            .scheduleFactorTweens(
                lastSolution,
                currentSolution,
                solution.changeMillis ? solution.changeMillis : 400
            )
            .subscribe((_) => {
                tweenDelta = tweenDelta + 1;
            });
    });

    function f<T>(func: () => T, delta?: number) {
        return func();
    }

    function alter($routeParams) {
        let mode = $routeParams.mode;
        if (mode === "solution") {
            mode = "alter";
        }
        // confirmAlter.set(false)
        navigateToPage(SITUATION_FORM, {
            ...$routeParams,
            mode,
        });
    }

    // confirmAlter(event) {
    // 	confirmAlter.set(true)
    // },
    // doNotAlter() {
    // 	confirmAlter.set(false)
    // },
    function build($user) {
        save($user);
    }

    function checkBuild(situation) {
        // if (!situation.ageSuitability && situation.ageSuitability !== 0) {
        //     ageSuitabilityVisible = true;
        //     saving = true;
        //     return;
        // }
        setAction("confirm");
    }

    function closeConfirm() {
        // setCubeAdjustment(true).then(() => {
        setAction("none");
        // })
    }

    function confirmSolution() {
        setCubeAdjustment(false).then(() => {
            setAction("solution");
        });
    }

    function goToReleasePlan() {
        navigateToPage(RELEASE_PLAN);
    }

    function goToDerivations() {
        const { repositoryUuId } = get(routeParams);
        navigateToPage(DERIVATION_LIST, { repositoryUuId });
    }

    function onAgeSuitabilitySave(saving) {
        if (saving) {
            setTimeout(() => {
                setAction("confirm");
            });
        }
        ageSuitabilityVisible = false;
        delta = delta + 1;
    }

    function setAction(newAction) {
        action = newAction;
        error = "";
    }

    function situationAltered(newCubeSides?) {
        if (!newCubeSides) {
            newCubeSides = cubeSides;
        }
        cubeSides = newCubeSides;
        delta = delta + 1;
        moveDelta = moveDelta + 1;
    }

    function situationAdjusted() {
        situationAltered();
        container.get(MUTATION_API).then((mutationApi) => {
            mutationApi.recompute();
        });
    }

    function move(event) {
        percentMode = true;
        container.get(MUTATION_API).then((mutationApi) => {
            mutationApi.move(
                event.detail.factorNumber,
                event.detail.outcome,
                event.detail.percentChange
            );
        });
    }

    function moveToValue(event) {
        percentMode = true;
        container.get(MUTATION_API).then((mutationApi) => {
            mutationApi.moveToValue(
                event.detail.factorNumber,
                event.detail.value
            );
        });
    }

    function showAgeSuitability(newAgeSuitabilityVisible) {
        ageSuitabilityVisible = newAgeSuitabilityVisible;
    }

    function showOutcomes(newOutcomesVisible) {
        outcomesVisible = newOutcomesVisible;
    }

    function togglePercentPicker() {
        let newPercentMode = !percentMode;
        setCubeAdjustment(!percentMode).then(() => {
            if (newPercentMode) {
                cubeView = true;
            }
            percentMode = newPercentMode;
        });
    }

    function togglePositionMode() {
        positionMode = !positionMode;
        cubeView = positionMode ? true : cubeView;
    }

    function toggleSurface(factorNumber) {
        let originalMoveType = moveType;
        moveType = "toggle";
        setTimeout(() => {
            container.get(MUTATION_API).then((mutationApi) => {
                mutationApi.toggleSurface(factorNumber);
                delta = delta + 1;
                setTimeout(() => {
                    moveType = originalMoveType;
                }, 500);
            });
        }, 1);
    }

    function toggleView(currentlyInCubeView, forCubeView) {
        doToggleView(currentlyInCubeView, forCubeView).then();
    }

    function toSituationForm($routeParams) {
        navigateToPage(SITUATION_FORM, $routeParams);
    }

    function submitSolution() {
        confirm = false;
        // doSubmitSolution()
    }

    async function setCubeAdjustment(enableCubeAdjustment) {
        const [cubeEventListener, cubeLogic] = await container.get(
            CUBE_EVENT_LISTENER,
            CUBE_LOGIC
        );

        cubeLogic.setCubeAdjustment(cubeEventListener, enableCubeAdjustment);
    }

    async function doToggleView(currentlyInCubeView, forCubeView) {
        const cubeEventListener = await container.get(CUBE_EVENT_LISTENER);

        if (forCubeView) {
            if (!currentlyInCubeView) {
                // Animate Factor Rankings out of the view
                beforeCubeView = true;

                cubeEventListener.resumeInteraction();

                cubeView = forCubeView;
                setTimeout(() => {
                    beforeCubeView = false;
                }, 5);
            }
        } else {
            if (currentlyInCubeView) {
                // Animate Factor Rankings out of the view
                beforeCardView = true;

                cubeEventListener.suspendInteraction();

                cubeView = forCubeView;
                setTimeout(() => {
                    beforeCardView = false;
                }, 701);
            }
        }
    }

    function resize() {
        setResizeCllBck((portalHeight, windowWidth) => {
            const figureHeight = portalHeight * 0.55 + 95;

            const cubeAreaLeastFactor =
                windowWidth < figureHeight ? windowWidth : figureHeight;

            zoomFactor = (Math.sqrt(cubeAreaLeastFactor) * 3) / 100;
        });
    }

    async function save($user) {
        savingMessage = "Saving ...";
        const situationManager = await container.get(SITUATION_MANAGER);
        try {
            await situationManager.saveCachedSituation($user);
            confirm = false;
            navigateToPage(SITUATION_LIST);
        } catch (theError) {
            error = theError;
            savingMessage = "Error";
        }
    }

    async function doSubmitSolution() {
        // confirm = false
        const solutionManager = await container.get(SOLUTION_MANAGER);
        try {
            await solutionManager.saveCachedSituationSolution(solution);
            confirm = false;
            navigateToPage(SITUATION_LIST);
        } catch (theError) {
            error = theError;
            savingMessage = "Error";
        }
    }
</script>

<article>
    <!-- for toggling the view -->
    <!--
    <nav>
    </nav>
    should clicking on non-buttons cause the view to change - probably not,
    the interface should be simple and orthogonal, only the buttons toggle,
    not free floating icons.

    And all buttons are always behind the Fab

    Fab has all of the actions related to that screen, system wide
    actions are in ?top menu?

    for example for the situation screens Fab shows the:

    vertical - on screen actions
    horizontal - related views

    ?but what if you have to navigate to an unrelated view?  some views
    are accessible from anywhere, like:
        create new situation
        situation listings (there is only one with filters)
        favorites (like bookmarks of saved listing filters) - post beta launch
        about (mission statement and the team)

    so a top level menu seems appropriate, BUT we can hide it until
    you click on the Fab.  But in that case, where does the situation title
    go - probably just across the screen on the top, without a menu.
    That leaves more space for the title (of situation or just screen,
    if needed)

    how important are animations

    for ranking view it is important that:

        using it is intuitive
        the information on it ties in with the rest the cube and the percentages

    general UI automation:

        while it is very important it is not essential for the initial launch

    to a certain degree transition between the default ranking screen and the
    cube screen is important, we should tie in the main ranking with the miniature
    cube speaks for itself

    clicking:

    All clickable buttons are round, so the individual dimension buttons are
    also round.  To make them toggle up and down images are used (for lack of
    a better known way).

    10/6/2019 - The miniatures are also clickable to give the users a quick access
    point.  They do not have equivalents in the Fab so the interface is orthogonal.
    The chart miniature brings up the percentage view.
    -->
    <!--			moveType="{moveType}"-->
    <!--			positionMode="{positionMode}"-->
    <!--			verticalLayout="{verticalLayout}"-->
    <SolutionComponentGraph
        {cubeSides}
        cubeView={effectiveCubeView}
        {delta}
        on:toggleView={() => toggleView(cubeView, !cubeView)}
        on:togglePercent={togglePercentPicker}
        on:toggleChart={() => showOutcomes(true)}
        {situation}
        {tweenDelta}
        {solution}
        solutionFactors={currentSolutionFactors}
    />
    <!-- the main view -->
    <!--			class:ranking="!effectiveCubeView"-->
    <section
        class:cube={effectiveCubeView}
        class:card={!effectiveCubeView}
        colspan="4"
    >
        <main>
            <section
                id="viewport"
                class:leftViewport={horizontalLayout}
                style={transformScale}
            >
                {#if effectiveCubeView}
                    <!--						cubeView="{effectiveCubeView}"-->
                    <!--						delta="{delta}"-->
                    <!--						moveType="{moveType}"-->
                    <DetailedCube
                        {cubeSideMap}
                        {cubeSides}
                        on:cubeAltered={situationAltered}
                        {situation}
                        {positionMode}
                        {verticalLayout}
                        {solution}
                    />
                {:else}
                    <!--						verticalLayout="{verticalLayout}"-->
                    <FactorRanking
                        {delta}
                        on:rankingAdjusted={situationAdjusted}
                        {situation}
                        {solution}
                        {solutionFactors}
                    />
                {/if}
            </section>
        </main>
    </section>
    {#if solution}
        {#if percentMode}
            <PercentPicker
                {delta}
                on:close={togglePercentPicker}
                on:move={move}
                on:moveToValue={moveToValue}
                {situation}
                {solutionFactors}
            />
        {/if}
        <SituationFab
            on:ageSuitability={() => showAgeSuitability(true)}
            on:build={() => checkBuild(situation)}
            on:confirmSolution={() => confirmSolution()}
            on:edit={() => alter($routeParams)}
            on:manuallyOverwrite={togglePercentPicker}
            on:outcomes={() => showOutcomes(true)}
            on:opinions={() => setAction("opinions")}
            on:position={togglePositionMode}
            on:rankings={() => setAction("rankings")}
            on:stats={() => setAction("stats")}
            on:derivations={goToDerivations}
            mode={$mode}
        />
        {#if ageSuitabilityVisible}
            <AgeSuitability
                {saving}
                on:cancel={() => showAgeSuitability(false)}
                on:save={() => onAgeSuitabilitySave(saving)}
                {situation}
            />
        {/if}
        {#if outcomesVisible}
            <ActionPopover customCancel={true} infoOnly={true}>
                <div slot="header">
                    {situation.name}
                </div>
                <div slot="content">
                    <Outcomes final={loaded} {situation} />
                </div>
                <div slot="cancel">
                    <OutcomeButton on:click={() => showOutcomes(false)} />
                </div>
            </ActionPopover>
        {/if}
        {#if action === "save"}
            <ActionPopover
                on:cancel={closeConfirm}
                viewOnly={!error}
                infoOnly={error}
            >
                <div slot="header">
                    {savingMessage}
                </div>
                <div slot="content">
                    {error}
                </div>
            </ActionPopover>
        {:else if ["solution", "stats", "rankings", "opinions"].indexOf(action) > -1}
            <!--			contentClass="smallPadding"-->
            <ActionPopover customCancel={true} on:cancel={closeConfirm}>
                <div slot="header">
                    {#if action === "opinions"}
                        Almost Here - Situation Opinions
                    {:else if action === "solution"}
                        Coming soon - Solve
                    {:else if action === "rankings"}
                        Coming soon - Situation Rankings
                    {:else if action === "stats"}
                        Coming in Beta - Situation Statistics
                    {/if}
                </div>
                <div slot="content">
                    <!--
                    <div>
                        {situation.name}
                    </div>
                    -->
                    <!--
                    <SolutionComponentSummary
                            bind:delta
                            bind:situation
                            verticalLayout="Y"
                            bind:solution
                            maxBarSize="{120}"
                            mode="confirm"
                            solutionFactors="{solutionFactors}"
                    ></SolutionComponentSummary>
                    -->
                    <br />
                    <h3>
                        {#if action === "opinions"}
                            Ability to post your opinions about Situations is
                            coming next!
                        {:else if action === "solution"}
                            Voting is scheduled to be released at the end of
                            Alpha testing period.
                        {:else if action === "rankings"}
                            We'll start providing basic Situation Rankings at
                            the end of Alpha testing period. More will be added
                            in subsequent releases.
                        {:else if action === "stats"}
                            Basic Situation Statistics will be available in Beta
                            release. More advanced stats will be provided in
                            version 1.
                        {/if}
                        <br />
                        <br />
                        Please see the <a href="/releasePlan">Release Plan</a> for
                        details.
                    </h3>
                    <br />
                </div>
                <!--
                <div slot="actions">
                    <SolutionButton
                            on:select="submitSolution()"
                    ></SolutionButton>
                </div>
        -->
                <div slot="cancel">
                    <CancelButton on:click={closeConfirm} />
                </div>
            </ActionPopover>
        {:else if action === "confirm"}
            <ActionPopover on:cancel={closeConfirm}>
                <div slot="header">Please Confirm</div>
                <div slot="content">
                    Define the "{situation.name}" Situation?
                    <br />
                    Age Groups: {situation.ageGroups
                        .map((ageGroup) => ageGroup.name)
                        .join(" , ")}
                    <br />
                    Labels: {situation.labels
                        .map((label) => label.name)
                        .join(" , ")}
                </div>
                <div slot="actions">
                    <BuildButton on:click={() => build($user)} />
                </div>
            </ActionPopover>
        {/if}
    {/if}
    <!--	{#if $confirmAlter}
        <ActionPopover
                on:cancel="doNotAlter()"
        >
            <div slot="header">
                Alter Situation
            </div>
            <div slot="content">
                Alter this situation?
            </div>
            <div slot="actions">
                <AlterButton
                        on:click="alter($routeParams)"
                ></AlterButton>
            </div>
        </ActionPopover>
        {/if}-->
</article>

<style>
    article {
        max-width: 420px;
    }

    @media (min-width: 321px) {
        section.card {
            top: 145px !important;
        }

        section.cube {
            top: 56% !important;
        }
    }

    #viewport {
        height: 100%;
        perspective: 900px; /* FIXME: make the cube more approachable 1500px ~ 2500px;*/
        /* 1500 increases range from 11% to 9%, 2500 increases to 6% */
        perspective-origin: 50% 160px; /* 670px; */
        /*transform: scale(0.75,0.75);*/
        width: 100%;
    }

    div[slot="cancel"] {
        text-align: center;
    }

    section.card {
        left: 0px;
        position: absolute;
        top: 110px;
        width: 100%;
    }

    section.cube {
        left: 50%;
        margin-right: -50%;
        position: absolute;
        top: 56%;
        transform: translate(-50%, -50%);
    }

    /*	.ranking {
            top: 275px;
        }*/
</style>
