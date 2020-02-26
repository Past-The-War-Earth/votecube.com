<script>
	import { beforeUpdate } from 'svelte';

	export let displayed = false
	export let displayedHandle
	export let opened  = false
	export let label     = ''

	let changed = {}
	let closing
	let openedInternal = false
	let previous = {
		opened: false
	}

	// [svelte-upgrade warning]
	// beforeUpdate and afterUpdate handlers behave
	// differently to their v2 counterparts
	beforeUpdate(() => {
		changed.opened = opened !== previous.opened;
		previous.opened = opened;


		if (changed.opened) {
			setTimeout(() => {
				if (!opened) {
					closing = true
					setTimeout(() => {
						closing = false
					}, 201)
				} else {
					closing = false
				}
			}, 1)
			setTimeout(() => {
				openedInternal = opened
			})
			let newDisplayed = opened
			if (closing) {
				newDisplayed = false
			}
			if (newDisplayed) {
				displayedHandle = setTimeout(() => {
					displayed = newDisplayed
				}, 2500)
			} else {
				if (displayedHandle) {
					clearTimeout(displayedHandle)
					displayedHandle = 0
				}
				displayed = newDisplayed
			}
		}
	});

</script>

<style>
	div {
		position: absolute;
		right: 0px;
		top: 0px;
	}

	div:first-child.opened {
		width: 250px;
	}

	div:first-child {
		background-color: #808080;
		border: 3px solid black;
		height: 50px;
		transition: width 0.5s;
		transition-delay: 2s;
		width: 50px;
	}

	div.closing:first-child {
		transition: width 200ms;
		transition-delay: 0s;
	}

	div:first-child,
	span {
		border-radius: 25px;
	}

	span {
		color: white;
		display: inline-block;
		font-size: 1.2em;
		font-weight: 300;
		height: 100%;
		line-height: 42px;
		padding-left: 15px;
		vertical-align: middle;
		width: 100%;
	}

	section {
		position: relative;
	}
</style>

<section
		on:click
>
	<div
			class="upClose"
			class:closing="{closing}"
			class:opened="{openedInternal}"
	>
		{#if displayed}
		<span>
		{label}
		</span>
		{/if}
	</div>
	<div>
		<slot></slot>
	</div>
</section>
