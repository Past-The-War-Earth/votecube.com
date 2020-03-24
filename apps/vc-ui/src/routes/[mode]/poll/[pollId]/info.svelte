<script context="module">
    import {routeParams} from "@votecube/vc-logic";

    export async function preload(
        {params, query}
    ) {
        routeParams.set(params)
    }
</script>
<script>
    import {DI}            from '@airport/di'
    import { goto } from '@sapper/app'
    import {
        pageTitle,
        POLL_FORM_LOGIC,
        POLL_MANAGER,
        text
    }                      from '@votecube/vc-logic'
    import {
        onDestroy,
        onMount
    }                      from 'svelte'
    import {get}           from 'svelte/store'
    import CharacterButton from '../../../../components/common/control/button/CharacterButton.svelte'
    import PreviewButton   from '../../../../components/common/control/button/PreviewButton.svelte'
    import AutoComplete    from '../../../../components/common/field/AutoComplete.svelte'
    import Text            from '../../../../components/common/field/Text.svelte'
    import TextArea        from '../../../../components/common/field/TextArea.svelte'
    import ActionPopover   from '../../../../components/common/shell/ActionPopover.svelte'
    import SelectionBlock  from '../../../../components/factor/SelectionBlock.svelte'
    import {savePollForm}  from '../../../../libs/form/cache'
    import * as forms      from '../../../../libs/form/forms'
    import {loadForms}     from '../../../../libs/forms'

    let container
    let delta          = 0
    let error
    let form           = null
    let interFormNavigation
    let invalidAlter   = false
    let isOriginal     = true
    let isValid        = false
    let modified
    let poll           = {
        name: ''
    }
    let theRouteParams = routeParams

    let formHandle = {
        setDelta(newDelta) {
            delta = newDelta
        },
        setIsValid(newIsValid) {
            isValid = newIsValid
        },
        setIsOriginal(newIsOriginal) {
            isOriginal = newIsOriginal
        }
    }

    // cities: ({form}) => form ? form.fields.locations.fields.cities.value : [],
    // continents: ({form}) => form ? form.fields.locations.fields.continents.value : [],
    // countries: ({form}) => form ? form.fields.locations.fields.countries.value : [],
    // locations: ({form}) => form ? form.fields.locations : null,
    $: modified = !form
    || $theRouteParams.mode !== 'alter'
    || isOriginal ? false : !form.isOriginal()
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
            return 'b00'
        }
        if ($theRouteParams.mode !== 'alter') {
            return '0b0'
        }

        return modified
            ? '0b0'
            : 'b00'
    })
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
        invalidAlter = false
    }

    function selectFactor(
        factorForm,
        $routeParams
    ) {
        interFormNavigation = true
        forms.setForm(forms.CREATE_FACTOR, factorForm)
        goto(`${$routeParams.mode}/poll/${$routeParams.pollId}/factor`)
        // navigateToPage(FACTOR_INFO_MAIN, $routeParams)
    }

    function selectLocations(
        $routeParams
    ) {
        // this.set({keepPollId: $routeParams.pollId})
        alert('navigateToPage')
        // navigateToPage(POLL_LOCATIONS, $routeParams)
    }

    function selectTimeframe(
        $routeParams
    ) {
        // this.set({keepPollId: $routeParams.pollId})
        alert('navigateToPage')
        // navigateToPage(POLL_TIME_FRAME, $routeParams)
    }

    function submit(
        $routeParams,
        modified
    ) {
        doSubmit($routeParams, modified).then()
    }

    onMount(async () => {
        container = DI.ui('PollForm')
        const [
            formFactory,
            // locations,
            // _,
            // [
            // labelDao,
            // pollDao
            // , voteDao
            // ]
        ]   = await Promise.all([
            loadForms(),
            // loadLocations(),
            // loadLocText(page.store, 'en-us'),
        ])

        // let labels = await labelDao.getAll()

        form = forms.getForm(forms.CREATE_POLL_TOP)

        const theText = get(text)

        if (!form) {
            const {mode} = get(routeParams)

            try {
                const pollManager = await container.get(POLL_MANAGER)

                const currentRevision = pollManager.currentRevision
                if (!currentRevision.ui && mode !== 'build') {
                    alert('navigateToPage')
                    // navigateToPage(POLL_LIST)
                    return
                }

                const pollFormLogic = await container.get(POLL_FORM_LOGIC)

                form = await pollFormLogic.getPollForm(
                    currentRevision,
                    mode === 'alter',
                    mode !== 'create',
                    theText,
                    formFactory)

                forms.setForm(forms.CREATE_POLL_TOP, form)
            } catch (theError) {
                error = theError
                return
            }
        }

        forms.ensureForm(form, formHandle)

        pageTitle.set('Poll Info')
    })

    onDestroy(() => {
        savePollForm(interFormNavigation).then()
        form && form.clearComponents()
    })

    function f(func) {
        return func()
    }

    async function doSubmit(
        $routeParams,
        modified
    ) {
        const pollManager = await container.get(POLL_MANAGER)

        const form = pollManager.currentRevision.form
        form.touch()

        if (!form.valid) {
            return
        }

        if (
            $routeParams.mode === 'alter'
            && !modified) {
            invalidAlter = true
            return
        }

        forms.navigateOnValid(form, `${$routeParams.mode}/poll/${$routeParams.pollId}/new`)
    }

