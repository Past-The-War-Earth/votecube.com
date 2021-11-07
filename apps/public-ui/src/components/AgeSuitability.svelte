<script lang="ts">
	import type { IUiSituation } from "@votecube/model";

	import { createEventDispatcher, onMount } from "svelte";
	import BuildButton from "../common/control/button/BuildButton.svelte";
	import SaveButton from "../common/control/button/SaveButton.svelte";
	import Radio from "../common/field/Radio.svelte";
	import ActionPopover from "../common/shell/ActionPopover.svelte";

	ActionPopover;
	BuildButton;
	Radio;
	SaveButton;

	export let situation: IUiSituation;
	export let saving;

	let value;
	let values = [0, 7, 13, 17, 21];

	const dispatch = createEventDispatcher();

	onMount(() => {
		if (situation.ageSuitability !== undefined) {
			value = situation.ageSuitability;
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
		situation.ageSuitability = value;
		dispatch("save");
	}
</script>

<ActionPopover on:cancel>
	<div slot="header">Situation Age Suitability</div>
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
		{#if saving}
			<BuildButton on:click={save} />
		{:else}
			<SaveButton on:click={save} />
		{/if}
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
