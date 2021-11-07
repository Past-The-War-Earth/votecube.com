<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let name: string;
	export let styles = "";
	export let value;

	const dispatch = createEventDispatcher();

	function onInput(value) {
		dispatch("select", value);
	}
</script>

<div class="container" style={styles}>
	<label on:click={() => onInput(value)}>
		<input {name} on:input={() => onInput(value)} type="radio" {value} />
		<span class="choice" />
	</label>
</div>

<style>
	input[type="radio"] {
		display: none;
	}

	label {
		margin: 0;
	}

	.choice {
		border: 3px solid #000;
		border-radius: 50%;
		color: black;
		display: block;
		height: 25px;
		margin: 10px;
		width: 25px;
	}

	/* Customize the label (the container) */
	.container {
		height: 24px;
		cursor: pointer;
		margin-bottom: 10px;
		user-select: none;
	}

	/* Hide the browser's default checkbox */
	.container input {
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Create a custom checkbox */
	.choice {
		top: 0;
		left: 0;
		height: 24px;
		width: 24px;
	}

	/* Create the choice/indicator (hidden when not checked) */
	.choice:after {
		content: "";
	}

	/* Show the choice when checked */
	.container input:checked ~ .choice:after {
		display: block;
	}

	/* Style the choice/indicator */
	.container .choice:after {
		background: black;
		border-radius: 50%;
		height: 12px;
		left: 3px;
		position: relative;
		top: 3px;
		width: 12px;
	}
</style>