</script>

<style>

    legend {
        display: none;
    }

    .A, .B {
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

{#if form}
<form>
    <legend>Create Poll</legend>
    <Text
            field="{form.fields.name}"
    ></Text>
    <div class="pure-control-group">
        <AutoComplete
                field="{form.fields.theme}"
        ></AutoComplete>
    </div>
    <div
            class="outcomes"
    >
        <div
                class="A"
        >
            <CharacterButton
                    character="A"
                    fontSize="20"
                    fontX="12"
                    fontY="19"
                    size="24"
                    strokeWidth="1"
            ></CharacterButton>
            <TextArea
                    field="{form.fields.outcomes.fields.A}"
                    floatLabel="{false}"
                    mid="{false}"
                    mini="{true}"
            ></TextArea>
        </div>
        <div
                class="B"
        >
            <CharacterButton
                    character="B"
                    fontSize="20"
                    fontX="12"
                    fontY="19"
                    size="24"
                    strokeWidth="1"
            ></CharacterButton>
            <TextArea
                    field="{form.fields.outcomes.fields.B}"
                    floatLabel="{false}"
                    mid="{false}"
                    mini="{true}"
            ></TextArea>
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
            factor="{form.fields.factors.fields[1]}"
            text="{form.fields.factors.text[1]}"
            on:select="{() => selectFactor(form.fields.factors.fields[1], $routeParams)}"
    ></SelectionBlock>
    <SelectionBlock
            factor="{form.fields.factors.fields[2]}"
            text="{form.fields.factors.text[2]}"
            on:select="{() => selectFactor(form.fields.factors.fields[2], $routeParams)}"
    ></SelectionBlock>
    <SelectionBlock
            factor="{form.fields.factors.fields[3]}"
            text="{form.fields.factors.text[3]}"
            on:select="{() => selectFactor(form.fields.factors.fields[3], $routeParams)}"
    ></SelectionBlock>
    <nav class="pure-controls">
        <PreviewButton
                classes="submitButton"
                highlightColor="{submitHighlight}"
                on:click="{() => submit($routeParams, modified)}"
        ></PreviewButton>
    </nav>
</form>
{#if invalidAlter}
<ActionPopover
        on:cancel="{ack}"
        infoOnly="Y"
>
    <div slot="header">
        Error
    </div>
    <div slot="content">
        Please make a modification.
    </div>
</ActionPopover>
{/if}
{/if}
