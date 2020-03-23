<script>
	import {popup}         from '@votecube/vc-logic'
	import {
		beforeUpdate,
		createEventDispatcher,
		onDestroy,
		onMount
	}                      from 'svelte'
	import AddRemoveButton from './button/AddRemoveButton.svelte'

	export let opened    = false

	let changed = {}
	let hidden
	let openState = 0
	let popupUnsubscribe
	let previous = {}

	const dispatch = createEventDispatcher()

	$: visibility = f(() => {
		switch (openState) {
			case 0:
				return 'hidden'
			case 1:
				return 'closed'
			case 2:
				return 'open'
			case 3:
				return 'closed closing'
		}
		return ''
	})

	beforeUpdate(() => {
		changed.opened = opened !== previous.opened;
		previous.opened = opened;

		if (changed.opened && !opened) {
			toggle(true)
		}
	})
	onMount(() => {
		popupUnsubscribe = popup.subscribe(value => {
			hidden = value
		})
	})
	onDestroy(() => popupUnsubscribe())

	function f(func) {
		return func()
	}

	function toggle(oldOpened) {
		if (oldOpened === undefined) {
			oldOpened = opened
		}
		opened = !oldOpened

		if (opened) {
			openState = 1
			setTimeout(() => {
				openState = 2
			}, 10)
		} else {
			openState = 3
			setTimeout(() => {
				openState = 0
			}, 260)
		}
	}
</script>

<style>

	aside {
		bottom: 5px;
		height: 1px;
		max-width: 420px;
		position: fixed;
		width: 100%;
		z-index: 2000;
	}

	aside.hidden {
		display: none;
	}

	div.farAway {
		border: 2px solid black;
		border-radius: 25px;
		height: 32px;
		width: 32px;
	}

	nav {
		align-items: center;
		display: flex;
		height: 65px;
		justify-content: center;
		position: relative;
		width: 65px;
	}

	nav.closed {
		opacity: 0;
	}

	nav.hidden {
		display: none;
	}

	nav.fab {
		border-radius: 34px;
		bottom: -2px;
		height: 69px;
		position: absolute;
		padding: 17px;
		right: -1px;
		width: 69px;
	}

	nav[id$="1"] {
		transition-duration: 250ms;
		transition-delay: 50ms;
	}

	nav[id$="1"].closing {
		transition-delay: 150ms;
	}

	nav[id$="2"] {
		transition-duration: 250ms;
		transition-delay: 80ms;
	}

	nav[id$="2"].closing {
		transition-delay: 120ms;
	}

	nav[id$="3"] {
		transition-duration: 250ms;
		transition-delay: 110ms;
	}

	nav[id$="3"].closing {
		transition-delay: 90ms;
	}

	nav[id$="4"] {
		transition-duration: 200ms;
		transition-delay: 140ms;
	}

	nav[id$="4"].closing {
		transition-delay: 60ms;
	}

	nav[id$="5"] {
		transition-duration: 150ms;
		transition-delay: 170ms;
	}

	nav[id$="5"].closing {
		transition-delay: 30ms;
	}

	/*nav.closed {*/
	/*	display: none;*/
	/*}*/

	nav.open {
		opacity: 1;
	}

	/*nav {*/
	/*	position: relative;*/
	/*}*/

	menu {
		margin: 0px;
		position: absolute;
		z-index: 3;
	}

	span {
		display: block;
		height: 100%;
		position: relative;
		width: 100%;
	}

	/* https://davidwalsh.name/css-reverse */
	.horizontalButtons {
		bottom: 0px;
		display: flex;
		flex-direction: row-reverse;
		right: 60px;
	}

	/* show reverse by vertical column */
	.verticalButtons {
		bottom: 60px;
		display: flex;
		flex-direction: column-reverse;
		right: 0px;
	}

</style>

<aside
		class:hidden="{hidden}"
>
	<menu
			class="verticalButtons"
	>
		<!--		<slot name="vertical"></slot>-->
		<nav
				class="{visibility} fabNav"
				id="fabNav_up1"
		>
			<slot name="up1"></slot>
		</nav>
		<nav
				class="{visibility} fabNav"
				id="fabNav_up2"
		>
			<slot name="up2"></slot>
		</nav>
		<nav
				class="{visibility} fabNav"
				id="fabNav_up3"
		>
			<slot name="up3"></slot>
		</nav>
		<nav
				class="{visibility} fabNav"
				id="fabNav_up4"
		>
			<slot name="up4"></slot>
		</nav>
		<nav
				class="{visibility} fabNav"
				id="fabNav_up5"
		>
			<slot name="up5"></slot>
		</nav>
	</menu>
	<menu
			class="horizontalButtons"
	>
		<nav
				class="{visibility} fabNav"
				id="fabNav_left1"
		>
			<slot name="left1"></slot>
		</nav>
		<nav
				class="{visibility} fabNav"
				id="fabNav_left2"
		>
			<slot name="left2"></slot>
		</nav>
		<nav
				class="{visibility} fabNav"
				id="fabNav_left3"
		>
			<slot name="left3"></slot>
		</nav>
		<nav
				class="{visibility} fabNav"
				id="fabNav_left4"
		>
			<slot name="left4"></slot>
		</nav>
	</menu>
	<nav
			class="fab"
			on:click="{() => toggle(opened)}"
	>
		<span>
		<div
				class="farAway"
		>
			<AddRemoveButton
					add="{!opened}"
					reversible="{true}"
					size="35"
					styles="bottom: 3px; position: absolute; right: 1.5px;"
			></AddRemoveButton>
		</div>
		</span>
	</nav>
</aside>
