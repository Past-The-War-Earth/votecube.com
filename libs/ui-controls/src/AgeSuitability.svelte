<script lang="ts">
	import type { IUiIdea } from "@votecube/model";
	import { createEventDispatcher, onMount } from "svelte";
	import SaveButton from "./button/SaveButton.svelte";
	import Radio from "./field/Radio.svelte";
	import ActionPopover from "./shell/ActionPopover.svelte";

	export let idea: IUiIdea;

	let value;
	let values = [0, 7, 13, 17, 21];

	const dispatch = createEventDispatcher();

	onMount(() => {
		if (idea.ageSuitability !== undefined) {
			value = idea.ageSuitability;
		}
	});

	function setValue(newValue) {
		value = newValue;
	}
	function save() {
		// TODO: save age suitability
		if (!value && value !== 0) {
			dispatch("cancel");
			return;
		}
		idea.ageSuitability = value;
		dispatch("save");
	}
</script>

<ActionPopover on:cancel>
	<div slot="header">Idea Age Suitability</div>
	<div slot="content">
		<table>
			{#each values as value}
				<tr>
					<td>
						<Radio
							name="ageSuitability"
							on:select={() => setValue(value)}
							styles="position: absolute; right: 5px; top: -1px;"
							{value}
						/>
					</td>
					<td>
						{value}+
					</td>
				</tr>
			{/each}
		</table>
	</div>
	<div slot="actions">
		<SaveButton on:click={save} />
	</div>
</ActionPopover>

<style>
	table {
		width: 100%;
		margin-bottom: 10px;
	}

	td:first-child {
		height: 42px;
		position: relative;
		width: 55%;
	}

	td:last-child {
		font-size: 1.5em;
		font-weight: 400;
		text-align: left;
	}
</style>
