<script>
	import {popup} from '@votecube/vc-logic'
	import {
		createEventDispatcher,
		onDestroy,
		onMount
	}                           from 'svelte'
	import {fly}                from 'svelte/transition'
	import CharacterButton      from './button/CharacterButton.svelte'
	import LinearPositionPicker from './LinearPositionPicker.svelte'

	export let delta
	export let poll
	export let voteFactors

	let pickerDelta = 0

	const dispatch = createEventDispatcher()

	$: moveDelta = delta + pickerDelta

	onMount(() => {
		popup.set(true)
	})

	onDestroy(() => {
		popup.set(false)
	})

	function f(func) {
		return func()
	}

	function move(
		factorNumber,
		outcome,
		percentChange
	) {
		dispatch('move', {
			factorNumber,
			outcome,
			percentChange
		})
		update()
	}

	function moveToValue(
		factorNumber,
		value
	) {
		dispatch('moveToValue', {
			factorNumber,
			value: value.detail
		})
		update()
	}

	function update() {
		pickerDelta += 1
	}

</script>

<style>
	@media (min-width: 321px) {
		summary.override {
			font-size: 0.65em;
			padding-top: 4px;
		}
	}

	@media (min-width: 376px) {
		summary.override {
			font-size: 0.7em !important;
			padding-top: 3px;
		}
	}

	aside {
		background: hsla(0, 100%, 100%, 0.8);
		border: 2px dashed black;
		border-radius: 5px;
		bottom: 0px;
		color: black;
		font-size: 3em;
		margin: 0px;
		max-width: 420px;
		padding: 3px;
		position: fixed;
		text-align: center;
		width: 100%;
	}

	aside > div {
		position: relative;
		width: 100%;
	}

	nav {
		color: black;
		font-size: 0.3em;
		height: 50px;
		line-height: 50px;
		position: absolute;
		text-align: center;
		top: 0px;
		vertical-align: middle;
		width: 50px;
	}

	nav.left {
		left: 0px;
	}

	nav.right {
		right: 0px;
	}


	summary {
		font-size: 0.6em;
		font-weight: 300;
		margin-bottom: -10px;
		padding-top: 5px;
		text-align: center;
		width: 100%;
	}

	table {
		width: 100%;
	}

	td {
		height: 70px;
		width: 33%;
	}
</style>

<aside
		transition:fly='{{y:200, duration: 500}}'
>
	<div>
		<nav
				class="left"
				on:click="{() => dispatch('close')}"
		>
			╳
		</nav>
		<nav
				class="right"
				on:click="{() => dispatch('close')}"
		>
			╳
		</nav>
		<summary
				class="override"
		>
			Manual Override
		</summary>
		<table>
			<tr>
				<td>
					<CharacterButton
							character="A"
							fontSize="20"
							fontX="12"
							fontY="19"
							size="24"
							strokeWidth="1"
					></CharacterButton>
				</td>
				<td></td>
				<td>
					<CharacterButton
							character="B"
							fontSize="20"
							fontX="12"
							fontY="19"
							size="24"
							strokeWidth="1"
					></CharacterButton>
				</td>
			</tr>
			<!--
			<tr>
				<td
						colspan="3"
				>
					<var
							style="position: relative; width: 100%"
					>
						<figure
								style="margin: 26px; width: 100%"
						>

							<CharacterButton
									character="A"
									fontSize="22"
									fontX="13"
									fontY="21"
									size="26"
									strokeWidth="1"
									styles="left: -13px; position: absolute; top: 1px;"
							></CharacterButton>
							<RibbonIcon></RibbonIcon>
							<CharacterButton
									character="B"
									fontSize="22"
									fontX="13"
									fontY="21"
									size="26"
									strokeWidth="1"
									styles="right: -13px; position: absolute; top: 1px;"
							></CharacterButton>
						</figure>
					</var>
				</td>
			</tr>
			-->
			<!-- TODO: add support for voting value -->

			{#each voteFactors as voteFactor, i}
			<LinearPositionPicker
					moveDelta="{moveDelta}"
					on:move="{(event) => move(voteFactor.factorNumber, event.detail.outcome, event.detail.percentChange)}"
					on:moveToValue="{(event) => moveToValue(voteFactor.factorNumber, event)}"
					on:update="{update}"
					poll="{poll}"
					voteFactor="{voteFactor}"
			/>
			{/each}
		</table>
	</div>
</aside>
