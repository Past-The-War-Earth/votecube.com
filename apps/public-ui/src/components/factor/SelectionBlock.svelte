<script>

	import {DI}            from '@airport/di'
	import {LOGIC_UTILS}   from '@votecube/public-logic'
	import {
		onDestroy,
		onMount
	}                      from 'svelte'
	import CharacterButton from '../../common/control/button/CharacterButton.svelte'
	import Block           from '../../common/field/Block.svelte'

	export let factor
	export let text

	let container
	let logicUtils


	$: color = factor
		? factor.fields.color
		: null
	$: selectedColor = f(() => {
		if (!color || !color.valid) {
			return '#808080'
		}
		const value = color.value

		return `rgb(${value.red}, ${value.green}, ${value.blue})`
	})

	onMount(async () => {
		container  = DI.ui('SelectionBlock')
		logicUtils = await container.get(LOGIC_UTILS)
	})
	onDestroy(() => DI.remove(container))

	function f(func) {
		return func()
	}

	function getTextColor(
		color
	) {
		if (!logicUtils) {
			return '000'
		}
		return logicUtils.getTextColor(color)
	}

</script>

<style>

	figure {
		border: 3px groove gray;
		border-radius: 3px;
		font-size: 1.2em;
		line-height: 0.9em;
		height: 25px;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 25px;
	}


	section {
		display: flex;
		margin-top: 10px;
		width: 100%;
	}

	section > div {
		flex-basis: 100%;
		text-align: center;
		word-break: break-word;
	}

	table {
		width: 100%;
	}

	td:first-child > div {
		position: relative;
		min-height: 25px;
	}

	td:first-child {
		width: 31px;
	}

	td:last-child {
		width: calc(100% - 32px);
	}

	td:last-child > div {
		padding-right: 32px;
		text-align: center;
		width: 100%;
		word-break: break-word;
	}

</style>

<Block
		customError="{text.error}"
		fieldGroup="{factor}"
		on:select
>
	<div slot="content">
		<table>
			<tr>
				<td>
					<div>
						<figure
								style="
                    background-color: {selectedColor};
                    color: #{getTextColor(color.value)};
                "
						>
							T
						</figure>
					</div>
				</td>
				<td>
					<div>
						{#if factor.valid && factor.hasChildValues}
						{factor.fields.name.value}
						{:else}
						{text.label}
						{/if}
					</div>
				</td>
			</tr>
		</table>
		<section>
			<div>
				<CharacterButton
						character="A"
						fontSize="20"
						fontX="12"
						fontY="19"
						size="24"
						strokeWidth="1"
				></CharacterButton>
				<div>
					{#if factor.valid && factor.hasChildValues}
					{factor.fields.positions.fields.A.value}
					{/if}
				</div>
			</div>
			<div>
				<CharacterButton
						character="B"
						fontSize="20"
						fontX="12"
						fontY="19"
						size="24"
						strokeWidth="1"
				></CharacterButton>
				<div>
					{#if factor.valid && factor.hasChildValues}
					{factor.fields.positions.fields.B.value}
					{/if}
				</div>
			</div>
		</section>
	</div>
</Block>
