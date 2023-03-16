<script lang="ts">
	import { fade } from "svelte/transition";
    import AutoComplete from "@votecube/ui-controls/src/field/AutoComplete.svelte";

    let form;
    let opinions = [];

    function goTo(opinionId: string): void {
        // TODO: implement
    }
</script>

<article transition:fade={{ duration: 700 }}>
    {#if form}
        <form>
            <AutoComplete field={form.fields.category} />
        </form>
        <table>
            {#each opinions as opinion}
                <!--
                <FeedbackListItem
                    {mode}
                    on:select={goTo(opinion.id)}
                    {opinion}
                />
                -->
            {/each}
        </table>
    {/if}
</article>
