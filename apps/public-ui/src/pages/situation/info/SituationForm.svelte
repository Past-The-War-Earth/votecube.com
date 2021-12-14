<script lang="ts">
    import { DI, IChildContainer } from "@airport/di";
    import {
        FACTOR_INFO_MAIN,
        SITUATION_FORM_LOGIC,
        SITUATION_LIST,
        SITUATION_LOCATIONS,
        SITUATION_MAIN,
        SITUATION_MANAGER,
        SITUATION_TIME_FRAME,
    } from "@votecube/vc-logic";
    import {
        navigateToPage,
        pageTitle,
        routeParams,
        text,
    } from "@votecube/ui-logic";
    import { onDestroy, onMount } from "svelte";
    import { get } from "svelte/store";
    import CharacterButton from "@votecube/ui-controls/src/button/CharacterButton.svelte";
    import PreviewButton from "@votecube/ui-controls/src/button/PreviewButton.svelte";
    import MultiSelect from "@votecube/ui-controls/src/field/MultiSelect.svelte";
    import Text from "@votecube/ui-controls/src/field/Text.svelte";
    import TextArea from "@votecube/ui-controls/src/field/TextArea.svelte";
    import ActionPopover from "@votecube/ui-controls/src/shell/ActionPopover.svelte";
    import SelectionBlock from "../../../components/factor/SelectionBlock.svelte";
    import { saveSituationForm } from "../../../form/cache";
    import * as forms from "../../../form/forms";
    import { loadForms } from "../../../libs/forms";

    let container: IChildContainer;
    let delta = 0;
    let error;
    let form = null;
    let interFormNavigation;
    let invalidAlter = false;
    let isOriginal = true;
    let isValid = false;
    let modified;
    let theRouteParams = routeParams;

    let formHandle = {
        setDelta(newDelta) {
            delta = newDelta;
        },
        setIsValid(newIsValid) {
            isValid = newIsValid;
        },
        setIsOriginal(newIsOriginal) {
            isOriginal = newIsOriginal;
        },
    };

    // cities: ({form}) => form ? form.fields.locations.fields.cities.value : [],
    // continents: ({form}) => form ? form.fields.locations.fields.continents.value : [],
    // countries: ({form}) => form ? form.fields.locations.fields.countries.value : [],
    // locations: ({form}) => form ? form.fields.locations : null,
    $: modified =
        !form || $theRouteParams.mode !== "alter" || isOriginal
            ? false
            : !form.isOriginal();
    /*
    factorsModified: ({$routeParams, isOriginal, form}) => {
        if (!form
            || $routeParams.mode !== 'alter'
            || isOriginal) {
            return false
        }
        return !form.fields.factors.isOriginal()
    },
    */
    /*
locationOrTimeframeModified: ({$routeParams, isOriginal, form}) => {
if (!form
|| $routeParams.mode !== 'alter'
|| isOriginal) {
return false
}
return !form.fields.locations.isOriginal()
|| !form.fields.timeframe.isOriginal()
},
*/
    // states: ({form}) => form ? form.fields.locations.fields.states.value : [],
    $: submitHighlight = f(() => {
        if (!isValid) {
            return "b00";
        }
        if ($theRouteParams.mode !== "alter") {
            return "0b0";
        }

        return modified ? "0b0" : "b00";
    }, delta);
    // timeframe: ({form}) => form ? form.fields.timeframe : null

    /*
            getArrayValueTexts: (
                arrayValue,
            ) => {
                const {container} = this.get()

                container.get(LOGIC_UTILS)

                if (!logicUtils) {
                    return ''
                }
                return logicUtils.getArrayValueTexts(arrayValue)
            },
            getDate: (
                date
            ) => {
                const {container} = this.get()

                container.get(LOGIC_UTILS)

                if (!logicUtils) {
                    return ''
                }
                return logicUtils.getDate(date)
            }
            */

    function ack() {
        invalidAlter = false;
    }

    function selectFactor(factorForm, $routeParams) {
        interFormNavigation = true;
        forms.setForm(forms.CREATE_FACTOR, factorForm);
        navigateToPage(FACTOR_INFO_MAIN, $routeParams);
    }

    function selectLocations($routeParams) {
        // this.set({keepRepositoryUuId: $routeParams.repositoryUuId})
        navigateToPage(SITUATION_LOCATIONS, $routeParams);
    }

    function selectTimeframe($routeParams) {
        // this.set({keepRepositoryUuId: $routeParams.repositoryUuId})
        navigateToPage(SITUATION_TIME_FRAME, $routeParams);
    }

    function submit($routeParams, modified) {
        doSubmit($routeParams, modified).then();
    }

    onMount(async () => {
        container = DI.ui("SituationForm");
        const [
            formFactory,
            // locations,
            // _,
        ] = await Promise.all([
            loadForms(),
            // loadLocations(),
            // loadLocText(page.store, 'en-us'),
        ]);

        // let labels = await labelDao.getAll()

        form = forms.getForm(forms.DEFINE_SITUATION_TOP);

        const theText = get(text);

        if (!form) {
            const { hostingPlatform, mode, repositoryUuId } = get(routeParams);

            try {
                const situationManager = await container.get(SITUATION_MANAGER);

                const cachedSituation = situationManager.cachedSituation;

                if (!cachedSituation.ui) {
                    cachedSituation.ui = await situationManager.getSituation(
                        hostingPlatform,
                        repositoryUuId
                    );
                }

                if (!cachedSituation.ui && mode !== "build") {
                    navigateToPage(SITUATION_LIST);
                    return;
                }

                const situationFormLogic = await container.get(
                    SITUATION_FORM_LOGIC
                );

                form = await situationFormLogic.getSituationForm(
                    cachedSituation,
                    mode === "alter",
                    mode !== "create",
                    theText,
                    formFactory
                );

                forms.setForm(forms.DEFINE_SITUATION_TOP, form);
            } catch (theError) {
                error = theError;
                return;
            }
        }

        forms.ensureForm(form, formHandle);

        pageTitle.set("Situation Info");
    });

    onDestroy(() => {
        saveSituationForm(interFormNavigation).then();
        form && form.clearComponents();
    });

    function f<T>(func: () => T, _delta: number): T {
        return func();
    }

    async function doSubmit($routeParams, modified) {
        const situationManager = await container.get(SITUATION_MANAGER);

        const form = situationManager.cachedSituation.form;
        form.touch();

        if (!form.valid) {
            return;
        }

        if ($routeParams.mode === "alter" && !modified) {
            invalidAlter = true;
            return;
        }

        forms.navigateOnValid(form, SITUATION_MAIN, $routeParams);
    }
</script>

{#if form}
    <form>
        <legend>Define Situation</legend>
        <Text field={form.fields.name} />
        <!--
        <div class="pure-control-group">
            <AutoComplete
                    field="{form.fields.category}"
            ></AutoComplete>
        </div>
        -->
        <div class="pure-control-group">
            <MultiSelect field={form.fields.ageGroups} />
        </div>
        <div class="pure-control-group">
            <MultiSelect field={form.fields.labels} />
        </div>
        <div class="outcomes">
            <div class="A">
                <CharacterButton
                    character="A"
                    fontSize={20}
                    fontX={12}
                    fontY={19}
                    size={24}
                    strokeWidth={1}
                />
                <TextArea
                    field={form.fields.outcomes.fields.A}
                    floatLabel={false}
                    mid={false}
                    mini={true}
                />
            </div>
            <div class="B">
                <CharacterButton
                    character="B"
                    fontSize={20}
                    fontX={12}
                    fontY={19}
                    size={24}
                    strokeWidth={1}
                />
                <TextArea
                    field={form.fields.outcomes.fields.B}
                    floatLabel={false}
                    mid={false}
                    mini={true}
                />
            </div>
        </div>
        <!--
        <div class="pure-control-group">
            <MultiSelect
                    field="{form.fields.labels}"
            ></MultiSelect>
        </div>
        <IconBlock
                fieldGroup="{form.fields.locations}"
                on:select="selectLocations($routeParams)"
        >
            <div slot="icon">
                <LocationIcon
                        width="42"
                ></LocationIcon>
            </div>
            <div slot="text">
                {#if locations && locations.touched}
                {#if continents.length}
                {#if countries.length}
                {#if states.length}
                {#if cities.length}
                Cities:
                <br>
                {getArrayValueTexts(cities)}
                <br>
                <br>
                {/if}
                States:
                <br>
                {getArrayValueTexts(states)}
                <br>
                <br>
                {/if}
                Countries:
                <br>
                {getArrayValueTexts(countries)}
                <br>
                <br>

                {/if}
                Continents:
                <br>
                {getArrayValueTexts(continents)}
                {:else}
                Select Geography
                {/if}
                {:else}
                Select Geography
                {/if}
            </div>
        </IconBlock>

        <IconBlock
                fieldGroup="{form.fields.timeframe}"
                on:select="selectTimeframe($routeParams)"
        >
            <div slot="icon">
                <TimeIcon></TimeIcon>
            </div>
            <div slot="text">
                {#if timeframe && timeframe.touched}
                <table
                        class="timeframe"
                >
                    <tr>
                        <td>
                            Start Date:
                        </td>
                        <td>
                            {getDate(timeframe.fields.startDate.value, logicUtils)}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            End Date:
                        </td>
                        <td>
                            {getDate(timeframe.fields.endDate.value, logicUtils)}
                        </td>
                    </tr>
                </table>
                {:else}
                Select Time-frame
                {/if}
            </div>
        </IconBlock>
        -->
        <SelectionBlock
            factor={form.fields.factors.fields[1]}
            text={form.fields.factors.text[1]}
            on:select={() =>
                selectFactor(form.fields.factors.fields[1], $routeParams)}
        />
        <SelectionBlock
            factor={form.fields.factors.fields[2]}
            text={form.fields.factors.text[2]}
            on:select={() =>
                selectFactor(form.fields.factors.fields[2], $routeParams)}
        />
        <SelectionBlock
            factor={form.fields.factors.fields[3]}
            text={form.fields.factors.text[3]}
            on:select={() =>
                selectFactor(form.fields.factors.fields[3], $routeParams)}
        />
        <nav class="pure-controls">
            <PreviewButton
                classes="submitButton"
                highlightColor={submitHighlight}
                on:click={() => submit($routeParams, modified)}
            />
        </nav>
    </form>
    {#if invalidAlter}
        <ActionPopover on:cancel={ack} infoOnly={true}>
            <div slot="header">Error</div>
            <div slot="content">Please make a modification.</div>
        </ActionPopover>
    {/if}
{/if}

<style>
    legend {
        display: none;
    }

    .A,
    .B {
        flex-basis: 100%;
        text-align: center;
    }

    .B {
        margin-left: 0.4em;
    }

    .outcomes {
        display: flex;
        margin-top: 10px;
        width: 100%;
    }

    /*
        .timeframe td {
            padding: 5px;
        }

        .timeframe td:first-child {
            text-align: right;
        }

        .timeframe td:nth-child(2) {
            text-align: left;
        }
    */
</style>
